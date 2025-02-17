import { NavLink } from "react-router-dom";

const NaveMiddel = () => {
  return (
    <div className=" items-center lg:flex lg:gap-5 font-poppins text-[.9rem] font-medium ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-secondary" : "hover:text-red-400 duration-300  "
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/expertise"}
        className={({ isActive }) =>
          isActive ? "text-secondary" : "hover:text-red-400 duration-300  "
        }
      >
        Expertise
      </NavLink>
      <NavLink
        to={"/blog"}
        className={({ isActive }) =>
          isActive ? "text-secondary" : "hover:text-red-400 duration-300  "
        }
      >
        Blog
      </NavLink>
      <NavLink
        to={"/anfrage"}
        className={({ isActive }) =>
          isActive ? "text-secondary" : "hover:text-red-400 duration-300  "
        }
      >
        Anfrage
      </NavLink>
      <NavLink
        to={"/Uberuns"}
        className={({ isActive }) =>
          isActive ? "text-secondary" : "hover:text-red-400 duration-300  "
        }
      >
        Uber uns
      </NavLink>
    </div>
  );
};

export default NaveMiddel;
