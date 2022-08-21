import { render } from "@testing-library/react";
import Dashboard from "../components/dashboard";

describe("Dashboard Component", () => {
    it("should render page with four boxes", () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText("Livros cadastrados")).toBeInTheDocument;
        expect(getByText("Clientes")).toBeInTheDocument;
        expect(getByText("Valor total vendido")).toBeInTheDocument;
        expect(getByText("Total de pedidos")).toBeInTheDocument;
    });
});
