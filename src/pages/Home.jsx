import BookBig from "../components/BookBig"
import BookSmall from "../components/BookSmall"
import Hero from "../components/Hero"


const Home = () => {
    return (
        <>
            <Hero />
            <BookBig />
            <BookSmall ENDPOINT="https://bookapi.cm.hmw.lol/api/books/" />
        </>
    )
}

export default Home