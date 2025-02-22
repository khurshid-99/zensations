import { Button } from "../../template";
import Arrow from "../../../public/Slicing/header/arrow-3.png";

const UberSection2 = () => {
  return (
    <div className="w-full h-full lg:flex lg:items-center lg:justify-between lg:py-[5vw] ">
      <div className="w-[45%] h-full lg:flex lg:items-center lg:justify-center lg:flex-col">
        <div className="">
        <p className="lg:text-[1vw] ">
          Zensation ist lhr Wegbegleiter durch <br />
          die digitale Welt und daruber hinaus. <br />
          Mit professionellem UX Design,
        </p>
        <p className="lg:mt-[2vw] text-[1vw] ">
          strategischem Brand Management <br /> sowie diverse Workshops und
          Trainings <br /> fur lhren Kommunikations
        </p>
        <Button name="Mejr erfahren" img={Arrow} style='bg-black text-white px-4.5 py-2.5 font-light mt-[4vw] uppercase ' />
        </div>
      </div>
      <div className="w-[55%] h-full">
        <img
          className="w-full h-full object-cover object-center"
          src="Slicing/header/about-image.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default UberSection2;
