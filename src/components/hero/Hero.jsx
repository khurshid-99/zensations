import { Button } from "../../template";
import Arrow from "../../../public/Slicing/header/arrow.png";
import Arrow2 from "../../../public/Slicing/header/arrowBlack.png";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const Hero = () => {
  const text1Ref = useRef(null);
  const textCover1Ref = useRef(null);
  const text2Ref = useRef(null);
  const textCover2Ref = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1 });

    tl.to(textCover1Ref.current, {
      x: 600,
      duration: 3,
      ease: "linear",
    }).to(text1Ref.current, {
      opacity: 0,
      display: "none",
      duration: 2,
      delay: 1,
    });
    tl.to(textCover2Ref.current, {
      x: 600,
      duration: 3,
      ease: "linear",
    }).to(text2Ref.current, {
      opacity: 0,
      display: "none",
      duration: 2,
      delay: 1,
    });
  });

  return (
    <div className="w-full bg-[#F4F4F4] lg:h-[90vh] lg:px-[5vw] relative ">
      <div className="absolute top-0 right-[5vw] "></div>
      <section className="section-1 w-full lg:h-1/2 font-poppins lg:px-[5vw] lg:pt-[2.05vw]  ">
        <h1 className="lg:text-[6vw] font-poppins lg:font-light relative z-9   ">
          We create
        </h1>

        <div className="w-full h-[9rem] flex items-center lg:text-[6vw] -mt-7 font-bold lg:leading-[9rem]">
          <div className=" w-[24.4rem] h-full overflow-hidden relative z-99 ">
            {/* ------ */}
            <div className="w-full h-full relative">
              <div
                ref={textCover1Ref}
                className="w-full h-full bg-[#F4F4F4] z-81 absolute top-0 left-0 "
              ></div>
              <h1
                ref={text1Ref}
                className="bg_text_animition z-80 top-0 left-0 absolute "
              >
                Digital
              </h1>
            </div>
            {/* ------- */}
            <div>
              <h1
                ref={text2Ref}
                className="bg_text_animition z-78 top-0 left-0 absolute  "
              >
                UX&UI
              </h1>
              <div
                ref={textCover2Ref}
                className="w-full h-full bg-[#F4F4F4] z-79 absolute top-0 left-0 "
              ></div>
            </div>
            {/* ------- */}
          </div>
          <div>
            <h1>Experiences</h1>
          </div>
        </div>

        <h1 className="lg:text-[5.7vw] lg:pl-[28.5vw] lg:font-bold ">
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
        <div className="lg:h-full lg:w-1/2 font-poppins lg:pl-[3.5vw]  ">
          <p
            className="lg:w-full lg:text-[1.3rem] lg:mt-[3vw]  
           "
          >
            Elevating communication, marketing, <br />
            <span className="font-semibold inline-block ">UX design</span> into
            powerful
            <span className="font-semibold inline-block ml-2 ">
              digital expriences
            </span>
            <br /> targeted campaigns,
            <span className="font-semibold inline-block ">
              brand identities
            </span>
            that <br />
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
