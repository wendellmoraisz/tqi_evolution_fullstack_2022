import Client from "../types/Client";
import apiUrl from "../utils/apiURL";

const registerClient = async (client: Client) => {

    const response = await fetch(`${apiUrl}/clientes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
    });
    const json = await response.json();
    console.log(json);
    return json;
}

export default registerClient;