const WorkflowSection3 = () => {
  return (
    <div className="w-full h-[45vh] px-[5vw] relative  overflow-hidden ">
      <div className="w-full h-full overflow-hidden rounded-4xl relative">
        <div className="w-[32vw] h-[32vw] rounded-full bg-radial from-[#1fada6b0] via-[#14464365]  to-[#000000] absolute -left-15 -bottom-50"></div>

        <div className="h-full w-full bg-zinc-800/20 rounded-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 lg:p-[5vw]  z-50 ">
          <div className="w-full  flex items-center justify-between lg:pr-[10vw] ">
            <section>
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5">Years of experience</h4>
              <h1 className="my-3 lg:text-[3.5vw] lg:font-bold">25+</h1>
            </section>
            <section>
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5">Happy Customers</h4>
              <h1 className="my-3 lg:text-[3.5vw] lg:font-bold">200+</h1>
            </section>
            <section>
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5">Campaigns</h4>
              <h1 className="my-3 lg:text-[3.5vw] lg:font-bold">150</h1>
            </section>
          </div>
          <div className="relative w-full flex items-center">
            <img src="Slicing/our workflow/text-dot copy.png" alt="" />
            <img src="Slicing/our workflow/pointer-3 .png" alt="" className="absolute" />
            <img src="Slicing/our workflow/pointer-3 .png" alt="" className="absolute left-[40%]" />
            <img src="Slicing/our workflow/pointer-3 .png" alt="" className="absolute left-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection3;
