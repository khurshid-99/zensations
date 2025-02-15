const Button = (props) => {
  const {img, name, style, imgS} = props;
  return (
    <div className="flex items-center font-poppins">
      <button className={`inline-block ${style}`} style={{}}>
        {`${name}`} <img className={`inline-block ${imgS}`} src={img} alt="" />
      </button>
    </div>
  );
};

export default Button;
