'use client'
import { useEffect, useState } from 'react'
import NYC from '../../public/nyc.png'
import { HeartIcon, TagIcon, PlaneIcon } from 'lucide-react'
import { animate, press } from 'motion/react'


export default function Cards() {
    const [liked, SetLiked] = useState(false)
    const [heartColor, setHeartColor] = useState(["text-neutral-100", ""])
    useEffect(() => {

        if (liked) {
            setHeartColor(["text-rose-100", "#ffffff70"])
        } else {
            setHeartColor(["text-neutral-100", "none"])
        }
    }, [liked])

    const handleLike = () => {
        liked ? SetLiked(false) : SetLiked(true)
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
                <div className="w-[25vw] h-[60vh] rounded-4xl p-2  border-1 border-neutral-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                    Card 2
                </div>
            </div >
        </div >
    )
}
