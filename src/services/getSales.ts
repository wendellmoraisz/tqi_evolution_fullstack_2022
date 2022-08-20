import Sale from "../types/Sale";

const getSales = async (): Promise<Sale[]> => {
    const response = await fetch("http://localhost:8080/vendas");
    const data = await response.json();
    return data;
}

export default getSales;