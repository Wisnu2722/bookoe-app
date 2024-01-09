import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Rating from './Rating';
import TextTruncate from 'react-text-truncate';

const Latest = () => {
    const [latestBook, setLatestBook] = useState([]);
    const ENDPOINT = `https://bookapi.cm.hmw.lol/api/books`;

    async function fetchBooks() {
        try {
            const response = await fetch(ENDPOINT);
            const json = await response.json();
            const data = json.data;
            const sortedData = data.sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            const slicedata = sortedData.slice(0, 12);
            console.log(slicedata);
            setLatestBook(slicedata);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    function formatDate(inputDateString) {
        const inputDate = new Date(inputDateString);

        const day = String(inputDate.getDate()).padStart(2, '0');
        const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = inputDate.getFullYear();

        const formattedDate = `${day}/${month}/${year}`;

        return formattedDate;
    }

    // const inputString = '2023-11-30 04:02:03';
    // const formattedDate = formatDate(inputString);
    // console.log(formattedDate)


    return (
        <>
            <div className="grid grid-rows-1" >
                <div className="grid grid-cols-4 gap-10 ">
                    {latestBook.map((book, index) => (

                        <div key={index} className="book-info items-end relative">
                            <div className="pl-4 py-1 absolute top-6 rounded-r-xl w-1/2 bg-violet-600">
                                <p className="text-white text-lg font-normal font-['Poppins']">{formatDate(book['created_at'])}</p>
                            </div>
                            <div className="w-min[260px] h-[340px] overflow-hidden">
                                <img className="rounded-lg w-full h-full object-cover" src={book['image_url']} alt="book cover image" />
                            </div>
                            <p className=" text-black text-2xl font-semibold font-['Poppins'] mb-2 mt-4 ">
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
                    ))
                    }

                </div>


            </div>

        </>
    )
}


export default Latest