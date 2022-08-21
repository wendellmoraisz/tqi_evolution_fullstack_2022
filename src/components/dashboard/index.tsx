import { useEffect, useState } from "react";
import getBooks from "../../services/getBooks";
import getClients from "../../services/getClients";
import getPurchases from "../../services/getPurchases";
import getSales from "../../services/getSales";
import Sale from "../../types/Sale";
import * as S from "./styles";

const Dashboard = () => {

    const saleDefaultValue = {
        price: 0,
        client: { id: 0 },
        books: [],
    }

    const [booksQuantity, setBooksQuantity] = useState<number>(0);
    const [clientsQuantity, setClientsQuantity] = useState<number>(0);
    const [purchasesQuantity, setPurchasesQauntity] = useState<number>(0);
    const [allSales, setAllSales] = useState<Sale[]>([saleDefaultValue]);

    useEffect(() => {
        getStats();
    }, []);

    const getStats = async () => {
        setBooksQuantity((await getBooks()).length);
        setClientsQuantity((await getClients()).length);
        setPurchasesQauntity((await getPurchases()).length);
        setAllSales(await getSales());
    }

    return (
        <div>
            <S.Title>Olá <span>=D</span></S.Title>
            <S.Container>
                <S.StatesContainer>
                    <h2>Livros cadastrados</h2>
                    <span>
                        <h2>{booksQuantity}</h2>
                    </span>
                </S.StatesContainer>
                <S.StatesContainer>
                    <h2>Clientes</h2>
                    <span>
                        <h2>{clientsQuantity}</h2>
                    </span>
                </S.StatesContainer>
                <S.StatesContainer>
                    <h2>Valor total vendido</h2>
                    <span>
                        <h2>{`R$${allSales.length ?
                            allSales.map(sale => sale.price).reduce((value, nextValue) => value + nextValue) : 0}`}</h2>
                    </span>
                </S.StatesContainer>
                <S.StatesContainer>
                    <h2>Total de pedidos</h2>
                    <span>
                        <h2>{purchasesQuantity}</h2>
                    </span>
                </S.StatesContainer>

            </S.Container>
        </div>
    )
}

export default Dashboard;