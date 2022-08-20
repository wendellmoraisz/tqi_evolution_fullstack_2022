import { useEffect, useState } from "react";
import getBooks from "../../services/getBooks";
import getClients from "../../services/getClients";
import getPurchases from "../../services/getPurchases";
import getSales from "../../services/getSales";
import Sale from "../../types/Sale";

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
            <h1>Olá =D</h1>
            <div>
                <h2>Total de livros cadastrados</h2>
                <h2>{booksQuantity}</h2>
            </div>
            <div>
                <h2>Total de clientes cadastrados</h2>
                <h2>{clientsQuantity}</h2>
            </div>
            <div>
                <h2>Valor total vendido</h2>
                <h2>{`R$${allSales.length ?
                    allSales.map(sale => sale.price).reduce((value, nextValue) => value + nextValue) : 0}`}</h2>
            </div>
            <div>
                <h2>Total de pedidos</h2>
                <h2>{purchasesQuantity}</h2>
            </div>

        </div>
    )
}

export default Dashboard;