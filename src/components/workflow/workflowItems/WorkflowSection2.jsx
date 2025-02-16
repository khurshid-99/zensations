import gsap from "gsap";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import GSDevTools from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import DrawSVGPlugin from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin, GSDevTools);

const WorkflowSection2 = () => {
  const containerRef = useRef();
  const ballRef = useRef();
  const pathRef = useRef();
  const svgPrent = useRef();
  const anatherRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline(
      {
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 1%",
          end: "top -400%",
          scrub: 3.5,
          pin: true,
          markers: true,
        },
      }
      // 0
    );

    tl.to(
      anatherRef.current,
      {
        // x: -gsap.getProperty(".ball", "x"),
        transform: "translateX(-70%)",
        // transform: "translateX(-70%) translateY(-5%)",
      },
      0
    );
    tl.to(
      ballRef.current,
      {
        motionPath: {
          path: pathRef.current,
          align: pathRef.current,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
        },
        duration: 0.99, // Slower movement
      },
      0
    );
  });

  return (
    <div
      ref={containerRef}
      className="ptentSvg  relative overflow-x-hidden  overflow-hidden  w-[150vw]"
    >
      <div ref={anatherRef} className="z-99 relative w-[1500px]   ">
        <div
          ref={svgPrent}
          className="svgPrent w-[150vw] overflow-x-hidden
           "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 3501.8 1885"
            xmlSpace="preserve"
            className="relative z-50"
            id="svg"
          >
            <g>
              <path
                ref={pathRef}
                className="thePath"
                id="thePath"
                d="M-10,636C145,540.2,246,457.9,379.3,443.2c65.6-6.4,134.6,10.4,192.6,39.4c20.9,10.4,40.8,22.5,59.6,36
		c49.9,35.9,82,75.4,125.4,112.4c42.3,36.4,96.1,67.9,150.4,85.5c170.7,59,270.4-69.1,352.7-227.9c30.2-56.4,53.3-114.8,91.2-164.9
		c97.3-130.1,301.5-137.1,435.1-25.7c46.4,37.9,85.6,87.5,130.9,126.8c144.5,132,317.3,42.2,445.7-65.5
		c39.8-33.2,73.1-68.9,109.6-104.6c129.4-132.2,293.2-187,461.6-155.6c86.3,15.4,161.9,57,227.4,114
		c274.5,235.8,302.7,652.8,72.1,909.9c-308.6,312.8-549.9,161.2-901.2,266.8c-193,58-161.2,47.4-368.1,136.8"
                stroke="#212121"
                strokeWidth="30"
                fill="none"
              ></path>
            </g>

            {/* <path
            ref={pathRef}
            id="thePath"
            d="M 0 100 q 0 0 1000 0, 
          "
            stroke="black"
            strokeWidth="15"
            fill="none"
          /> */}

            {/* <circle ref={ballRef} r="45" cx="50" cy="50" fill="red" />
            <circle
              ref={ballRef}
              className="theCircleShadow opacity-[0.2] "
              cx="693.1"
              cy="530.9"
              r="150"
              fill="url(#whiteToTransparent)"
            /> */}

            <image
              ref={ballRef}
              x="-20"
              y="575"
              width="40"
              height="40"
              href="Slicing/our workflow/pointer.png"
              className="ball"
            />

            <image
              x="250"
              y="170"
              width="40"
              height="40"
              href="Slicing/our workflow/verstehen-icon .png"
              className="img img-1"
            />
            <image
              x="600"
              y="280"
              width="40"
              height="40"
              href="Slicing/our workflow/ideenfindung & konzept-icon.png"
              className="img img-2"
            />
            <image
              x="1000"
              y="0"
              width="40"
              height="40"
              href="Slicing/our workflow/design-icon .png"
              className="img img-3"
            />
            <image
              x="1400"
              y="20"
              width="40"
              height="40"
              href="Slicing/our workflow/realisation-icon .png"
              className="img img-4"
            />
            <image
              x="1400"
              y="500"
              width="40"
              height="40"
              href="Slicing/our workflow/testing-icon .png"
              className="img img-5"
            />
            <image
              x="1000"
              y="700"
              width="40"
              height="40"
              href="Slicing/our workflow/launch-icon.png"
              className="img img-5"
            />
            <image
              x="600"
              y="1000"
              width="40"
              height="40"
              href="Slicing/our workflow/betreuung-icon .png"
              className="img img-6"
            />

            {/* ------------------ */}

            <text x="250" y="240" fill="gray" className="text-[1.5rem] ">
              Verstehen
            </text>
            <text x="600" y="350" fill="gray" className="text-[1.5rem] ">
              Verstehen
            </text>
            <text
              x="1000"
              y="70"
              fill="gray"
              className="text-[1.5rem] invisible "
            >
              Verstehen
            </text>
            <text
              x="1400"
              y="90"
              fill="gray"
              className="text-[1.5rem] invisible "
            >
              Verstehen
            </text>
            <text
              x="1400"
              y="570"
              fill="gray"
              className="text-[1.5rem] invisible "
            >
              Verstehen
            </text>
            <text
              x="1000"
              y="770"
              fill="gray"
              className="text-[1.5rem] invisible "
            >
              Verstehen
            </text>
            <text
              x="600"
              y="1070"
              fill="gray"
              className="text-[1.5rem] invisible "
            >
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

            <text
              x="1000"
              y="110"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              Lorem Ipsum is simply dummy
            </text>
            <text
              x="1000"
              y="130"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              text of the printing and typesetting
            </text>
            <text
              x="1000"
              y="150"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              industry. Lorem Ipsum has been
            </text>
            <text
              x="1000"
              y="170"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              the insustrys standard
            </text>
            {/* ------------ */}

            <text
              x="1400"
              y="130"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              Lorem Ipsum is simply dummy
            </text>
            <text
              x="1400"
              y="150"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              text of the printing and typesetting
            </text>
            <text
              x="1400"
              y="170"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              industry. Lorem Ipsum has been
            </text>
            <text
              x="1400"
              y="190"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              the insustrys standard
            </text>
            {/* ------------ */}

            <text
              x="1400"
              y="600"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              Lorem Ipsum is simply dummy
            </text>
            <text
              x="1400"
              y="620"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              text of the printing and typesetting
            </text>
            <text
              x="1400"
              y="640"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              industry. Lorem Ipsum has been
            </text>
            <text
              x="1400"
              y="660"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              the insustrys standard
            </text>
            {/* ------------ */}

            <text
              x="1000"
              y="810"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              Lorem Ipsum is simply dummy
            </text>
            <text
              x="1000"
              y="830"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              text of the printing and typesetting
            </text>
            <text
              x="1000"
              y="850"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              industry. Lorem Ipsum has been
            </text>
            <text
              x="1000"
              y="870"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              the insustrys standard
            </text>
            {/* ------------ */}

            <text
              x="600"
              y="1110"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              Lorem Ipsum is simply dummy
            </text>
            <text
              x="600"
              y="1130"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              text of the printing and typesetting
            </text>
            <text
              x="600"
              y="1150"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              industry. Lorem Ipsum has been
            </text>
            <text
              x="600"
              y="1170"
              fill="gray"
              className="w-[10vw] bg-green-50 "
            >
              the insustrys standard
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection2;
