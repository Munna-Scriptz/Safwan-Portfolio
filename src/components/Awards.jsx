import React, { useEffect, useState } from 'react';
import Brand1 from '../assets/images/01.png';
import Brand2 from '../assets/images/02.png';
import Brand3 from '../assets/images/03.png';
import Brand4 from '../assets/images/04.png';
import Brand5 from '../assets/images/05.png';
import Brand6 from '../assets/images/06.png';
import Brand7 from '../assets/images/07.png';
import Brand8 from '../assets/images/08.png';
import Brand9 from '../assets/images/09.png';

const images = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8, Brand9];

const Awards = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const shuffled = images
      .map((img) => ({ img, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item, index) => ({
        id: index,
        img: item.img,
        delay: Math.random() * 0.4,
      }));

    setLogos(shuffled);
  }, []);

  return (
    <section id="Awards" className="mt-[248px]">
      <div>
        <div className="border-1 border-primary h-[800px] relative overflow-hidden">
          <div className="flex items-center gap-[126px] justify-center mt-[140px]">
            <div>
              <p className="font-vollkorn font-medium text-[18px] text-[#EF8100]">awards</p>
              <h2 className="font-vollkorn font-medium text-[50px] text-primary">83+ Design Awards</h2>
            </div>
            <div>
              <p className="font-vollkorn font-medium text-[18px] opacity-[0.7] text-primary w-[440px]">
                Solvency based award-winning design director and UI/UX design expert with 10 years of experience in
                design and management.
              </p>
            </div>
          </div>

          <div className="logo-wrapper">
            {logos.map((logo, i) => {
              const isStacked = i % 8 === 2 || i % 8 === 6;
              const lift = isStacked ? '-180px' : '0px';

              return (
                <div
                  key={logo.id}
                  className="logo-container"
                  style={{ '--lift': lift }}
                >
                  <img src={logo.img} alt="logo" className="logo-img" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
