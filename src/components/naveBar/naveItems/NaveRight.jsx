import { Link } from "react-router-dom";

const NaveRight = () => {
  return (
    <div className="lg:flex lg:items-center lg:gap-5 justify-between ">
      <div className="mr-5">
        <Link>Contact Us</Link>
      </div>
      <div className="flex items-center mr-5 ">
        <div className="pl-2">
          <img src="Slicing/header/flag.jpg" alt="" />
        </div>
        <select
          name=""
          id=""
          className="appearance-none bg-no-repeat bg-[center_right_12px]  py-1 px-4 pr-8 object-center outline-none mr-2 "
          style={{ backgroundImage: "url('Slicing/footer/arrow.png')" }}
        >
          <option value="india" className="text-black bg-gray-200">
            GN
          </option>
        </select>
      </div>
      <div className="relative ">
        <img
          src="Slicing/header/menu bar-image.png"
          alt=""
          className="relative"
        />
      </div>
    </div>
  );
};

export default NaveRight;
