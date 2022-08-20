import BookSale from "./BookSale";

export default interface Sale {
    price: number
    client: {
        id: number
    }
    books: BookSale[]
}