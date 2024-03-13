import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easeInOut, motion } from "framer-motion";

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const data = [
    {
      name: `Mukund Kumar Surehli`,
      img: `/students/Mukund.png`,
      review: `Worked mainly on developing the Deep Learning Model and the API for the website`
    },
    {
      name: `Karthik Bhusarapu`,
      img: `/students/Karthik.png`,
      review: `Worked on developing the website and the API linking the Frontend and Backend`
    },
    {
      name: `Christopher Sojan`,
      img: `/students/Christopher.png`,
      review: `Worked on the website mainly focusing on the UX and the animating the website with motion`
    },
    {
      name: `Kushagr Jain`,
      img: `/students/Kushagr.png`,
      review: `Worked on developing the model and with the website by dockerising and hosting it on GCP`
    },
    {
      name: `Prithvik Hareesh`,
      img: `/students/Prithvik.png`,
      review: `Worked on the website and in help create the custom dataset`
    },

  ];

  

  return (
    <section id="team" className="min-h-screen flex bg-base-100 snap-center">
      <div className='w-3/4 m-auto text-center'>
      <motion.div className="flex flex-row justify-around items-center w-full h-full gap-x-10" layout></motion.div>
      <motion.h1
          className="prose font-bold text-5xl leading-normal tracking-wide"
          initial={{ opacity: 0, y: "-9px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ ease: easeInOut, duration: 0.5 }}
      >
          Team Members
      </motion.h1>
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-white h-[425px] text-black rounded-xl">
                <div className='h-56 flex justify-center items-center rounded-t-xl' style={{ backgroundColor: '#159040' }}>
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>

                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                  {/* <button className='text-white text-lg px-6 py-1 rounded-xl' style={{ backgroundColor: '#159040'}}>Contact Info</button> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}

export default Team;