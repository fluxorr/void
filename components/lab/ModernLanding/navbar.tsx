



const Navbar = () => {
    return (
        <div className="font-dm-sans flex justify-between mx-auto items-center w-full pt-6 flex-nowrap">
            <span className="tracking-tighter text-[30px] leading-5 pl-8   " style={{
                fontWeight: 500
            }}>Area</span>

            <div className="flex gap-[27px] font-semibold  ">
                <span>Benefits</span>
                <span>Specifications</span>
                <span>How-to</span>
                <span>Contact us</span>
            </div>

            <button className="bg-cta px-4 py-3 mr-6 text-sm rounded-full text-white  font-semibold " >Learn More <span className="text-xs font-bold " >↗</span> </button>
        </div >
    );
};


export default Navbar;