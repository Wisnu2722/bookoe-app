import TopPicks from "../components/TopPicks"
const TopPicksPage = () => {

  return (
    <>
      <div className="w-[1241px] mx-auto  bg-indigo-50 rounded-[15px] py-10 pl-12 " >
        <div>
          <span className="text-violet-500 text-[42px] font-semibold font-['Poppins']">Top </span>
          <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']">Picks </span>
          <span className="text-stone-900 text-[42px] font-semibold font-['Poppins']"> Collection</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1241px] mt-[113px]">
        <TopPicks />
      </div>
    </>
  )
}

export default TopPicksPage