const PortfolioSection1 = () => {
  return (
    <div className="w-full  px-[5vw] pt-[5vw] flex flex-row lg:flex-col items-center justify-between bg-[red] ">
      <section className="w-full ">
        <h4 className="flex items-center">
          Our Portfolio{" "}
          <span className="inline-block w-[1.5rem] h-[1.2px] bg-black ml-2"></span>{" "}
        </h4>
        <h1 className="text-3xl lg:text-[5vw] leading-0 mt-5 lg:mt-[4vw] lg:mb-[1vw] ">
          Our Work
        </h1>
        <div className="w-full flex items-center justify-between pr-[5vw] ">
          <h1 className="text-3xl lg:text-[5vw] font-medium lg:font-bold ">Speaks for Itself</h1>
          <h4>
            Vom ersten Beratungsgesprach bis zur finalen <br /> Auslieferung und
            daruber hinaus sind wir hier, <br />
            um Sie zu unterstutzen,
          </h4>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection1;
