import Button from "../button/Button";

const Cards = ({ img, projectName, name, styles, imgBg }) => {
  return (
    <div className="px-3 py-3">
      <div className="w-[25vw] h-[20vw] bg-white border-3 border-black overflow-hidden ">
        <div className={`w-full px-2 py-2 h-[15vw] ${imgBg} `}>
          <img src={img} alt="" />
        </div>
        <div className="w-full h-[5vw] bg-black flex items-center justify-between px-[1.5vw] ">
          <div className="flex items-center ">
            <div className="w-[.7rem] h-[.7rem] rounded-full bg-[#01FFF4]  "></div>
            <h1 className="text-[1.4vw] ml-3 ">{projectName}</h1>
          </div>
          <div>
            <Button name={name} style={styles} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
