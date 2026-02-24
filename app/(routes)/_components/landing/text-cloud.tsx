import CustomIcon from "@/components/shared/custom-icon";

const text = [
  {
    name: "Sustainability Matters",
  },
  {
    name: "Go Green",
  },
  {
    name: "Planet First",
  },
  {
    name: "Eco Impact",
  },
  {
    name: "Think Forward",
  },
  {
    name: "Eco Friendly",
  },
  {
    name: "Green Goals",
  },
  {
    name: "Future Ready",
  },
];

const TextCloud = () => {
  return (
    <div className="w-full max-w-screen-2xl relative mx-auto">
      <div className="mx-auto w-full">
        {/* Left smoke effect */}
        <div className="absolute left-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-r from-white via-light-green/80 to-transparent z-10" />

        {/* Right smoke effect */}
        <div className="absolute right-0 top-0 bottom-0 md:w-12 w-6 bg-gradient-to-l from-white via-light-green/80 to-transparent z-10" />

        <div className="group overflow-hidden py-2 md:py-4 bg-light-green">
          <div className="flex animate-logo-cloud gap-6">
            {text.map((item) => (
              <div
                key={item.name}
                className="flex shrink-0 items-center gap-6 select-none pointer-events-none text-deepest-green whitespace-nowrap"
              >
                <CustomIcon src="/icons/star.svg" size={10} />
                <span className="text-lg font-medium">{item.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {text.map((item) => (
              <div
                key={`dup-${item.name}`}
                className="flex shrink-0 items-center gap-6 select-none pointer-events-none text-deepest-green whitespace-nowrap"
              >
                <CustomIcon src="/icons/star.svg" size={10} />
                <span className="text-lg font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCloud;
