// import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Request from './Request'
import './App.css'
import Header from './components/Header';
// import Header2 from './Header2';
import Hero from './components/Hero';
import BookBig from './components/BookBig';
import BookSmall from './components/BookSmall';
import Footer from './components/Footer';

function App() {
  // const [topPick, setTopPick] = useState([])

  // const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books/"
  // useEffect(() => {
  //   const fetchTopPick = async () => {
  //     const response = await fetch(ENDPOINT);
  //     const responseJson = await response.json();
  //     const booksList = responseJson['data']
  //     const isTopPick = booksList.filter(book => book.is_top_pick === true);
  //     setTopPick(isTopPick);

  //   };
  //   fetchTopPick();
  // }, []);

  // console.log(topPick);
  return (
    <>
  <Header />
  {/* <div className='mt-20 mb-20'></div>
  <Header2 /> */}
  

  <Hero />
  <BookBig />
  <BookSmall />
  <Footer />
      {/* <div className='p-20 w-0.7 hidden'>
        {topPick.map(book => (
          <div key={book['id']} className='mb-10 w-2/3'>
            <h2>{book['title']}</h2>
            <p>{book['synopsis']}</p>
            <p>rating {book['rating']}</p>
          </div>
        ))}        
      </div> */}
    </>
  );
}

export default App
