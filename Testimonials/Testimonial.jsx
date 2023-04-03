import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
      "I had a fantastic experience working with parth. He was extremely professional, knowledgeable, and efficient. He delivered high-quality work that exceeded my expectations. I highly recommend Parth's work and look forward to working with him again in the future.",
    },
    {
      img: profilePic2,
      review:
      "I was blown away by the creativity and expertise. He helped me develop a unique and visually stunning website that perfectly captures my brand. His attention to detail and commitment to customer satisfaction is unparalleled.",
    },
    {
      img: profilePic3,
      review:
      "Working with parth was a pleasure from start to finish. He listened to my needs and ideas, provided valuable insights and suggestions, and worked tirelessly to bring my vision to life. His professionalism, communication, and technical skills are top-notch.",
    },
    {
      img: profilePic4,
      review:
      "I had a great experience working with this parth. He were able to quickly and efficiently develop a custom software solution for my business. He was responsive to my needs and provided excellent support throughout the development process. I highly recommend him to anyone in need of software development services.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
