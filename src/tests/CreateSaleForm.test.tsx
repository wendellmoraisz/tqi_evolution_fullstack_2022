import { render } from "@testing-library/react";
import CreateSaleForm from "../components/createSaleform";

describe("Create Sale Component", () => {
    
    it("should ren", () => {
        const { getByText } = render(<CreateSaleForm />);
        expect(getByText("O cliente já está cadastrado?")).toBeInTheDocument;
        expect(getByText("Valor total")).toBeInTheDocument;
    });

    it("Selected option must be disabled", () => {
        const { getByText } = render(<CreateSaleForm />);
        expect(getByText("Selecionar livro")).toBeDisabled;
    });

    it("label must be chekced", () => {
        const { getByText } = render(<CreateSaleForm />);
        expect(getByText("Sim")).toBeChecked;
    });
});