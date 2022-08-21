import { useEffect, useState } from "react";
import createSale from "../../services/createSale";
import getBooks from "../../services/getBooks";
import getClients from "../../services/getClients";
import registerClient from "../../services/registerClient";
import BookSale from "../../types/BookSale";
import Client from "../../types/Client";
import Sale from "../../types/Sale";
import bookDefaultvalues from "../../common/bookDefaultValue";
import * as S from "./styles";
import StyledConfirmButton from "../../styles/StyledConfirmButton";
import StyledSelect from "../../styles/StyledSelect";
import StyledInput from "../../styles/StyledInput";
import StyledLabel from "../../styles/StyledLabel";

const CreateSaleForm = () => {

    const clientDefaultValue = {
        name: "",
        cpf: "",
        phoneNumber: 0,
        address: "",
    }

    const saleDefaultValue = {
        price: 0,
        client: { id: 0 },
        books: [],
    }

    const [books, setBooks] = useState<BookSale[]>([]);
    const [isUpload, setIsUpload] = useState<boolean>(false);
    const [allBooks, setAllBooks] = useState<BookSale[]>([bookDefaultvalues]);
    const [allClients, setAllClients] = useState<Client[]>([clientDefaultValue]);
    const [clientValues, setClientValues] = useState<Client>(clientDefaultValue);
    const [sale, setSale] = useState<Sale>(saleDefaultValue);
    const [clientIsAlreadyRegistered, setClientIsAlreadyRegistered] = useState<boolean>(true);

    useEffect(() => {
        getBooks()
            .then(data => setAllBooks(data));
        getClients()
            .then(data => setAllClients(data));
    }, []);

    const removeBook = (bookId: number) => {
        const filteredBooks = books.filter(book => book.id !== bookId);
        setBooks(filteredBooks);
    }

    const addBook = (newBookId: number) => {
        const newBook = allBooks.filter(book => book.id === newBookId);
        newBook[0].quantity = 1;
        setBooks([...books, newBook[0]]);
    }

    const handleClientValues = (eventTarget: React.ChangeEvent<HTMLInputElement>,
        stateProperty: "name" | "cpf" | "phoneNumber" | "address"
    ) => {
        setClientValues(prev => ({ ...prev, [stateProperty]: eventTarget.target.value }));
    }

    useEffect(() => {
        if (isUpload) createSale(sale).then(() => setIsUpload(false));
    }, [sale.client, sale.books]);

    const addSale = () => {
        setIsUpload(true);
        const newBooks = books;
        newBooks.forEach(book => book.id = null);
        setBooks(newBooks);
        if (!clientIsAlreadyRegistered) {
            registerClient(clientValues)
                .then(data => {
                    setSale(prev => ({ ...prev, client: { id: data.id }, books: [...books] }));
                });
        } else {
            setSale(prev => ({ ...prev, books: [...books] }));
        }
    }

    const changeBookQuantity = (bookId: number, operation: "encrement" | "decrement") => {
        const newBooks = books;
        newBooks.forEach(book => {
            if (book.id === bookId) {
                if (operation === "encrement") return book.quantity += 1;
                if (book.quantity !== 1) book.quantity -= 1;
            }
        });
        setBooks([...newBooks]);
    }

    return (
        <S.Container>
            <div>

                <h1>Lançar venda</h1>
                <h2>Cliente</h2>
                <div>
                    <h3>O cliente já está cadastrado?</h3>
                    <div style={{ display: "flex" }}>
                        <S.RadioInput
                            checked={clientIsAlreadyRegistered}
                            onChange={() => setClientIsAlreadyRegistered(!clientIsAlreadyRegistered)}
                            type="radio"
                            name="bookIsCreated"
                            id="yes" />
                        <StyledLabel style={{ background: clientIsAlreadyRegistered ? "#32E0CF" : "#fff" }} htmlFor="yes">
                            <span>Sim</span>
                        </StyledLabel>

                        <S.RadioInput checked={!clientIsAlreadyRegistered} onChange={() => setClientIsAlreadyRegistered(!clientIsAlreadyRegistered)} type="radio" name="bookIsCreated" id="no" />
                        <StyledLabel htmlFor="no" style={{ background: clientIsAlreadyRegistered ? "#fff" : "#32E0CF" }}>
                            <span>Não</span>
                        </StyledLabel>
                    </div>
                </div>
                {!clientIsAlreadyRegistered ?
                    <div>
                        <p>Nome</p>
                        <StyledInput onChange={e => handleClientValues(e, "name")} type="text" />
                        <p>CPF</p>
                        <StyledInput onChange={e => handleClientValues(e, "cpf")} type="number" maxLength={11} />
                        <p>Número de telefone</p>
                        <StyledInput onChange={e => handleClientValues(e, "phoneNumber")} type="text" />
                        <p>Endereço</p>
                        <StyledInput onChange={e => handleClientValues(e, "address")} type="text" />
                    </div>
                    :
                    <StyledSelect onChange={e => setSale(prev => ({ ...prev, client: { id: Number(e.target.value) } }))}>
                        <option disabled selected>Selecionar cliente</option>
                        {allClients.map(client => (
                            <option value={client.id}>{client.name} - {client.phoneNumber}</option>
                        ))}
                    </StyledSelect>
                }
                <div>
                    <h2>Livros</h2>
                    <StyledSelect onChange={e => addBook(Number(e.target.value))}>
                        <option disabled selected>Selecionar livro</option>
                        {allBooks.map(book => (
                            <option value={book.id ?? 0}>{book.title} - {book.author}</option>
                        ))}
                    </StyledSelect>
                </div>
                <h3>Valor total</h3>
                <span style={{ marginRight: "8px" }}>R$</span>
                <StyledInput style={{ marginRight: "8px" }} onChange={e => setSale(prev => ({ ...prev, price: Number(e.target.value) }))} type="number" name="" id="" />
                <StyledConfirmButton onClick={addSale}>confirmar</StyledConfirmButton>
            </div>
            <div>
                <h3>Livros selecionados</h3>
                {books.map((book, index) => (
                    <>
                        <p key={index}>{book.title} - {book.author}</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p>Quantidade:</p>
                            <div>
                                <S.HandleQuantityButton onClick={() => changeBookQuantity(book.id as number, "decrement")}>-</S.HandleQuantityButton>
                                <span>{book.quantity}</span>
                                <S.HandleQuantityButton onClick={() => changeBookQuantity(book.id as number, "encrement")}>+</S.HandleQuantityButton>
                            </div>
                        </div>
                        <S.RemoveButton onClick={() => removeBook(book.id as number)}>Remover</S.RemoveButton>
                    </>
                ))}
            </div>
        </S.Container >
    )
}

export default CreateSaleForm;