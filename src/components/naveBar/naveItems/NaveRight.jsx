import { Link } from "react-router-dom";

const NaveRight = () => {
  return (
    <div className="lg:flex lg:items-center lg:gap-5">
      <div>
        <Link>Contact Us</Link>
      </div>
      <div>
        <h4>DropDoun</h4>
      </div>
      <div>
        <h4>menu</h4>
      </div>
    </div>
  );
};

export default NaveRight;
