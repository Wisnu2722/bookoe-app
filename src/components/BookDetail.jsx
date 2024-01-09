import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import TextTruncate from 'react-text-truncate';
import Rating from './Rating';


// ... (your existing imports)

const BookDetail = () => {
    const { id } = useParams();
    const [bookDetail, setBookDetail] = useState([]);
    const ENDPOINT = `https://bookapi.cm.hmw.lol/`;

    async function fetchBook() {
        try {
            const url = `${ENDPOINT}api/books/${id}`;
            const response = await fetch(url);
            const data = await response.json();

            setBookDetail(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchBook();
    }, [id]);

    // console.log(bookDetail);

    function formatDate(inputDateString) {
        const inputDate = new Date(inputDateString);

        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = inputDate.toLocaleDateString('en-US', options);

        return formattedDate;
    }

    const inputString = bookDetail['created_at'];
    const formattedDate = formatDate(inputString);

    return (
        <>
            <div className='mx-auto max-w-[1241px mt-[80px]'>
                <div className='flex flex-row gap-x-12 '>
                    <div className="min-w-[260px] max-w-[340px] h-[340px] overflow-hidden">
                        <img className="rounded-lg w-full h-full object-cover" src={bookDetail['image_url']} alt="book cover image" />
                    </div>
                    <div className='mt-[10px]'>
                        <div className="title text-stone-900 text-[26px] font-semibold font-['Poppins']">
                            {bookDetail['title'] && (
                                <TextTruncate
                                    line={3}
                                    element="span"
                                    truncateText="…"
                                    text={bookDetail['title']}
                                />
                            )}
                        </div>
                        <div className="author mt-2 text-stone-900 text-[26px] font-semibold font-['Poppins']">
                            {bookDetail['author'] && (
                                <p>By {bookDetail['author']['name']}</p>
                            )}
                        </div>
                        <div className="flex flex-row items-center  mt-3 ">
                            <div className="w-[41px] h-[41px] bg-amber-400 rounded-full text-center align-middle relative ">
                                <p className="absolute top-2 left-4">{Math.round(bookDetail['rating'])}</p>
                            </div>
                            <div>
                                <Rating value={bookDetail['rating']} />
                            </div>
                        </div>
                        <div></div>

                        <div className="synopsis mt-10 text-stone-900 text-xl font-normal font-['Poppins']">
                            {bookDetail['synopsis'] && (
                                <TextTruncate
                                    line={5}
                                    element="span"
                                    truncateText="…"
                                    text={bookDetail['synopsis']}
                                />
                            )}
                        </div>

                        <p className="mt-8 text-neutral-500 text-xl font-light font-['Poppins']">
                            First published {formattedDate}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;
