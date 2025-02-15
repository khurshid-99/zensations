import gsap from "gsap";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import GSDevTools from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, GSDevTools);

const WorkflowSection2 = () => {


  
  useEffect(() => {
    gsap.defaults({ ease: "none" });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#svg",
          scrub: 1,
          start: "top 50%",
          end: "top -50%",
          markers: true,
        },
      })
      .to(".ball", { autoAlpha: 1 })
      .from("#thePath", { drawSVG: 0 }, 0)
      .to(
        ".ball",
        {
          motionPath: {
            path: "#thePath",
            align: "#thePath",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );
  }, []);

  // GSDevTools.create({ animation: main })

  return (
    <div className="w-full relative overflow-x-hidden ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1500"
        width="1900"
        className="relative z-50"
        id="svg"
      >
        <path
          d="M -7 600 q 296 -290 605 29, 200 180 357 -6, 2 0 100 -170, 221 -381 590 10, 131 100 270 15, 0 0 0 300, -250 -200 -388 0, -300 530 -600 200, -180 -180 -320 -60, 
          
          "
          id="thePath"
          stroke="#212121"
          strokeWidth={30}
          fill="none"
        />

        <image
          x="-20"
          y="575"
          width="40"
          height="40"
          href="public/Slicing/our workflow/pointer.png"
          className="ball"
        />

        <image
          x="250"
          y="170"
          width="40"
          height="40"
          href="public/Slicing/our workflow/verstehen-icon .png"
          className="img img-1"
        />
        <image
          x="600"
          y="280"
          width="40"
          height="40"
          href="public/Slicing/our workflow/ideenfindung & konzept-icon.png"
          className="img img-2"
        />
        <image
          x="1000"
          y="0"
          width="40"
          height="40"
          href="public/Slicing/our workflow/design-icon .png"
          className="img img-3"
        />
        <image
          x="1400"
          y="20"
          width="40"
          height="40"
          href="public/Slicing/our workflow/realisation-icon .png"
          className="img img-4"
        />
        <image
          x="1400"
          y="500"
          width="40"
          height="40"
          href="public/Slicing/our workflow/testing-icon .png"
          className="img img-5"
        />
        <image
          x="1000"
          y="700"
          width="40"
          height="40"
          href="public/Slicing/our workflow/launch-icon.png"
          className="img img-5"
        />
        <image
          x="600"
          y="1000"
          width="40"
          height="40"
          href="public/Slicing/our workflow/betreuung-icon .png"
          className="img img-6"
        />

        {/* ------------------ */}

        <text x="250" y="240" fill="gray" className="text-[1.5rem] ">
          Verstehen
        </text>
        <text x="600" y="350" fill="gray" className="text-[1.5rem] ">
          Verstehen
        </text>
        <text x="1000" y="70" fill="gray" className="text-[1.5rem] invisible ">
          Verstehen
        </text>
        <text x="1400" y="90" fill="gray" className="text-[1.5rem] invisible ">
          Verstehen
        </text>
        <text x="1400" y="570" fill="gray" className="text-[1.5rem] invisible ">
          Verstehen
        </text>
        <text x="1000" y="770" fill="gray" className="text-[1.5rem] invisible ">
          Verstehen
        </text>
        <text x="600" y="1070" fill="gray" className="text-[1.5rem] invisible ">
          Verstehen
        </text>

        {/* ------------ */}

        <text x="250" y="280" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="250" y="300" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="250" y="320" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="250" y="340" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="600" y="390" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="600" y="410" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="600" y="430" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="600" y="450" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="1000" y="110" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="1000" y="130" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="1000" y="150" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="1000" y="170" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="1400" y="130" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="1400" y="150" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="1400" y="170" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="1400" y="190" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="1400" y="600" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="1400" y="620" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="1400" y="640" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="1400" y="660" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="1000" y="810" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="1000" y="830" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="1000" y="850" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="1000" y="870" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
        {/* ------------ */}

        <text x="600" y="1110" fill="gray" className="w-[10vw] bg-green-50 ">
          Lorem Ipsum is simply dummy
        </text>
        <text x="600" y="1130" fill="gray" className="w-[10vw] bg-green-50 ">
          text of the printing and typesetting
        </text>
        <text x="600" y="1150" fill="gray" className="w-[10vw] bg-green-50 ">
          industry. Lorem Ipsum has been
        </text>
        <text x="600" y="1170" fill="gray" className="w-[10vw] bg-green-50 ">
          the insustrys standard
        </text>
      </svg>
    </div>
  );
};

export default WorkflowSection2;
