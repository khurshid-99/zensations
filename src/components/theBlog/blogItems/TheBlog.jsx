import { useState } from "react";
import { Button } from "../../../template";

const TheBlog = () => {
  const [buttons, setButtons] = useState([
    "Accessiblity",
    "Augmented Reality",
    "Design",
    "Development",
    "Digital Marketing",
    "Event",
    "E-Commerce",
    "Internes",
    "Jobs",
    "Marleting",
    "News",
    "Social Media",
  ]);

  return (
    <div className="w-full h-[40vh]  font-poppins px-[10vw]  relative flex items-center justify-between  ">
      <section className="w-[30vw] h-full ">
        <h4 className="flex items-center">
          The Blog{" "}
          <span className="w-[2rem] h-[2px] bg-black inline-block "></span>{" "}
        </h4>
        <h1 className="text-[5vw] leading-0 mb-[2vw] mt-[5vw]  ">Latest</h1>
        <h1 className="text-[5vw] font-bold ">Insights</h1>
      </section>
      <section className="w-[45vw]  ">
        <div className="w-full h-full flex flex-wrap items-center gap-2 mb-[2vw] ">
          {buttons.map((button, index) => (
            <div key={index}>
              <Button
                name={button}
                style="px-4 py-1 border border-primary rounded-[50px] text-nowrap "
              />
            </div>
          ))}
        </div>
        <Button
          name="View MOre"
          style="uppercase bg-black text-white text-[.9rem] rounded-[50px] px-9 py-3 "
        />
      </section>
    </div>
  );
};

export default TheBlog;
