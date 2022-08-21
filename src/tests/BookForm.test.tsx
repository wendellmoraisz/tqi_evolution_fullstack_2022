import { render } from "@testing-library/react";
import RegisterBook from "../components/registerBook/index";
import BookForm from "../components/bookForm/BookForm";
import bookDefaultValue from "../common/bookDefaultValue";

describe("Register Book Component", () => {
    it("should render form with five inputs", () => {
        const handleBookValues = (eventTarget: React.ChangeEvent<HTMLInputElement>,
            stateProperty: "title" | "author" | "publishingCompany" | "bookImgSrc" | "publicationYear") => { }
        render(<RegisterBook />)
        const { getAllByText } = render(<BookForm
            inputChange={handleBookValues}
            inputValues={bookDefaultValue}
        />);

        expect(getAllByText("Título")).toBeInTheDocument;
        expect(getAllByText("Autor")).toBeInTheDocument;
        expect(getAllByText("Editora")).toBeInTheDocument;
        expect(getAllByText("Link da imagem de capa")).toBeInTheDocument;
        expect(getAllByText("Ano de publicação")).toBeInTheDocument;
    });
});
