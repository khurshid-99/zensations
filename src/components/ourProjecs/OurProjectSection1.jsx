const OurProjectSection1 = () => {
  return (
    <div className="w-full h-[25vw] lg:px-[10vw] lg:flex justify-between lg:pt-[5vw]  relative ">
      <div className="part-1 w-1/2 h-[20vw] relative ">
        <h4 className="flex items-center">
          unsere Leistungen
          <span className="w-[1.5rem] h-[1.5px] bg-black inline-block lg:mr-7"></span>
        </h4>
        <h1 className="lg:text-[5vw] lg:mt-5 ">Wir kreieren</h1>
        <h1 className="lg:text-[5vw] font-bold -mt-[2vw]">Marken</h1>
      </div>
      <div className="part-2 relative h-[18vw] lg:flex lg:flex-col lg:justify-between">
        <p className="lg:font-medium lg:mt-[5vw] ">
          Unser Anspruch ist es, Unternehmen durch erstklassiges <br />
          UX-Design, srtategisches Markenmanagement & gezielte <br />
          Triningsprogramme zum Erfolg zu fuhren.
        </p>
        <h2 className=" text-[1.5vw] font-bold ml-[15vw]">
          <span className="inline-block text-[#3b59ff]">our</span>project
        </h2>
      </div>
    </div>
  );
};

export default OurProjectSection1;
