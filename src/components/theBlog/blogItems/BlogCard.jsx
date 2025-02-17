import { useState } from "react";
import { BlogCard } from "../../../template";
import dot from "/Slicing/blog/dot.png";
import img1 from "/Slicing/header/about-image.jpg";
import img2 from "/Slicing/blog/deelopment-image .png";
import img3 from "/Slicing/blog/design-image .png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const BlogCards = () => {
  const [cardDetiles, setCardDetiles] = useState([
    {
      img: img1,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img2,
      projectName: "Development",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img3,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
    {
      img: img1,
      projectName: "Desigen",
      date: "30.01.2025",
      description: "Die grobten Marketing-Trends 2025: Was Unternehmen mussen",
      name: "John Doe",
      dot: dot,
      time: "18 min",
    },
  ]);

  return (
    <div className="w-full h-[45vh]  px-[10vw] font-poppins flex flex-nowrap shrink-0 overflow-x-hidden gap-x-5 ">
      <Swiper grabCursor={true} slidesPerView={3} loop={true}>
        {cardDetiles.map((card, index) => (
          <div key={index}>
            <SwiperSlide>
              <BlogCard
                img={card.img}
                projectName={card.projectName}
                date={card.date}
                description={card.description}
                name={card.name}
                time={card.time}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCards;
