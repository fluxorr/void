import BlockImage from "./assets/candle-blocks.png"
import Image from "next/image"
import { DiscoverButton } from "./ui/discover-button"

const benefits = () => {
    return (
        <div className="flex flex-row justify-between mx-32 mb-24 border-b-1 border-neutral-500/80  pb-24" >
            <div className="border-t-1 pt-12 border-dashed border-neutral-500/30" >
                <div className="font-crimson-text text-5xl tracking-tighter"  >
                    See the Big Picture
                </div>
                <div className="font-dm-sans text-neutral-500  max-w-[70%] my-12" >
                    Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
                </div>
                <div className="mt-12 flex gap-6 border-t-1 border-dashed border-neutral-500/30 max-w-[85%] pt-6">
                    <span className="font-bold font-dm-sans text-neutral-500 ">01</span>
                    <span>Spot Trends in Seconds: No more digging through numbers. </span>
                </div>
                <div className="mt-6 flex gap-6 border-t-1 border-dashed border-neutral-500/30 max-w-[85%] pt-6">
                    <span className="font-bold font-dm-sans text-neutral-500 ">02</span>
                    <span>Get Everyone on the Same Page: Share easy-to-understand reports with your team.  </span>
                </div>
                <div className="mt-6 flex gap-6 border-t-1 border-dashed border-neutral-500/30 max-w-[85%] pt-6">
                    <span className="font-bold font-dm-sans text-neutral-500 ">03</span>
                    <span>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged. </span>
                </div>
                <div className="mt-6 mb-16 flex gap-6 border-t-1 border-dashed border-neutral-500/30 max-w-[85%] pt-6">
                    <span className="font-bold font-dm-sans text-neutral-500 ">04</span>
                    <span>Your Global Snapshot: Get a quick, clear overview of your entire operation. </span>
                </div>

                <DiscoverButton />

            </div>
            <Image src={BlockImage.src} alt="block illustration" height={710} width={590} ></Image>
        </div>
    )
}

export default benefits

