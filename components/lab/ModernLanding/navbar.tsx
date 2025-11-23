import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="font-dm-sans flex justify-between mx-auto items-center w-full pt-6 flex-nowrap">
      <span
        className="tracking-tighter text-[30px] leading-5 pl-8   "
        style={{
          fontWeight: 500,
        }}
      >
        Area
      </span>

      <div className="flex gap-[27px] font-semibold  ">
        <span className="cursor-pointer hover:text-neutral-500 transition-colors duration-300 ">
          Benefits
        </span>
        <span className="cursor-pointer hover:text-neutral-500 transition-colors duration-300">
          Specifications
        </span>
        <span className="cursor-pointer hover:text-neutral-500 transition-colors duration-300 ">
          How-to
        </span>
        <span className="cursor-pointer hover:text-neutral-500 transition-colors duration-300 ">
          Contact us
        </span>
      </div>

      <button
        className={cn(
          "hover:bg-cta/60 transition-all duration-300 cursor-pointer bg-cta px-4 py-3 mr-8 text-sm rounded-full text-white  font-semibold",
          "group",
          "flex justify-center items-center gap-1",
        )}
      >
        Learn More{" "}
        <span className="text-xs font-bold group-hover:-translate-y-1 transition-all duration-400 ">
          <Arrow />
        </span>
      </button>
    </div>
  );
};

export default Navbar;

const Arrow = () => {
  return (
    <svg
      width="6"
      height="7"
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.01037 4.9934V1.05184L5.64939 1.09142L0.735155 6.01131L0 5.27615L4.91423 0.361923L4.96513 1.00094H1.0066V0L6 0.0113101V4.9934H5.01037Z"
        fill="white"
      />
    </svg>
  );
};
