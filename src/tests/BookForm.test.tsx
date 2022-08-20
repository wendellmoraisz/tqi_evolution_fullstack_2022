import { render } from "@testing-library/react";
import RegisterBook from "../components/registerBook/index";
import BookForm from "../components/bookForm/BookForm";
import bookDefaultValue from "../common/bookDefaultValue";

describe("Register Book Component", () => {
    it("should render form with five inputs", () => {
        const handleBookValues = (eventTarget: React.ChangeEvent<HTMLInputElement>,
            stateProperty: "title" | "author" | "publishingCompany" | "bookImgSrc" | "publicationYear") => { }
        render(<RegisterBook />)
        const { getAllByPlaceholderText } = render(<BookForm
            inputChange={handleBookValues}
            inputValues={bookDefaultValue}
        />);

        expect(getAllByPlaceholderText("Título")).toBeInTheDocument;
        expect(getAllByPlaceholderText("Autor")).toBeInTheDocument;
        expect(getAllByPlaceholderText("Editora")).toBeInTheDocument;
        expect(getAllByPlaceholderText("URL da imagem de capa")).toBeInTheDocument;
        expect(getAllByPlaceholderText("Ano de publicação")).toBeInTheDocument;
    });
});
