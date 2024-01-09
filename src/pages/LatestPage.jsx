import Latest from "../components/Latest"

const LatestPage = () => {
    return (
        <>
            <div className="w-[1241px] mx-auto  bg-indigo-50 rounded-[15px] py-10 pl-12 " >
                <div>
                    <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']">Our </span>
                    <span className="text-violet-500 text-[42px] font-semibold font-['Poppins']">Latest</span>
                    <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']"> Collection</span>
                </div>
            </div>

            <div className="max-w-[1241px] min-h-80 mx-auto">
                <Latest />
            </div>
        </>
    )
}

export default LatestPage