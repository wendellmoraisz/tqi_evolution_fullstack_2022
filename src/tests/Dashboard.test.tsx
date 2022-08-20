import { render } from "@testing-library/react";
import Dashboard from "../components/dashboard";

describe("Dashboard Component", () => {
    it("should render page with four headers", () => {
        const { getByText } = render(<Dashboard />);

        expect(getByText("Total de livros cadastrados")).toBeInTheDocument;
        expect(getByText("Total de clientes cadastrados")).toBeInTheDocument;
        expect(getByText("Valor total vendido")).toBeInTheDocument;
        expect(getByText("Total de pedidos")).toBeInTheDocument;
    });
});
