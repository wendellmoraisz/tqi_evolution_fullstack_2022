import { render } from "@testing-library/react";
import CreatePurchaseForm from "../components/CreatePurchaseForm";

describe("Create Sale Component", () => {

    it("should render two header texts", () => {
        const { getByText } = render(<CreatePurchaseForm />);
        expect(getByText("O livro já está cadastrado?")).toBeInTheDocument;
        expect(getByText("Fazer Pedido")).toBeInTheDocument;
    });

    it("Selected option must be disabled", () => {
        const { getByText } = render(<CreatePurchaseForm />);
        expect(getByText("Selecionar livro")).toBeDisabled;
    });

    it("label must be chekced", () => {
        const { getByText } = render(<CreatePurchaseForm />);
        expect(getByText("Sim")).toBeChecked;
    });
});