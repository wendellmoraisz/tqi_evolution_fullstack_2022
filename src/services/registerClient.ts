import Client from "../types/Client";

const registerClient = async (client: Client) => {

    const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
    });
    const json = await response.json();
    console.log(json);
    return json;
}

export default registerClient;