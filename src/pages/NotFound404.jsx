import Header from "../components/Header"
import Footer from "../components/Footer"
import Logo404 from "../components/Logo404"

const NotFound404 = () => {
  return (
    <>
    <Header />
    <Logo404 />
    <p className="text-violet-500 text-[147.18px] font-medium font-['Poppins']">404</p>
    <Footer />
    </>
  )
}

export default NotFound404