import Purchase from "../types/Purchase";

const createPurchase = async (bodyRequest: Purchase) => {
    const result = await fetch("http://localhost:8080/compras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const response = await result.json();
    console.log(response);
}

export default createPurchase;