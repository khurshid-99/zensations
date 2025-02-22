import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ElementRight = () => {
  useGSAP(() => {
    gsap.from(".img-2", {
      y: "100vh",
      opacity: 0,
      scrollTrigger: {
        trigger: ".leftElement",
        scrub: true,
        start: "top top",
        end: "top -70%",
        // markers: true,
      },
    });
  });

  return (
    <div className="relative lg:h-[85vh] lg:w-[45vw] mb-[2rem] ml-[38vw] z-20  ">
      <div className="w-full h-[74vh] overflow-hidden relative">
        <img
          src="Slicing/header/ux-design-image.png"
          alt=""
          className="img-1 w-full h-full object-cover object-center  z-20 "
        />
        <img
          src="Slicing/header/about-image.jpg"
          alt=""
          className="img-2 w-full h-full object-cover object-center absolute top-0 left-0  z-20 "
        />
      </div>
    </div>
  );
};

export default ElementRight;
