import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easeInOut, motion } from "framer-motion";

function Team() {
  const linkedinLogo = ({ link }) => {
    return (
      <a href={link} target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 40 40">
          <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
        </svg>
      </a>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const data = [
    {
      name: `Mukund Kumar Surehli`,
      img: `/students/Mukund.png`,
      review: `Worked on development of the Deep Learning Model and Backend.`,
      contact: linkedinLogo,
      contactLink: "https://www.linkedin.com/in/mukund-kumar-surehli/"
    },
    {
      name: `Karthik Bhusarapu`,
      img: `/students/Karthik.png`,
      review: `Lead Frontend Development and development of API, linking frontend and backend.`,
      contact: linkedinLogo,
      contactLink: "https://www.linkedin.com/in/karthik-bhusarapu-2b5b221b0/"
    },
    {
      name: `Christopher Sojan`,
      img: `/students/Christopher.png`,
      review: `Crafted website UI/UX design, and lead animation for Frontend.`,
      contact: linkedinLogo,
      contactLink: "https://www.linkedin.com/in/christopher-sojan-571729258/"
    },
    {
      name: `Kushagr Jain`,
      img: `/students/Kushagr.png`,
      review: `Contributed to DL Model Development and Project Deployment.`,
      contact: linkedinLogo,
      contactLink: "https://www.linkedin.com/in/kushagr-jain-819207228/"
    },
    {
      name: `Prithvik Hareesh`,
      img: `/students/Prithvik.png`,
      review: `Worked on Frontend Development and Custom Dataset creation.`,
      contact: linkedinLogo,
      contactLink: "https://www.linkedin.com/in/prithvik-hareesh-894a55243/"
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
          transition={{ ease: easeInOut, duration: 0.7 }}
        >
          Team Members
        </motion.h1>
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, x: "10px" }}
          whileInView={{ opacity: 1, x: "0px" }}
          transition={{ ease: easeInOut, duration: 0.8 }}
        >
          <Slider {...settings}>
            {data.map((d) => (
              <motion.div
                key={d.name}
                className="bg-neutral-content h-[425px] text-primary-content rounded-xl"
              >
                <div className='h-56 flex justify-center items-center rounded-t-xl' style={{ backgroundColor: '#159040' }}>
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full aspect-square" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold leading-normal tracking-wide">{d.name}</p>
                  <p className="text-center font-normal leading-normal tracking-wide">{d.review}</p>
                  <d.contact link={d.contactLink} />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}

export default Team;