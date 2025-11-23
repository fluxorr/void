import Cards from "@/components/lab/Cards";
import TextOverlay from "@/components/lab/TextOverlay";

const components = {
  c1: <Cards key="c1" />,
  c2: <TextOverlay key="t1" />,
};

export default function page() {
  return (
    <div className="flex flex-col items-center mx-auto justify-center mb-12">
      <div className="text-mehndi">HEY </div>
      <span className="my-8 text-zinc-900  text-lg">Completed Stuff Here</span>

      <div className="flex flex-col gap-4  ">
        {Object.values(components).map((component, index) => (
          <div className="border border-dashed border-zinc-300 p-4" key={index}>
            {component}
          </div>
        ))}
      </div>
    </div>
  );
}
