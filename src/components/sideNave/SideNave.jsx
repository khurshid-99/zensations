const SideNave = ({ fnc, menu, setMenu }) => {
  return (
    <div
      onClick={fnc}
      className="w-[10rem] font-medium bg-zinc-800/20 rounded-br-4xl rounded-tl-4xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 p-7  z-50  "
    >
      <ul className="flex flex-col flex-nowrap items-start gap-y-4">
        <li>Home</li>
        <li>Expertise</li>
        <li>Blog</li>
        <li>Anfrage</li>
        <li>Uber uns</li>
        <li>Contact Us</li>
        <li>
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
        </li>
      </ul>
    </div>
  );
};

export default SideNave;
