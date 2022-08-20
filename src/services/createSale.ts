import Sale from "../types/Sale";

const createSale = async (bodyRequest: Sale) => {
    const response = await fetch("http://localhost:8080/vendas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export default createSale;