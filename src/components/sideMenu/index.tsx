import * as S from "./styles";
import { Link } from "react-router-dom";

const SideBarMenu = () => {

    return (
        <S.NavContainer>
            <h1>TQI Books</h1>
            <S.ListOptions>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/nova-venda" >Lançar venda</Link>
                </li>
                <li>
                    <Link to="/cadastrar-livro">Cadastrar livro</Link>
                </li>
                <li>
                    <Link to="/fazer-pedido">Fazer pedido</Link>
                </li>
            </S.ListOptions>
        </S.NavContainer>
    )
}

export default SideBarMenu;