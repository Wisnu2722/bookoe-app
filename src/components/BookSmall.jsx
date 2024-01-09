import { useState, useEffect } from "react";
import Rating from "./Rating";
import Loading from "./Loading";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";


const BookSmall = (prop) => {
    const [bookList, setBookList] = useState([]);
    // const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books/";

    const fetchBooks = async () => {
        try {
            const response = await fetch(prop.ENDPOINT);
            const responseJson = await response.json();
            const databookList = responseJson.data;
            setBookList(databookList);
        } catch (error) {
            alert('error fetching data from API')
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);
    return (
        <>
            {bookList.length > 0 ? (
                <div className="mx-auto max-w-[1241px] mt-[113px]">
                    <div className='grid grid-cols-4 gap-x-[60px]'>
                        {bookList.slice(0, 4).map((book, index) => (
                            <div key={index} className="book-info items-end">
                                <div className="w-min[260px] h-[340px] overflow-hidden">
                                    <img className="rounded-lg w-full h-full object-cover" src={book['image_url']} alt="book cover image" />
                                </div>
                                <p className=" text-black text-2xl font-semibold font-['Poppins'] mb-2 ">
                                    <TextTruncate
                                        line={2}
                                        element="span"
                                        truncateText="…"
                                        text={book['title']}
                                    />
                                </p>
                                <p className=" mb-3  ">by {book['author']['name']}</p>
                                <Rating value={book['rating']} />
                                <div className="align-bottom mt-[12px] self-end">
                                    <Link
                                    to={`/book/${book.id}`}
                                    key={book.id}
                                    >
                                        <button className="rounded-lg  w-full border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500">Read Book</button>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <Loading />
            )}


        </>
    )
}

export default BookSmall