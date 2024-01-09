import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const BookDetail = () => {

    const { id } = useParams()

    const [bookDetail, setBookDetail] = useState([]);
    const ENDPOINT = `https://bookapi.cm.hmw.lol/`;

    async function bookApi() {
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
        bookApi();
    }, [id]);


    // console.log(id)
    console.log(bookDetail)

    return (
        <>
            <div>BookDetail</div>
            <div className='fle flex-row mx-auto max-w-[1241px]'>
                <div>
                    <img src={bookDetail['image_url']} alt="" />
                </div>
                <div>
                    <h1>{bookDetail['title']}</h1>
                </div>
            </div>
        </>
    )
}

export default BookDetail