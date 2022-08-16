import { useState } from "react";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";

const RegisterBook = () => {

    const [inputValues, setInputValues] = useState<Book>({
        title: "",
        author: "",
        publishingCompany: "",
        bookImgSrc: "",
        publicationYear: "",
    });

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
                    onChange={e => handleInputValue(e, "title")}
                    placeholder="título"
                />
                <input
                    type="text"
                    onChange={e => handleInputValue(e, "author")}
                    placeholder="autor"
                />
                <input
                    type="text"
                    onChange={e => handleInputValue(e, "publishingCompany")}
                    placeholder="editora"
                />
                <input
                    type="text" onChange={e => handleInputValue(e, "bookImgSrc")}
                    placeholder="url da imagem do livro"
                />
                <input
                    type="text"
                    onChange={e => handleInputValue(e, "publicationYear")}
                    placeholder="ano de publicação"
                />
                <button onClick={() => registerBook(inputValues)}>confirmar</button>
            </div>
        </div>
    )
}

export default RegisterBook;