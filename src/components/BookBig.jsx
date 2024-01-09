import { useState, useEffect } from "react";
import Rating from "./Rating";
import Loading from "./Loading";
import RandomIndexGenerator from "./RandomIndexGenerator";
import TextTruncate from "react-text-truncate";
const BookBig = () => {
    const [bookList, setBookList] = useState([]);
    const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books/";

    const fetchBooks = async () => {
        const response = await fetch(ENDPOINT);
        const responseJson = await response.json();
        const dataBookList = responseJson.data;
        setBookList(dataBookList);

    };

    useEffect(() => {
        fetchBooks();
    }, []);

    // const index = Math.random(1,5)
    const index1 = RandomIndexGenerator()
    const index2 = RandomIndexGenerator()

    if (index2 === index1) {
        const index2 = RandomIndexGenerator()
    }

    const index3 = RandomIndexGenerator()
    if (index3 === index2 || index3 === index1) {
        const index3 = RandomIndexGenerator()
    }
    
    const index4 = RandomIndexGenerator()
    if (index4 === index3 || index4 === index2 || index4 === index1) {
        const index4 = RandomIndexGenerator()
    }


    return (
        <>
            {bookList.length > 0 ? (
                <div className="book-big w-[1241px] mx-auto mt-28 ">
                    <div className='grid grid-rows-2 gap-y-[96px] '>
                        <div className='grid grid-cols-2'>
                            {/* ===== ATAS KIRI ===== */}
                            <div className="grid grid-cols-2">
                                <div className="big-img">
                                    <img className="w-[277px] h-[346px] rounded-lg" src={bookList[index1]['image_url']} />
                                </div>
                                <div className="big-book-info max-w-[270px]">
                                    <p className="w-[270px] text-black text-2xl font-semibold font-['Poppins'] mb-2 ">
                                        <TextTruncate
                                            line={2}
                                            element="span"
                                            truncateText="…"
                                            text={bookList[index1]['title']}
                                        />
                                    </p>
                                    <p className=" mb-2 text-black text-xl font-normal font-['Poppins']">by {bookList[index1]['author']['name']}</p>
                                    <div className="flex flex-row items-center gap-x-2 mb-2 ">
                                        <div className="w-[41px] h-[41px] bg-amber-400 rounded-full text-center align-middle relative ">
                                            <p className="absolute top-2 left-4" >{Math.round(bookList[index1]['rating'])}</p>
                                        </div>
                                        <div>
                                            <Rating value={bookList[index1]['rating']} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 text-base font-normal font-['Poppins']">
                                            <TextTruncate
                                                line={4}
                                                element="span"
                                                truncateText="…"
                                                text={bookList[index1]['synopsis']}
                                            />
                                        </p>
                                    </div>
                                    <div className="max-w-[270px] align-bottom mt-[26px] flex items-stretch flex-col item ">
                                        <button className=" rounded-lg align-bottom max-w-full border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500 ">Read Book</button>
                                    </div>
                                </div>
                            </div>
                            {/* ===== ATAS KANAN ======= */}
                            <div className="grid grid-cols-2">
                                <div className="big-img">
                                    <img className="w-[277px] h-[346px] rounded-lg" src={bookList[index2]['image_url']} />
                                </div>
                                <div className="big-book-info max-w-[270px]">
                                    <p className="w-[270px] text-black text-2xl font-semibold font-['Poppins'] mb-2 ">
                                        <TextTruncate
                                            line={2}
                                            element="span"
                                            truncateText="…"
                                            text={bookList[index2]['title']}
                                        />
                                    </p>
                                    <p className=" mb-2 text-black text-xl font-normal font-['Poppins']">by {bookList[index2]['author']['name']}</p>
                                    <div className="flex flex-row items-center gap-x-2 mb-2 ">
                                        <div className="w-[41px] h-[41px] bg-amber-400 rounded-full text-center align-middle relative ">
                                            <p className="absolute top-2 left-4" >{Math.round(bookList[index2]['rating'])}</p>
                                        </div>
                                        <div>
                                            <Rating value={bookList[index2]['rating']} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 text-base font-normal font-['Poppins']">
                                            <TextTruncate
                                                line={4}
                                                element="span"
                                                truncateText="…"
                                                text={bookList[index2]['synopsis']}
                                            />
                                        </p>
                                    </div>
                                    <div className="max-w-[270px] align-bottom mt-[26px] flex items-stretch flex-col item ">
                                        <button className=" rounded-lg align-bottom max-w-full border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500 ">Read Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2'>
                            {/* ===== BAWAH KIRI ===== */}
                            <div className="grid grid-cols-2">
                                <div className="big-img">
                                    <img className="w-[277px] h-[346px] rounded-lg" src={bookList[index3]['image_url']} />
                                </div>
                                <div className="big-book-info max-w-[270px]">
                                    <p className="w-[270px] text-black text-2xl font-semibold font-['Poppins'] mb-2 ">
                                        <TextTruncate
                                            line={2}
                                            element="span"
                                            truncateText="…"
                                            text={bookList[index3]['title']}
                                        />
                                    </p>
                                    <p className=" mb-2 text-black text-xl font-normal font-['Poppins']">by {bookList[index3]['author']['name']}</p>
                                    <div className="flex flex-row items-center gap-x-2 mb-2 ">
                                        <div className="w-[41px] h-[41px] bg-amber-400 rounded-full text-center align-middle relative ">
                                            <p className="absolute top-2 left-4" >{Math.round(bookList[index3]['rating'])}</p>
                                        </div>
                                        <div>
                                            <Rating value={bookList[index3]['rating']} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 text-base font-normal font-['Poppins']">
                                            <TextTruncate
                                                line={4}
                                                element="span"
                                                truncateText="…"
                                                text={bookList[index3]['synopsis']}
                                            />
                                        </p>
                                    </div>
                                    <div className="max-w-[270px] align-bottom mt-[26px] flex items-stretch flex-col item ">
                                        <button className=" rounded-lg align-bottom max-w-full border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500 ">Read Book</button>
                                    </div>
                                </div>
                            </div>
                            {/* ===== BAWAH KANAN ===== */}
                            <div className="grid grid-cols-2">
                                <div className="big-img">
                                    <img className="w-[277px] h-[346px] rounded-lg" src={bookList[index4]['image_url']} />
                                </div>
                                <div className="big-book-info max-w-[270px]">
                                    <p className="w-[270px] text-black text-2xl font-semibold font-['Poppins'] mb-2 ">
                                        <TextTruncate
                                            line={2}
                                            element="span"
                                            truncateText="…"
                                            text={bookList[index4]['title']}
                                        />
                                    </p>
                                    <p className=" mb-2 text-black text-xl font-normal font-['Poppins']">by {bookList[index4]['author']['name']}</p>
                                    <div className="flex flex-row items-center gap-x-2 mb-2 ">
                                        <div className="w-[41px] h-[41px] bg-amber-400 rounded-full text-center align-middle relative ">
                                            <p className="absolute top-2 left-4" >{Math.round(bookList[index4]['rating'])}</p>
                                        </div>
                                        <div>
                                            <Rating value={bookList[index4]['rating']} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-stone-900 text-base font-normal font-['Poppins']">
                                            <TextTruncate
                                                line={4}
                                                element="span"
                                                truncateText="…"
                                                text={bookList[index4]['synopsis']}
                                            />
                                        </p>
                                    </div>
                                    <div className="max-w-[270px] align-bottom mt-[26px] flex items-stretch flex-col item ">
                                        <button className=" rounded-lg align-bottom max-w-full border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500 ">Read Book</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            ) : (
                <Loading />
            )}
        </>
    )
}

export default BookBig