import React, { useEffect, useState } from 'react'
import Brand1 from '../assets/images/01.png'
import Brand2 from '../assets/images/02.png'
import Brand3 from '../assets/images/03.png'
import Brand4 from '../assets/images/04.png'
import Brand5 from '../assets/images/05.png'
import Brand6 from '../assets/images/06.png'
import Brand7 from '../assets/images/07.png'
import Brand8 from '../assets/images/08.png'
import Brand9 from '../assets/images/09.png'

const images = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
];

const Awards = () => {
const [logos, setLogos] = useState([]);

  useEffect(() => {
    const placed = [];
    const drops = images.map((img, index) => {
      let left;
      do {
        left = Math.floor(Math.random() * 85);
      } while (placed.find(p => Math.abs(p - left) < 10));
      placed.push(left);

      const randomY = Math.random() * 40; // slight height randomness

      return {
        id: index,
        left,
        bottomOffset: randomY,
        img,
      };
    });
    setLogos(drops);
  }, []);


  return (
    <>
        <section id='Awards' className='mt-[248px]'>
            <div className="container">
                <div className='border-1 border-primary h-[800px]'>
                    <div id="TextHeader" className='flex items-center gap-[126px] justify-center mt-[140px]'>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] text-[#EF8100]'>awards</p>
                            <h2 className='font-vollkorn font-medium text-[50px] text-primary'>83+ Design Awards</h2>
                        </div>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] opacity-[0.7] text-primary w-[440px]'>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p>
                        </div>
                    </div>
                    {/* -------------Falling Awards------- */}
                    <div className="logo-wrapper">
      {logos.map((logo) => (
        <img
          key={logo.id}
          src={logo.img}
          className="logo-img"
          style={{
            left: `${logo.left}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            transform: `translateY(-100vh)`,
            bottom: `${logo.bottomOffset}px`,
          }}
          alt=""
        />
      ))}
    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Awards