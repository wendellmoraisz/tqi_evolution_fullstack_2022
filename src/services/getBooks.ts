import BookSale from "../types/BookSale";
import apiUrl from "../utils/apiURL";

const getBooks = async (): Promise<BookSale[]> => {
    const result = await fetch(`${apiUrl}/livros`);
    const data = await result.json();
    return data;
}

export default getBooks;