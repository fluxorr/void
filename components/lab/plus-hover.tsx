import React from 'react'

const PlusHover = () => {
    return (
        <div className='h-screen w-screen bg-white flex mt-15 justify-center'>
            <div className='w-115 h-110  p-5'>



                <div className='w-full h-50 mt-3 rounded-md grid grid-cols-25 grid-rows-10'>
                    {Array.from({ length: 250 }).map((_, index) => (
                        <div key={index}
                            className='flex justify-center items-center'>

                            <p className='text-2xl font-bold text-neutral-400 transition-all duration-0 hover:text-black cursor-default hover:delay-0 [transition-delay:0.5s] ease-in-out hover:scale-120 '>+</p>
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default PlusHover
