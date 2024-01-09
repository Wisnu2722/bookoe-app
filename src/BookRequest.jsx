import { useState, useEffect } from "react"

const BookRequest = () => {
    // eslint-disable-next-line no-unused-vars
    const [bookList, setBookList] = useState([]);
    const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books/";

    const fetchBooks = async () => {
        const response = await fetch(ENDPOINT);
        const responseJson = await response.json();
        const databookList = responseJson.data;
        setBookList(databookList);
    };

    useEffect(() => {
        fetchBooks();
    }, []);
   
}

export default BookRequest