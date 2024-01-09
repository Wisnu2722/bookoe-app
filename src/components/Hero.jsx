import { useState, useEffect } from "react";
import TextTruncate from 'react-text-truncate';
import Rating from "./Rating";
import Loading from "./Loading";
import { Link } from "react-router-dom";

const Hero = () => {
    // var TextTruncate = require('react-text-truncate');
    const [bookList, setBookList] = useState([]);
    const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books/";

    const fetchBooks = async () => {
        try {
            const response = await fetch(ENDPOINT);
            const responseJson = await response.json();
            const databookList = responseJson.data;
            setBookList(databookList);
        } catch (error) {
            console.log('error fetching data from API')
                return <>
                    <div className="border-2 rounded-lg max-w-32 mx-auto p-3 text-red-600">error fetching data from API</div>
                </>
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    function randomIndex(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const heroIndex1 = randomIndex(1, 30)
    const heroIndex2 = randomIndex(1, 30)
    const heroIndex3 = randomIndex(1, 30)

    console.log(heroIndex3)
    console.log(bookList);

    return (
        <>
            {bookList.length > 0 ? (
                <div className='hero'>
                    <div className='hero-left' >
                        <p>MUST READ</p>
                        <p className=" text-stone-900 text-[62px] font-semibold font-['Poppins'] leading-[72px] ">
                            <TextTruncate
                                line={4}
                                element="span"
                                truncateText="…"
                                text={bookList[heroIndex3]['title']}
                            />
                        </p>
                        <div className="hero-rating  mt-4 ">
                            <div className="author">{bookList[heroIndex3]['author']['name']}</div>
                            <div className="star-rating ">
                                <Rating value={bookList[heroIndex3]['rating']} />
                            </div>
                        </div>
                        <div className="hero-synopsis">
                            <TextTruncate
                                line={2}
                                element="span"
                                truncateText="…"
                                text={bookList[heroIndex3]['synopsis']}
                            />
                        </div>
                        <div>
                            <Link
                                to={`/book/${bookList[heroIndex3]['id']}`}
                                key={bookList[heroIndex3]['id']}
                            >
                                <button className="rounded-lg  border border-violet-500 p-3 text-violet-500 text-xl font-medium font-['Poppins'] hover:text-white hover:bg-violet-500">Read Book</button>
                            </Link>
                            <button>See All Recomendation</button>
                        </div>
                    </div>
                    <div className="hero-right bg-fuchsia-200 relative w-[408.45px]">
                        <h2 className="hidden">-</h2>
                        <img className="w-[196.06px] h-[272.30px] left-[212.39px] top-[58.59px] absolute rounded-[10px]" src={bookList[heroIndex1]['image_url']} />
                        <img className="w-[236.20px] h-[327.75px] left-[124.51px] top-[31.13px] absolute rounded-[10px]" src={bookList[heroIndex2]['image_url']} />
                        <img className="w-[280.14px] h-[390px] left-0 top-0 absolute rounded-[10px]" src={bookList[heroIndex3]['image_url']} />
                        <div className="">
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export default Hero;
