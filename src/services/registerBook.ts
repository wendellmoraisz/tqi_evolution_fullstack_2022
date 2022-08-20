import Book from "../types/Book";
import apiUrl from "../utils/apiURL";

const registerBook = async (bodyRequest: Book) => {

    const result = await fetch(`${apiUrl}/livros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const response = await result.json();
    console.log(response);
    return response;
}

export default registerBook;