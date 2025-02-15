import { Button } from "../../../template";

const UxSection1 = () => {
  return (
    <div className="lg:w-1/2 lg:min-h-[100vh] border-1 border-primary font-poppins ">
      <section className="UxUi w-full h-[80vh]  lg:py-[10vw] lg:pl-[5vw] ">
        <div className=" w-[20vw]">
          <h3 className="text-secondary border-2 border-black w-fit rounded-[7px] px-1 py-1 font-bold">
            UX
          </h3>
          <div className="w-full flex justify-between items-center lg:my-10 ">
            <h1 className="inline-block font-medium text-[1.1vw] ">
              UX - & UI design
            </h1>
            <img
              src="/Slicing/header/arrow-4.png"
              alt=""
              className="inline-block "
            />
          </div>
          <h1 className="font-medium text-[1.33vw]">
            Boost Your Brand with Smart <br />
            UX/UI Strategies
          </h1>
          <p className="lg:mt-10 text-[#797979] text-[1.05rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            accusantium.
          </p>
        </div>
      </section>
      <div className="w-[70%] h-[1.2px] bg-primary ml-[5vw]"></div>
      <section className="marketing font-poppins lg:p-[5vw]">
        <div className=" w-[22.5vw] ">
          <img src="/Slicing/header/marketing.png" alt="" />
          <div className="flex items-center justify-between lg:my-[3vw] ">
            <h1 className="lg:text-[1.3vw] font-medium">Marketing</h1>
            <img src="/Slicing/header/arrow-4.png" alt="" />
          </div>
          <h1 className="font-semibold text-[1.50vw]">
            Boost Your Brand with Proven <br />
            Marketing Strategis
          </h1>
          <p className="lg:my-[3vw] text-[#797979]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            possimus sunt? Quo!
          </p>
        </div>
        <Button
          name="View More Services"
          style="w-full py-6 bg-black text-white"
        />
      </section>
    </div>
  );
};

export default UxSection1;
