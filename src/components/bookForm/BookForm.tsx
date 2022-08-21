import BookFormProps from "../../types/BookformProps";
import StyledInput from "../../styles/StyledInput";

const BookForm = ({ inputChange, inputValues }: BookFormProps) => {

    return (
        <>
            <h1 style={{ fontWeight: "400" }}>Cadastrar Livro</h1>
            <p>Título</p>
            <StyledInput
                type="text"
                value={inputValues.title}
                onChange={e => inputChange(e, "title")}
            />
            <p>Autor</p>
            <StyledInput
                type="text"
                value={inputValues.author}
                onChange={e => inputChange(e, "author")}
            />
            <p>Editora</p>
            <StyledInput
                type="text"
                value={inputValues.publishingCompany}
                onChange={e => inputChange(e, "publishingCompany")}
            />
            <p>Link da imagem de capa</p>
            <StyledInput
                type="text"
                value={inputValues.bookImgSrc}
                onChange={e => inputChange(e, "bookImgSrc")}
            />
            <p>Ano de publicação</p>
            <StyledInput
                type="number"
                value={inputValues.publicationYear}
                onChange={e => inputChange(e, "publicationYear")}
            />
        </>
    )
}

export default BookForm;