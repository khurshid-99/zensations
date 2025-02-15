const FooterItems = () => {
  return (
    <footer className="w-full lg:h-full bg-black lg:px-[10vw] lg:pt-[5vw] lg:pb-[3vw] ">
      <div className="w-full flex justify-between items-center">
        <section>
          <img src="/Slicing/header/logo.png" alt="" />
          <h4 className="mt-10 text-[#f1f1f1b4] text-[1.2rem] font-light ">
            Elevating communication, marketing, <br />
            UX design into powerful digital experiences <br /> targeted
            campaigns, identities that <br />
            drive results and transform businesses
          </h4>
        </section>
        <aside className="w-1/2 flex items-start justify-between text-[#f1f1f1b4]">
          <div>
            <h1 className="text-[#01FFF4] uppercase text-[1.2rem]  ">
              Quick Link
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#01FFF4] block mb-8 mt-3 rounded-xl "></span>
            <ul className="flex flex-col gap-[.6rem] ">
              <li>Home</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#01FFF4] uppercase text-[1.2rem]  ">
              Service
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#01FFF4] block mb-8 mt-3 rounded-xl "></span>
            <ul className="flex flex-col gap-[.6rem] ">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#01FFF4] uppercase text-[1.2rem]  ">
              Follow Us
            </h1>
            <span className="w-[1.8rem] h-[2px] bg-[#01FFF4] block mb-8 mt-3 rounded-xl "></span>
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-[.8rem] h-fit w-[1.2rem] ">
                <img
                  src="Slicing/footer/facebook-icon .png"
                  alt=""
                  className="  object-cover  "
                />
                <img
                  src="Slicing/footer/Instagram-icon.png"
                  alt=""
                  className=" object-center object-cover  "
                />
                <img
                  src="Slicing/footer/linkedin-icon.png"
                  alt=""
                  className=" object-center object-cover  "
                />
                <img
                  src="Slicing/footer/Twitter-icon .png"
                  alt=""
                  className=" object-center object-cover  "
                />
              </div>
              <div className="flex flex-col gap-[.6rem] capitalize">
                <h4>facebook</h4>
                <h4>Instagram</h4>
                <h4>Linkedln</h4>
                <h4>Twitter</h4>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="w-full text-[#f1f1f1b4] flex justify-between mt-20  ">
        <div className="flex">
          <h1>&copy; 2025 All Right Reserved </h1>
          <div className="ml-35"> 
            <select
              name=""
              id=""
              className="appearance-none bg-[url(public/Slicing/footer/arrow.png)] bg-no-repeat bg-[center_right_12px] border border-[#f1f1f156] rounded py-1 px-4 pr-20 object-center outline-none mr-2 "
            >
              <option value="" className="text-black bg-gray-200">
                Contact Us
              </option>
              <option value="" className="text-black bg-gray-200 ">
                Contact Us
              </option>
            </select>
            <select
              name=""
              id=""
              className="appearance-none bg-[url(public/Slicing/footer/arrow.png)] bg-no-repeat bg-[center_right_8px] border border-[#f1f1f156] rounded py-1 px-4 pr-8 object-center outline-none  "
            >
              <option value="">English</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-10 capitalize text-[#01FFF4] ">
          <h2>terms</h2>
          <h2>Privacy</h2>
        </div>
      </div>
    </footer>
  );
};

export default FooterItems;
