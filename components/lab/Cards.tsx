'use client'
import { useEffect, useState } from 'react'
import NYC from '../../public/nyc.png'
import BRIDGE from '../../public/goldenbridge.png'
import { HeartIcon, TagIcon, PlaneIcon } from 'lucide-react'
import { animate, press } from 'motion/react'


export default function Cards() {
    const [liked, SetLiked] = useState(false)
    const [heartColor, setHeartColor] = useState(["text-neutral-100", ""])

    const [liked2, SetLiked2] = useState(false)
    const [heartColor2, setHeartColor2] = useState(["text-red-500", ""])
    useEffect(() => {

        if (liked) {
            setHeartColor(["text-rose-100", "#ffffff70"])
        } else {
            setHeartColor(["text-neutral-100", "none"])
        }
    }, [liked])

    useEffect(() => {

        if (liked2) {
            setHeartColor2(["text-red-500", "red"])
        } else {
            setHeartColor2(["text-red-500", "none"])
        }
    }, [liked2])

    const handleLike = () => {
        liked ? SetLiked(false) : SetLiked(true)
    }

    const handleLike2 = () => {
        liked2 ? SetLiked2(false) : SetLiked2(true)
    }

    press(".heart", (element) => {
        animate(element, { scale: 0.3 }, { type: "spring", stiffness: 1000 })

        return () =>
            animate(element, { scale: 1 }, { type: "spring", stiffness: 500 })
    })

    return (
        <div>
            <div className="flex flex-row gap-8 " >
                <div className="w-[22vw] h-[60vh] rounded-4xl p-2    border-1 border-neutral-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  " >
                    <div style={{
                        backgroundImage: `url(${NYC.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className="rounded-3xl size-full p-4 relative overflow-hidden " >

                        <div className='flex flex-col h-full relative z-[999]'>
                            <div className='flex flex-1 justify-end ' >

                                <span className='border-1 border-neutral-100/30 size-12 rounded-full backdrop-blur-md flex justify-center items-center  font-light'  >
                                    <button onClick={handleLike} className={`cursor-pointer ${heartColor[0]}  `} >
                                        <HeartIcon fill={`${heartColor[1]}`} size={18} className='hover:scale-95 heart' />
                                    </button>
                                </span>
                            </div>
                            <div className='' >
                                <div className='text-white text-left  ' >
                                    <div className='text-4xl ' >
                                        New York
                                    </div>
                                    <div className='text-sm text-neutral-100/80' >
                                        Economy
                                    </div>

                                    <span className='flex gap-4 my-6 ' >
                                        <span className='flex gap-1 items-center justify-center  ' >
                                            <TagIcon size={14} />
                                            <div>from $120</div>
                                        </span>
                                        <span className='flex gap-1 items-center justify-center'  >
                                            <PlaneIcon size={16} />
                                            <p>JFK</p>
                                        </span>
                                    </span>
                                </div>
                                <button className='px-4 py-3 hover:bg-neutral-100 hover:scale-[1.005] font-semibold text-sm cursor-pointer rounded-full bg-white w-full ' >
                                    Search Flight
                                </button>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-52 pointer-events-none">
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/70 to-transparent" />
                        </div>
                    </div>
                </div>
                <div className="w-[22vw] h-[60vh] rounded-4xl p-2  border-1 border-neutral-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                    <div style={{
                        backgroundImage: `url(${BRIDGE.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className="rounded-3xl h-[60%] p-4 relative overflow-hidden " >
                    </div>
                    <div className='flex flex-col items-start p-3' >
                        <p className='text-4xl font-semibold' >San Francisco</p>
                        <p className='font-light text-neutral-600 text-xl ' >Premium economy</p>
                        <span className='flex gap-4 my-8 ' >
                            <span className='flex gap-1 items-center justify-center  ' >
                                <TagIcon className='text-neutral-600/60' size={14} />
                                <div>from <b className='text-neutral-800/90' >$230</b></div>
                            </span>
                            <span className='flex gap-1 items-center justify-center'  >
                                <PlaneIcon className='text-neutral-600/60' size={16} />
                                <p className='font-semibold'>SFO</p>
                            </span>
                        </span>
                        <div className='flex gap-2  items-center ' >
                            <button className='bg-neutral-900 text-white shadow-sm shadow-neutral-900 text-lg h-14 cursor-pointer hover:scale-[1.005] hover:text-[18.1px] rounded-full w-[16vw]  px-8 py-2 ' >
                                Search Flight
                            </button>
                            <button onClick={handleLike2} className={` ${heartColor2[0]} cursor-pointer border-[1.5px] p-3 rounded-full  border-neutral-400/50`} >
                                <HeartIcon fill={`${heartColor2[1]}`} size={20} className='heart' />
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}


{/* <button onClick={handleLike} className={`cursor-pointer ${heartColor[0]}  `} >
    <HeartIcon fill={`${heartColor[1]}`} size={18} className='hover:scale-95 heart' />
</button> */}
