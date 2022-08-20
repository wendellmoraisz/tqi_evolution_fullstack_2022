import { useEffect, useState } from "react";
import createPurchase from "../../services/createPurchase";
import getBooks from "../../services/getBooks";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";
import Purchase from "../../types/Purchase";
import BookForm from "../bookForm/BookForm";
import bookDefaultvalues from "../../common/bookDefaultValue";

const CreatePurchaseForm = () => {

    const inputDefaultValues = {
        quantity: 0,
        unityValue: 0,
        book: {
            id: null
        }
    }

    const [purchaseValues, setPurchaseValues] = useState<Purchase>(inputDefaultValues);
    const [bookAlreadyRegistered, setBookAlreadyRegistered] = useState<boolean>(true);
    const [bookValues, setBookValues] = useState<Book>(bookDefaultvalues);
    const [allBooks, setAllBooks] = useState<Book[]>([bookDefaultvalues]);
    const [isUpload, setIsUpload] = useState<boolean>(false);

    const clearpurchaseValues = () => setPurchaseValues(inputDefaultValues);

    const handleBookValues = (eventTarget: React.ChangeEvent<HTMLInputElement>,
        stateProperty: "title" | "author" | "publishingCompany" | "bookImgSrc" | "publicationYear"
    ) => {
        setBookValues(prev => ({ ...prev, [stateProperty]: eventTarget.target.value }));
    }

    const setBookId = (bookId: number) => {
        const newBook = Object.assign({}, { id: bookId });
        setPurchaseValues(prev => ({ ...prev, book: newBook }));
    }

    useEffect(() => {
        if (isUpload) createPurchase(purchaseValues).then(() => setIsUpload(false));
    }, [purchaseValues.book]);

    const addPurchase = () => {
        if (!bookAlreadyRegistered) {
            registerBook(bookValues)
                .then(data => {
                    setIsUpload(true);
                    setPurchaseValues(prev => ({ ...prev, book: { id: data.id } }));
                });
        } else {
            createPurchase(purchaseValues);
        }
    }

    const setBooksList = async () => {
        const data = await getBooks();
        setAllBooks(data);
    }

    useEffect(() => {
        setBooksList();
    }, [bookAlreadyRegistered]);

    return (
        <div>
            <div>
                <h1>Fazer Pedido</h1>
                <p>Quanitidade de exemplares</p>
                <input
                    type="number"
                    value={purchaseValues.quantity}
                    onChange={e => setPurchaseValues(prev => ({ ...prev, quantity: Number(e.target.value) }))}
                />
                <p>Valor unitário</p>
                <input
                    type="number"
                    onChange={e => setPurchaseValues(prev => ({ ...prev, unityValue: Number(e.target.value) }))}
                    value={purchaseValues.unityValue}
                />
                <div>
                    <h3>O livro já está cadastrado?</h3>
                    <input checked={bookAlreadyRegistered} onChange={() => setBookAlreadyRegistered(!bookAlreadyRegistered)} type="radio" name="bookIsCreated" id="yes" />
                    <label htmlFor="yes">Sim</label>
                    <input checked={!bookAlreadyRegistered} onChange={() => setBookAlreadyRegistered(!bookAlreadyRegistered)} type="radio" name="bookIsCreated" id="no" />
                    <label htmlFor="no">Não</label>
                </div>
                {bookAlreadyRegistered ?
                    <select onChange={e => setBookId(Number(e.target.value))} name="" id="">
                        <option disabled selected >Selecionar livro</option>
                        {allBooks.map(book => <option key={book.id} value={book.id ?? 0}>{`${book.title} - ${book.author}`}</option>)}
                    </select>
                    :
                    <>
                        <h3>Cadastrar Livro</h3>
                        <BookForm
                            inputValues={bookValues}
                            inputChange={handleBookValues}
                        />
                    </>
                }
                <button onClick={addPurchase}>Confirmar</button>
            </div>
        </div>
    )
}

export default CreatePurchaseForm;