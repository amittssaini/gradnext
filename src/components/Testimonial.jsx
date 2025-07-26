import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Dinesh",
    company: "McKinsey & Company",
    image: "https://static.wixstatic.com/media/7ffe3d_119cb46d1e894523bccf3cfda8b5a120~mv2.jpeg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1662666687506.jpeg",
    quote:
      "I had a great experience working with the grad next to prepare for my case interviews. The support and guidance I received were instrumental in improving both my confidence and my performance during the actual interviews. A special thanks to Kashish and Nikhil, who were exceptional throughout the process. Kashish brought clarity and structure to complex problems and always made sure I understood not just the “how” but also the “why” behind every step. Nikhil’s insights and constructive feedback helped me refine my approach and think more critically under pressure ",
  },
  {
    name: "Avni",
    company: "BCG",
    image: "https://static.wixstatic.com/media/7ffe3d_0ea20eda217041b982e8a8d043b16653~mv2.png/v1/fill/w_416,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.png",
    quote:
      "Kashish was a true pillar of support throughout my prep process. I definitely owe a huge part of my convert to him ! From resume reviews to case prep his inputs at each stage were truly pivotal and value adding Line by line inputs in resume with detailed discussion on what we want to convey. Tailored feedback on cases with tracking of performance over time Kashish treats your prep journey as his own and is a great mentor to have by your side!",
  },
  {
    name: "Rekha Bhardwaj",
    company: "BCG",
    image: "https://static.wixstatic.com/media/7ffe3d_ff412556b6214cb99e498a787720700e~mv2.jpeg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1741698225714.jpeg",
    quote:
      "gradnext was a huge help in my consulting prep journey. Their mock interviews gave me the structure and confidence I needed, and the detailed feedback helped me improve with each session. What I appreciated most was how flexible and accommodating they were with my schedule - it made the whole process so much easier. If you're looking for solid prep with a supportive team that really cares, I highly recommend them!",
  },
];

const Testimonial = () => {
  return (
    <section style={{ backgroundColor: "#f4f8ff", padding: "3rem 1rem" }}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          fontWeight: "600",
          color: "#1c2c57",
          marginBottom: "1rem",
        }}
      >
        Testimonials
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#1c2c57",
          marginBottom: "2.5rem",
        }}
      >
        Join the <em>club</em> who have trusted us and started their journey
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: "1050px", margin: "0 auto" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "2.5rem",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image Card */}
              <div
                style={{
                  textAlign: "center",
                  background: "#fff",
                  padding: "1rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  flex: "0 0 200px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "10px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />
                <h4 style={{ color: "#1c2c57", fontWeight: "bold", margin: 0 }}>
                  {item.name}
                </h4>
                <p
                  style={{
                    color: "#1c2c57",
                    fontSize: "0.95rem",
                    marginTop: "0.3rem",
                  }}
                >
                  {item.company}
                </p>
              </div>

              {/* Quote */}
              <div
                style={{
                  maxWidth: "550px",
                  color: "#1c2c57",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  textAlign: "left",
                }}
              >
                {item.quote}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;