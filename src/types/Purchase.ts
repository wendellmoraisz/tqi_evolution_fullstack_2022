import Book from "./Book";

export default interface Purchase {
    quantity: number
    unityValue: number
    book: {
        id: number | null
    }
}