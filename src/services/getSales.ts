import Sale from "../types/Sale";
import apiUrl from "../utils/apiURL";

const getSales = async (): Promise<Sale[]> => {
    const response = await fetch(`${apiUrl}/vendas`);
    const data = await response.json();
    return data;
}

export default getSales;