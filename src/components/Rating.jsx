
const Rating = (prop) => {

    const rate = Math.round(prop.value);

    return (
        <>
            {rate == 1 ?
                <div>
                    <span className="font-['Poppins']" >⭐</span>
                </div>
                : rate == 2 ?
                    <div>
                        <span className="font-['Poppins']" >⭐</span>
                        <span className="font-['Poppins']" >⭐</span>
                    </div>

                    : rate == 3 ?
                        <div className="">
                            <span className="font-['Poppins']" >⭐</span>
                            <span className="font-['Poppins']" >⭐</span>
                            <span className="font-['Poppins']" >⭐</span>
                        </div>

                        : rate == 4 ?
                            <div>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                            </div>

                            :
                            <div>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                                <span className="font-['Poppins']" >⭐</span>
                            </div>
            }

        </>
    );
}

export default Rating;
