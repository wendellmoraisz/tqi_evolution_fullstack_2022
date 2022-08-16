import { useState } from "react";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";
import BookForm from "../bookForm/BookForm";

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
            <div style={{ display: "flex", "flexDirection": "column", gap: "16px" }}>
                <BookForm
                    inputChange={handleInputValue}
                    inputValues={inputValues}
                    buttonClickAction={addBook}
                />
            </div>
        </div>
    )
}

export default RegisterBook;