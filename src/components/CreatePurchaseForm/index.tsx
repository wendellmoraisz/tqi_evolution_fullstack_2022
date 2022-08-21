import { useEffect, useState } from "react";
import createPurchase from "../../services/createPurchase";
import getBooks from "../../services/getBooks";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";
import Purchase from "../../types/Purchase";
import BookForm from "../bookForm/BookForm";
import bookDefaultvalues from "../../common/bookDefaultValue";
import StyledConfirmButton from "../../styles/StyledConfirmButton";
import StyledInput from "../../styles/StyledInput";
import StyledSelect from "../../styles/StyledSelect";
import StyledLabel from "../../styles/StyledLabel";

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
                <h1 style={{ fontWeight: "300", marginBottom: "20px" }}>Fazer Pedido</h1>
                <p>Quanitidade de exemplares</p>
                <StyledInput
                    type="number"
                    value={purchaseValues.quantity}
                    onChange={e => setPurchaseValues(prev => ({ ...prev, quantity: Number(e.target.value) }))}
                />
                <p>Valor unitário</p>
                <StyledInput
                    type="number"
                    onChange={e => setPurchaseValues(prev => ({ ...prev, unityValue: Number(e.target.value) }))}
                    value={purchaseValues.unityValue}
                />
                <div>
                    <h3 style={{ fontWeight: "400" }}>O livro já está cadastrado?</h3>
                    <div style={{ display: "flex" }}>
                        <StyledLabel style={{ background: bookAlreadyRegistered ? "#32E0CF" : "#fff" }} htmlFor="yes">Sim</StyledLabel>
                        <input style={{ display: "none" }} checked={bookAlreadyRegistered} onChange={() => setBookAlreadyRegistered(!bookAlreadyRegistered)} type="radio" name="bookIsCreated" id="yes" />
                        <StyledLabel style={{ background: bookAlreadyRegistered ? "#fff" : "#32E0CF" }} htmlFor="no">Não</StyledLabel>
                        <input style={{ display: "none" }} checked={!bookAlreadyRegistered} onChange={() => setBookAlreadyRegistered(!bookAlreadyRegistered)} type="radio" name="bookIsCreated" id="no" />
                    </div>
                </div>
                {bookAlreadyRegistered ?
                    <StyledSelect style={{ marginRight: "8px" }} onChange={e => setBookId(Number(e.target.value))}>
                        <option disabled selected >Selecionar livro</option>
                        {allBooks.map(book => <option key={book.id} value={book.id ?? 0}>{`${book.title} - ${book.author}`}</option>)}
                    </StyledSelect>
                    :
                    <>
                        <BookForm
                            inputValues={bookValues}
                            inputChange={handleBookValues}
                        />
                    </>
                }
                <StyledConfirmButton style={{ marginLeft: "8px" }} onClick={addPurchase}>Confirmar</StyledConfirmButton>
            </div>
        </div>
    )
}

export default CreatePurchaseForm;