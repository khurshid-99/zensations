const BlogCard = ({ img, projectName, date, description, name, time,  }) => {
  return (
    <div  className="w-[25vw] h-full rounded-3xl overflow-hidden shrink-0">
      <div className="w-full h-[30vh] ">
        <img src={img} alt="" className="rounded-b-3xl" />
      </div>
      <div className="flex items-center">
        <h6 className="px-2 py-[1px] bg-gray-400 text-[13px] text-white rounded-[50px]">
          {projectName}
        </h6>
        <h6 className="ml-3 text-[13px] text-gray-400 ">{date}</h6>
      </div>
      <h3 className="my-2 text-[1.3rem] font-medium">{description}</h3>
      <div className="flex items-center">
        <h6 className="text-[13px] text-gray-400 ">{name}</h6>
        <img src="/Slicing/blog/dot.png" alt="" className="mx-2" />
        <h6 className="text-[13px] text-gray-400  ">{time}</h6>
      </div>
    </div>
  );
};

export default BlogCard;
