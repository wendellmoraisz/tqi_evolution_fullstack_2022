import BookFormProps from "../../types/BookformProps";

const BookForm = ({ inputChange, inputValues, buttonClickAction }: BookFormProps) => {

    return (
        <>
            <input
                type="text"
                value={inputValues.title}
                onChange={e => inputChange(e, "title")}
                placeholder="Título"
            />
            <input
                type="text"
                value={inputValues.author}
                onChange={e => inputChange(e, "author")}
                placeholder="Autor"
            />
            <input
                type="text"
                value={inputValues.publishingCompany}
                onChange={e => inputChange(e, "publishingCompany")}
                placeholder="Editora"
            />
            <input
                type="text"
                value={inputValues.bookImgSrc}
                onChange={e => inputChange(e, "bookImgSrc")}
                placeholder="URL da imagem de capa"
            />
            <input
                type="number"
                value={inputValues.publicationYear}
                onChange={e => inputChange(e, "publicationYear")}
                placeholder="Ano de publicação"
            />
            <button onClick={buttonClickAction}>Confirmar</button>
        </>
    )
}

export default BookForm;