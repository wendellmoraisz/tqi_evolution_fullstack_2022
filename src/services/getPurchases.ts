import Purchase from "../types/Purchase";

const getPurchases = async (): Promise<Purchase[]> => {
    const result = await fetch("http://localhost:8080/compras");
    const data = await result.json();
    return data;
}

export default getPurchases;