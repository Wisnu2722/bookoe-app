
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import TextTruncate from 'react-text-truncate';

const TopPicks = () => {
    const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books"
    const [topPick, setTopPick] = useState([]);
    async function fetchBooks() {
        try {
            const response = await fetch(ENDPOINT);
            const json = await response.json();
            const data = json.data;
            const filteredData = data.filter((item) => item.is_top_pick === true);
            const toppick = filteredData.slice(4, 8);
            const dataWithIndex = toppick.map((item, index) => ({
                ...item,
                nomorUrut: index + 1,
            }));
            setTopPick(dataWithIndex);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <>
            <div className='grid grid-cols-4 gap-x-[60px]'>
                {topPick.map((book, index) => (
                    <div key={index} className="book-info relative items-end">
                        <div className="pl-4 py-1 absolute top-6 rounded-r-2xl w-1/4 flex justify-end bg-violet-600 pr-1">
                            <div className="w-[24px] h-[24px] bg-white rounded-[50px] z-10  pl-[8px] pt-[3px]  " >
                                <p className="text-violet-500 text-sm    font-normal font-['Poppins'] z-20">{index + 1}</p>
                            </div>

                        </div>
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

        </>
    )

}
export default TopPicks