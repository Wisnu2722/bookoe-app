import Logo from "./components/Logo"
import Magnifier from "./components/Magnifier"

const Header2 = () => {
    return (
        <>
            <div className="w-[1241px] h-[71.97px] relative">
                <div className="w-[225px] h-[71.97px] left-0 top-0 absolute">
                    <Logo />
                    <Magnifier/>
                    <div className="w-[156px] h-[71.77px] left-[69px] top-0 absolute">
                        <div className="left-0 top-0 absolute text-stone-900 text-[41px] font-medium font-['Poppins']">Bookoe</div>
                        <p className="motto">Rekomendasi Bukumu</p>
                    </div>
                </div>
                <form action="">
                    <input className="left-[744px] top-[31px] absolute text-neutral-400 text-xl font-light font-['Poppins']" placeholder="Search by title or authors..."  />
                    <div className="w-[135px] h-[50px] left-[1106px] top-[21px] absolute">
                        <div className="w-[135px] h-[50px] left-0 top-0 absolute rounded-lg border border-violet-500" />
                        <button onClick={() => alert('AHHHHH')} className="left-[29px] top-[10px] absolute text-violet-500 text-xl font-medium font-['Poppins']">Edit List</button>
                    </div>
                </form>
                <div className="w-[226px] h-[30px] left-[425px] top-[31px] absolute">
                    <div className="left-0 top-0 absolute text-stone-900 text-xl font-semibold font-['Poppins'] underline">All</div>
                    <div className="left-[50px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">Latest</div>
                    <div className="left-[134px] top-0 absolute text-neutral-500 text-xl font-normal font-['Poppins']">Top Picks</div>
                </div>
            </div>
        </>
    )
}

export default Header2