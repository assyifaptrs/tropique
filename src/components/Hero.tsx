import React from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import Paragraph from './ui/Paragraph';
import ButtonPrimary from './ui/ButtonPrimary';
import ButtonSecondary from './ui/ButtonSecondary';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="pt-16 pb-32 px-12 md:px-24">
        <div className="flex flex-col justify-between items-center gap-x-14 md:flex-row sm:gap-y-10">
          <div className="w-full md:w-1/2 flex flex-col h-full gap-y-5">
            <Title title="Tropique - Escape to Paradise" />
            <Paragraph description="Tropique, where luxury meets tranquility. Nestled in Indonesia, our resort is a haven of sophistication, offering an unparalleled escape for those seeking the finest in hospitality." />
            <div className="flex gap-5">
              <ButtonPrimary text="About Us" />
              <ButtonSecondary text="Book a Room" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-[500px] h-[500px] max-w-full">
              <div className="absolute bg-blue w-[81px] h-[81px] rounded-full top-[60px] -right-28"></div>
              <div className="absolute">
                <Image
                  src="/hero.svg"
                  alt="Hero"
                  className="rounded-xl shadow-sm"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute bg-blue w-[72px] h-[72px] rounded-full bottom-2 -left-32"></div>
              <div className="absolute bg-blue w-[35px] h-[35px] rounded-full -bottom-8 -left-16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
