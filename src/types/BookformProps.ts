import Book from "./Book"

export default interface BookFormProps {
    inputChange: (eventTarget: React.ChangeEvent<HTMLInputElement>, 
        stateProperty: 
        "title" | "author" | "publishingCompany" | "bookImgSrc" | "publicationYear") => void
    inputValues: Book
}