import { Link } from "react-router-dom";

const NaveMiddel = () => {
  return (
    <div className=" items-center lg:flex lg:gap-5 font-poppins text-[.9rem] font-medium ">
      <Link>Home</Link>
      <Link>Expertise</Link>
      <Link>Blog</Link>
      <Link>Anfrage</Link>
      <Link>Uber uns</Link>
    </div>
  );
};

export default NaveMiddel;
