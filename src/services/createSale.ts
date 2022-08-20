import Sale from "../types/Sale";
import apiUrl from "../utils/apiURL";

const createSale = async (bodyRequest: Sale) => {
    const response = await fetch(`${apiUrl}/vendas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export default createSale;