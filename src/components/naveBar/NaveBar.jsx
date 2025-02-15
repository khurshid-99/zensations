import NaveLeft from "./naveItems/NaveLeft";
import NaveMiddel from "./naveItems/NaveMiddel";
import NaveRight from "./naveItems/NaveRight";

const NaveBar = () => {
  return (
    <div className="w-full bg-[#f0f0f0] lg:flex lg:items-center lg:justify-between lg:px-[5vw] lg:py-3 relative">
      <NaveLeft />
      <NaveMiddel />
      <NaveRight />
    </div>
  );
};

export default NaveBar;
