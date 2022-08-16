import Book from "../types/Book";

const registerBook = async (bodyRequest: Book) => {

    const result = await fetch("http://localhost:8080/livros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyRequest),
    });
    const response = await result.json();
    console.log(response);
}

export default registerBook;