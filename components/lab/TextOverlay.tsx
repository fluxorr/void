


const TextOverlay = () => {
    return (

        <div className="flex flex-col items-center gap-12 m-4 dark:bg-neutral-950  bg-neutral-50 h-full p-4   " >
            <div className="text-4xl dark:selection:bg-white dark:selection:text-neutral-950 selection:bg-black selection:text-white dark:text-neutral-300 text-neutral-700 font-semibold tracking-tighter">
                This is some <span className="after:content-[''] relative after:absolute after:bg-red-500 after:w-full after:h-full after:inset-0 z-10 text-neutral-50 after:-z-20 after:-skew-4 p-1 " >Crazy</span> stuff.
            </div>


            <div className="text-4xl dark:selection:bg-white dark:selection:text-neutral-950 selection:bg-black dark:text-neutral-300 selection:text-white font-semibold tracking-tighter text-neutral-700" >
                This is some <span>Crazy</span> stuff.
            </div>

        </div >




    )
}

export default TextOverlay











