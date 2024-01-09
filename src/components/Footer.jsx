
const Footer = () => {
    return (
        <footer className='mt-[107px]'>
            <div className="w-[1241px] pt-11 pb-16 mx-auto bg-violet-500 rounded-[15px]">
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
        </footer>
    )
}

export default Footer