import { motion } from "motion/react";
import { useEffect, useRef } from "react";

import { animate, useMotionValue, useTransform } from "motion/react";

const WorkflowSection3 = () => {
  // Create Motion Values
  const years = useMotionValue(0);
  const happy = useMotionValue(0);
  const campaigns = useMotionValue(0);

  // Transform values to rounded numbers
  const roundedYears = useTransform(years, (value) => Math.round(value));
  const roundedHappy = useTransform(happy, (value) => Math.round(value));
  const roundedCampaigns = useTransform(campaigns, (value) =>
    Math.round(value)
  );

  // Refs for detecting when in view
  const yearsRef = useRef(null);
  const happyRef = useRef(null);
  const campaignsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === yearsRef.current) {
              animate(years, 25, { duration: 1 });
            }
            if (entry.target === happyRef.current) {
              animate(happy, 200, { duration: 1 });
            }
            if (entry.target === campaignsRef.current) {
              animate(campaigns, 150, { duration: 1 });
            }
          }
        });
      },
      { threshold: 0.9 } // Trigger when 50% of the element is visible
    );

    observer.observe(yearsRef.current);
    observer.observe(happyRef.current);
    observer.observe(campaignsRef.current);

    return () => observer.disconnect();
  }, [campaigns, happy, years]);

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
              <div>
                <motion.h1
                  ref={yearsRef}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  
                  className="my-3 w-[3.5rem]  lg:text-[3.5vw] lg:font-bold inline-block"
                >
                  {roundedYears}
                </motion.h1>{" "}
                <motion.span
                  initial={{ opacity: 0, size: 0 }}
                  animate={{ opacity: 1, size: 1 }}
                  transition={{ duration: 3 }}
                  className="inline-block lg:text-[3.5vw] lg:font-bold"
                >
                  +
                </motion.span>
              </div>
            </section>
            <section>
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5">Happy Customers</h4>
              <div>
                <motion.h1
                  ref={happyRef}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="my-3 w-[5.7rem]  lg:text-[3.5vw] lg:font-bold inline-block"
                >
                  {roundedHappy}
                </motion.h1>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="inline-block lg:text-[3.5vw] lg:font-bold"
                >
                  +
                </motion.span>
              </div>
            </section>
            <section>
              <img
                src="Slicing/our workflow/years of experience-icon.png"
                alt=""
              />
              <h4 className="mt-5">Campaigns</h4>
              <motion.h1
                ref={campaignsRef}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="my-3 w-[3.5rem]  lg:text-[3.5vw] lg:font-bold inline-block"
              >
                {roundedCampaigns}
              </motion.h1>
            </section>
          </div>
          <div className="relative w-full flex items-center">
            <img src="Slicing/our workflow/text-dot copy.png" alt="" />
            <img
              src="Slicing/our workflow/pointer-3 .png"
              alt=""
              className="absolute"
            />
            <img
              src="Slicing/our workflow/pointer-3 .png"
              alt=""
              className="absolute left-[40%]"
            />
            <img
              src="Slicing/our workflow/pointer-3 .png"
              alt=""
              className="absolute left-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection3;
