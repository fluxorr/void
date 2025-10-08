import NYC from '../../public/nyc.png'
import { HeartIcon, TagIcon, PlaneIcon } from 'lucide-react'

export default function Cards() {
    return (
        <div>
            <div className="flex flex-row gap-8 " >
                <div className="w-[22vw] h-[60vh] rounded-4xl p-2  border-1 border-neutral-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  " >
                    <div style={{
                        backgroundImage: `url(${NYC.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className="rounded-3xl size-full p-4 relative overflow-hidden " >

                        <div className='flex flex-col h-full relative z-[999]'>
                            <div className='flex flex-1 justify-end ' >

                                <div className='border-1 border-neutral-100/30 size-12 rounded-full backdrop-blur-md flex justify-center items-center text-neutral-100 font-light'  ><HeartIcon size={18} /> </div>
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
                                <button className='px-4 py-3 font-semibold text-sm cursor-pointer rounded-full bg-white w-full ' >
                                    Search Flight
                                </button>

                            </div>

                        </div>
                        <div
                            className="absolute bottom-0 left-0 w-full h-52 pointer-events-none bg-gradient-to-t from-black/40 to-transparent rounded-t-xl backdrop-brightness-90 "
                            style={{ WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}
                        />
                    </div>
                </div>
                <div className="w-[25vw] h-[60vh] rounded-4xl p-2  border-1 border-neutral-400 shadow-[0_3px_10px_rgb(0,0,0,0.2)] " >
                    Card 2
                </div>
            </div >
        </div >
    )
}
