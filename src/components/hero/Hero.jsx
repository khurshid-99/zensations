import { Button } from "../../template";
import Arrow from "../../../public/Slicing/header/arrow.png";
import Arrow2 from "../../../public/Slicing/header/arrowBlack.png";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div className="w-full bg-[#f0f0f0] lg:h-[90vh] lg:px-[5vw] relative ">
      <div className="absolute top-0 right-[5vw] "></div>
      <section className="section-1 w-full lg:h-1/2 font-poppins lg:px-[5vw] lg:pt-[2.05vw]  ">
        <h1 className="lg:text-[6vw] font-poppins lg:font-light  ">
          We create
        </h1>
        <h1 className="lg:text-[6vw] font-bold lg:leading-[5rem]">
          <span className="text-[#3b59ff] ">Digital</span> Experiences
        </h1>
        <h1 className="lg:text-[5.7vw] lg:pl-[28.5vw] lg:font-bold lg:mt-4 ">
          That work
        </h1>
      </section>

      <section className="section-2 relative lg:flex lg:justify-between lg:items-center lg:h-1/2 ">
        <div className="lg:w-1/2 lg:h-full lg:flex lg:items-end lg:pl-[5vw]">
          <Button
            name="SEE OUR WORK"
            img={Arrow}
            imgS="ml-3"
            style="bg-black text-white py-5 px-[3.5rem]"
          />
        </div>
        <div className="lg:h-full lg:w-1/2 font-poppins lg:pl-[3.5vw] ">
          <p className="lg:w-1/2 lg:text-[1.3rem] lg:mt-[3vw] ">
            Elevating communication, marketing, <br />{" "}
            <span className="font-semibold ">UX design</span> into powerful{" "}
            <span className="font-semibold ">digital expriences</span> targeted
            campaigns,
            <span className="font-semibold ">brand identities</span> that <br />{" "}
            drive results and transfrom businesses
          </p>
          <Button
            name="case studies"
            imgS="ml-2"
            img={`${Arrow2}`}
            style="bg-[#fff] lg:px-[2rem] lg:py-3 lg:text-[.9rem] uppercase mt-[2.5rem] font-semibold"
          />
        </div>
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 5,
          }}
          src="Slicing/header/P4.png"
          alt=""
          className="absolute right-0 bottom-10 w-[6rem] "
        />
      </section>
    </div>
  );
};

export default Hero;
