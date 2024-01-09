import Logo from "./Logo"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header className="mt-3 flex justify-between">
                <Link to={""}>
                    <div className="logo left flex items-end flex-row ">
                        <Logo />
                        <div className="flex flex-col align-bottom ml-2 relative">
                            <p className=" absolute bottom-2 text-stone-900 text-[41px] font-medium font-['Poppins']">Bookoe</p>
                            <p className="text-stone-900 text-sm font-light font-['Poppins']">Rekomendasi Bukumu</p>
                        </div>
                    </div>
                </Link>
                <div className="right">
                    <nav>
                        <ul className="menu">
                            <li>
                                <Link to={"/"}>
                                    <span className="text-stone-900 text-xl font-semibold font-['Poppins']">All</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/latest'}>
                                    <span href="" className="text-neutral-500 text-xl font-normal font-['Poppins'] hover:text-violet-500">Latest</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/top-picks'}>
                                    <span className="text-neutral-500 text-xl font-normal font-['Poppins'] hover:text-violet-500">Top Picks</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="search-bar ml-9">
                        <form action="">

                            <input type="text" className="rounded-lg border border-violet-500 p-2 font-['Poppins'] " placeholder="Search..." />
                        </form>
                    </div>
                    <div className="login rounded-lg border border-violet-500 p-2 text-violet-500 text-xl font-medium font-['Poppins']" >
                        <button>Edit List</button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header