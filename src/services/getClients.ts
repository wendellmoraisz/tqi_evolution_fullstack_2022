const getClients = async () => {
    const response = await fetch("http://localhost:8080/clientes");
    const data = await response.json();
    return data;
}

export default getClients;