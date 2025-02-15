import Img from "./Img";
import Inpute from "./Inpute";
import StayContact from "./StayContact";

const Consultation = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-full flex ">
        <Inpute />
        <Img />
      </div>
      <StayContact />
    </div>
  );
};

export default Consultation;
