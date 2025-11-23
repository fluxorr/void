import { GlobeIcon, LineIcon, PersonIcon, WireIcon } from "./svgs";

const Features = () => {
  return (
    <div className="flex items-start flex-col mx-32 mt-32  ">
      <span className="font-roboto-mono text-cta/80   ">Benefits</span>
      <span className="font-crimson-text text-[60px] my-8 tracking-tighter ">
        We've cracked the code.
      </span>
      <span className="text-neutral-500 font-dm-sans text-lg mb-24">
        Area provides real insights, without the data overload.
      </span>
      <section className="flex gap-4">
        <Card
          iconName="wire"
          cardTitle="Amplify Insights"
          cardContent="Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth."
        />
        <Card
          iconName="globe"
          cardTitle="Control Your Global Presence"
          cardContent="Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."
        />
        <Card
          iconName="person"
          cardTitle="Remove Language Barriers"
          cardContent="Adapt to diverse markets with built-in localization for clear communication and enhanced user experience."
        />
        <Card
          iconName="line"
          cardTitle="Visualize Growth"
          cardContent="Generate precise, visually compelling reports that illustrate your growth trajectories across all regions."
        />
      </section>
    </div>
  );
};

export default Features;

const Card = ({
  iconName,
  cardTitle,
  cardContent,
}: {
  iconName: string;
  cardTitle: string;
  cardContent: string;
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wire":
        return <WireIcon />;
      case "globe":
        return <GlobeIcon />;
      case "person":
        return <PersonIcon />;
      case "line":
        return <LineIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col gap-2 max-w-[20vw] border-t border-dashed border-neutral-500/20">
      <span className="size-8 mt-6 mb-4">{getIcon(iconName)}</span>
      <span className="font-crimson-text text-xl">{cardTitle}</span>
      <span className="font-dm-sans text-neutral-500 text-lg text-balance">
        {cardContent}
      </span>
    </section>
  );
};
