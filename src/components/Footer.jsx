import Logo from "./Logo"

const Footer = () => {
    return (
        <footer className='mt-[107px]'>
            <div className="max-w-[1241px] pt-11 pb-16 mx-auto bg-violet-500 rounded-[15px]">
                <div className='max-w-[794px] flex flex-wrap text-center mx-auto'>

                    <p className='text-center text-white text-[42px] font-semibold font-[Poppins]'>Join our newsletter to get our latest recommendation!</p>
                </div>

                <div className='max-w-[452px] mt-6  text-center mx-auto'>

                    <form action="" className="flex gap-x-5">
                        <input className="rounded-lg p-3 w-[345px]  " placeholder="Enter Your Email" />
                        <button className="rounded-lg p-3 border bg-white border-violet-500 ">Submit</button>
                    </form>
                </div>
            </div>

            <div className="grid grid-cols-2 max-w-[1241px] mx-auto mt-[53px] mb-5 border-b-2 border-b-zinc-600 ">
                <div>
                    <div className="logo left flex items-end flex-row ">
                        <Logo />
                        <div className="flex flex-col align-bottom ml-2 relative">
                            <p className=" absolute bottom-2 text-stone-900 text-[41px] font-medium font-['Poppins']">Bookoe</p>
                            <p className="text-stone-900 text-sm font-light font-['Poppins']">Rekomendasi Bukumu</p>
                        </div>
                    </div>
                </div>
                <div className="justify-end">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates et ab doloribus. Eveniet ipsa, accusantium optio nihil facilis nam eos.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer