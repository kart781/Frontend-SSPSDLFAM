import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Reference() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      name: 'Creative Workspace',
      img: 'https://example.com/workspace.jpg',
      review: 'An inspiring place for creative minds.',
    },
    {
      name: 'Mountain Retreat',
      img: 'https://example.com/mountain.jpg',
      review: 'A peaceful escape surrounded by nature.',
    },
    {
      name: 'City Lights',
      img: 'https://example.com/city.jpg',
      review: 'Experience the vibrant energy of the city.',
    },
    {
      name: 'Cozy Cabin',
      img: 'https://example.com/cabin.jpg',
      review: 'A warm and inviting space for relaxation.',
    },
    // Add more data as needed
  ];

  return (
    <div className='w-3/4 m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className='bg-white h-[500px] text-black rounded-xl'>
              <div className='h-56 bg-emerald-900 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt='' className='h-44 w-44 rounded-full' />
              </div>

              <div className='flex flex-col items-center justify-center gap-4 p-4'>
                <p className='text-xl font-semibold'>{d.name}</p>
                <p className='text-center'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reference;
