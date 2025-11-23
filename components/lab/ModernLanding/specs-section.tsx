import { DiscoverButton } from "./ui/discover-button";

const SpecsSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="font-dm-sans text-sm text-neutral-500 ">Specs</div>
        <div className="font-crimson-text text-5xl my-6">Why Choose Area?</div>
        <div className="font-dm-sans text-sm text-neutral-500 max-w-2xl text-center mb-6">
          You need a solution that keeps up. That's why we developed Area. A
          developer-friendly approach to streamline your business.{" "}
        </div>
        <DiscoverButton />
      </div>
      {/* <Table /> */}
    </div>
  );
};

export default SpecsSection;

// const Table = () => {
//     return (
//         <div className="flex justify-center items-center" >
//             <div className=" flex justify-between w-300   mt-24" >
//                 <div>
//                     <div className="font-rethink-sans  text-center text-xl font-[500] border-1 border-black  tracking-tighter text-neutral-500   ">Area</div>
//                     <section className="flex flex-col gap-4  font-roboto-mono text-neutral-500 " >
//                         <div className="mb-4 mt-16 "   >✓ Ultra-fast browsing</div>
//                         <div className="my-4 " >✓ Ultra-fast browsing</div>
//                         <div className="my-4 " >✓ Ultra-fast browsing</div>
//                         <div className="my-4 " >✓ Ultra-fast browsing</div>
//                         <div className="my-4 " >✓ Ultra-fast browsing</div>
//                         <div className="my-4 " >✓ Ultra-fast browsing</div>
//                     </section>
//                 </div>
//                 <div>
//                     <div className="font-rethink-sans text-center  text-xl font-[500] border-1 border-black tracking-tighter text-neutral-500  ">WebSurge</div>
//                 </div>
//                 <div>
//                     <div className="font-rethink-sans text-center  text-xl font-[500] border-1 border-black tracking-tighter text-neutral-500  ">HyperView</div>
//                 </div>
//             </div>
//         </div>

//     )
// }
