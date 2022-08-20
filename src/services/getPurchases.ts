import Purchase from "../types/Purchase";
import apiUrl from "../utils/apiURL";

const getPurchases = async (): Promise<Purchase[]> => {
    const result = await fetch(`${apiUrl}/compras`);
    const data = await result.json();
    return data;
}

export default getPurchases;