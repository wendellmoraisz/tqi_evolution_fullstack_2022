import Client from "../types/Client";
import apiUrl from "../utils/apiURL";

const getClients = async (): Promise<Client[]> => {
    const response = await fetch(`${apiUrl}/clientes`);
    const data = await response.json();
    return data;
}

export default getClients;