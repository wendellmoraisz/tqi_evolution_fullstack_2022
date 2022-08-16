import { useState } from "react";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";

const RegisterBook = () => {

    const inputDefaultValue = {
        title: "",
        author: "",
        publishingCompany: "",
        bookImgSrc: "",
        publicationYear: 0,
    }

    const [inputValues, setInputValues] = useState<Book>(inputDefaultValue);

    const clearInputs = () => setInputValues(inputDefaultValue);

    const addBook = () => {
        registerBook(inputValues);
        clearInputs();
    }

    const handleInputValue = (eventTarget: React.ChangeEvent<HTMLInputElement>,
        stateProperty: "title" | "author" | "publishingCompany" | "bookImgSrc" | "publicationYear"
    ) => {
        setInputValues(prev => ({ ...prev, [stateProperty]: eventTarget.target.value }));
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValues.title}
                    onChange={e => handleInputValue(e, "title")}
                    placeholder="título"
                />
                <input
                    type="text"
                    value={inputValues.author}
                    onChange={e => handleInputValue(e, "author")}
                    placeholder="autor"
                />
                <input
                    type="text"
                    value={inputValues.publishingCompany}
                    onChange={e => handleInputValue(e, "publishingCompany")}
                    placeholder="editora"
                />
                <input
                    type="text" 
                    value={inputValues.bookImgSrc}
                    onChange={e => handleInputValue(e, "bookImgSrc")}
                    placeholder="url da imagem do livro"
                />
                <input
                    type="number"
                    value={inputValues.publicationYear}
                    onChange={e => handleInputValue(e, "publicationYear")}
                    placeholder="ano de publicação"
                />
                <button onClick={addBook}>confirmar</button>
            </div>
        </div>
    )
}

export default RegisterBook;