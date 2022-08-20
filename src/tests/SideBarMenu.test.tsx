import { render } from "@testing-library/react";
import SideBarMenu from "../components/sideMenu";

describe("Sidebar Component", () => {
    it("should render a list of items", () => {
        const { getByText } = render(<SideBarMenu/>);

        expect(getByText("Lançar venda")).toBeInTheDocument();
        expect(getByText("Cadastrar livro")).toBeInTheDocument();
        expect(getByText("Fazer pedido")).toBeInTheDocument();
        expect(getByText("Dashboard")).toBeInTheDocument();
    });
});