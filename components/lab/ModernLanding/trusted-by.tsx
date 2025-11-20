import logo1 from "./assets/logo1.png"
import logo2 from "./assets/logo2.png"
import logo3 from "./assets/logo3.png"
import logo4 from "./assets/logo4.png"
import logo5 from "./assets/logo5.png"
import logo6 from "./assets/logo6.png"

const logos = [logo1, logo2, logo3, logo4, logo5, logo6]

const TrustedBy = () => {
    return (
        <div >
            <div className="text-neutral-500 font-dm-sans tracking-tight mx-32 mt-12 text-lg" >Trusted by:</div>
            <div className="grid grid-rows-1 grid-cols-6 mx-36 my-8  " >
                {logos.map((logo, index) => (
                    <div key={index}><img src={logo.src} className="h-12 w-30 " alt={`Trusted by logo ${index + 1}`} /></div>
                ))}
            </div>
            <div className="w-[calc(100%-65px)] h-[1.5]  mx-8 border-t-1 border-dashed border-neutral-500/30 " ></div>




        </div>
    )
}

export default TrustedBy