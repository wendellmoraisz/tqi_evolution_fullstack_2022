import Purchase from "../types/Purchase";
import apiUrl from "../utils/apiURL";

const createPurchase = async (bodyRequest: Purchase) => {
    const result = await fetch(`${apiUrl}/compras`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const response = await result.json();
    console.log(response);
}

export default createPurchase;