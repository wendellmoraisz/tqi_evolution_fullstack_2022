import { useState } from "react";
import registerBook from "../../services/registerBook";
import Book from "../../types/Book";
import BookForm from "../bookForm/BookForm";
import bookDefaultvalues from "../../common/bookDefaultValue";
import StyledConfirmButton from "../../styles/StyledConfirmButton";

const RegisterBook = () => {

    const [inputValues, setInputValues] = useState<Book>(bookDefaultvalues);

    const clearInputs = () => setInputValues(bookDefaultvalues);

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
                />
            <StyledConfirmButton onClick={addBook}>Confirmar</StyledConfirmButton>
            </div>
        </div>
    )
}

export default RegisterBook;