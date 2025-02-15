const StayContact = () => {
  return (
    <div className="w-full h-[50vh] flex font-poppins ">
      <section className="w-1/2 h-full pl-[10vw] pt-[5vw] ">
        <h4 className="tracking-[2px] text-[1.1rem] uppercase flex items-center ">
          Stay Connected{" "}
          <span className="inline-block w-[1.5rem] h-[1px] bg-black ml-5 "></span>
        </h4>
        <h1 className="text-[2.5vw] font-light mt-3 ">Sign up to</h1>
        <h1 className="text-[2.5vw] font-medium -mt-2 ">Our Newsletter</h1>
        <p className="mt-5 text-[1.2rem] ">
          We're a national and international moving company <br />
          located in the US.. Our target audience are people <br />
          moving state to state and overseas.
        </p>
      </section>
      <section className="w-1/2 h-full relative pt-[8vw] pl-[8vw] overflow-hidden">
        <div
          className="w-[30rem] h-[30rem] bg-[#F0F0F0] absolute rounded-full -bottom-40 right-50 z-49 
      "
        ></div>
        <div className="z-50 w-full relative">
          <h2 className="text-[2vw] ">Enter Your </h2>
          <h2 className="text-[2vw] -mt-3 ">email-address</h2>
          <h6 className="my-8 tracking-[2px] uppercase text-[15px] ">
            stay in toch
          </h6>
          <div className="w-full flex items-center ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b-2 w-[20vw] py-2 outline-none "
            />
            <img
              src="Slicing/contact us/arrow .png"
              alt=""
              className="w-[4rem] h-[4rem] bg-secondary rounded-full py-5 px-5 ml-2 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StayContact;
