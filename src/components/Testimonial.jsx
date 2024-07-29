import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TESTIMONIAL_DATA } from "./TestimonialData";
function Testimonial() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__testimonial">
          <div className="testimonial__text">
            <h2 className="heading__h2">Words from Our Valued Clients</h2>
          </div>
          <div className="testimonial__review">
            <Splide
              options={{
                perPage: 1,
                autoplay: false,
                speed: 1000,
                rewind: false,
                pagination: false,
                rewindByDrag: true,
                breakpoints: {
                  // 623: {
                  //   perPage: 2,
                  //   perMove: 2,
                  // },
                  1200: {
                    perPage: 1,
                    perMove: 1,
                  },
                },
              }}
            >
              {TESTIMONIAL_DATA.map((item) => (
                <SplideSlide key={item[0].id}>
                  <div className="review">
                    <div className="review__top">
                      <img
                        className="review__top--bg"
                        src={item[0].imgRoom}
                        alt=""
                      />
                      <img
                        className="review__top--profile"
                        src={item[0].img}
                        alt=""
                      />
                    </div>
                    <div className="review__bottom">
                      <div>
                        <h4 className="heading__h4">{item[0].name}</h4>
                        <p className="paragraph__inter--small--italic">
                          {item[0].job}
                        </p>
                      </div>

                      <p className="paragraph__inter--normal">
                        &quot;{item[0].review}&quot;
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
