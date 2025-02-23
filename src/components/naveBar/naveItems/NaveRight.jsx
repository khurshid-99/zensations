import gsap, { CustomEase } from "gsap/all";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(CustomEase);
const NaveRight = () => {
  const sideNaveRef = useRef("");

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
    const tl = gsap.timeline();
    menuOpen
      ? tl.to(sideNaveRef.current, {
          opacity: 0,
          duration: 2,
          width: 0,
          height: 0,
          stagger: 0.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.392,0.168 0.162,0.645 0.32,0.793 0.512,0.973 0.818,1.001 1,1 "
          ),
        })
      : tl.to(sideNaveRef.current, {
          opacity: 1,
          duration: 2,
          width: "12rem",
          height: "22rem",
          display: "inline-block",
          stagger: 0.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.392,0.168 0.162,0.645 0.32,0.793 0.512,0.973 0.818,1.001 1,1 "
          ),
        });
  };

  return (
    <div className="flex lg:items-center lg:gap-5 justify-between relative ">
      <div
        ref={sideNaveRef}
        className="sideNave w-0 h-0  font-medium bg-zinc-800/20 rounded-br-4xl rounded-tl-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 p-7 absolute top-10 right-0 z-50 hidden overflow-hidden "
      >
        <ul className="flex flex-col flex-nowrap items-start text-nowrap gap-y-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/expertise"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Expertise
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/anfrage"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Anfrage
          </NavLink>
          <NavLink
            to={"/uber"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Uber uns
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? "text-secondary" : "hover:text-red-400 duration-300"
            }
          >
            Contact Us
          </NavLink>
          <NavLink className="">
            <div className="flex items-center mr-5 ">
              <div className=" bg-green-500   ">
                <img
                  src="Slicing/header/flag.jpg"
                  alt=""
                  className="object-cover object-center"
                />
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
          </NavLink>
        </ul>
      </div>
      <div className="mr-5 hidden lg:inline-block ">
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-secondary" : "")}
        >
          Contact Us
        </NavLink>
      </div>
      <div className="hidden lg:visible lg:flex items-center mr-5 ">
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
          onClick={handleClick}
          src="Slicing/header/menu bar-image.png"
          alt=""
          className="relative  lg:w-full "
        />
      </div>
    </div>
  );
};

export default NaveRight;
