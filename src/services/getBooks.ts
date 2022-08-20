import BookSale from "../types/BookSale";

const getBooks = async (): Promise<BookSale[]> => {
    const result = await fetch("http://localhost:8080/livros");
    const data = await result.json();
    return data;
}

export default getBooks;