import React from 'react';
import Image from 'next/image';
import Title from './ui/Title';
import Paragraph from './ui/Paragraph';

const About = () => {
  return (
    <div className="w-full">
      <div className="relative py-32 px-12 md:px-36">
        <Image
          src="/wave.svg"
          alt="Wave"
          className="absolute right-0 -top-5"
          width={179}
          height={37}
        />
        <Image
          src="/wave.svg"
          alt="Wave"
          className="absolute right-0 top-5"
          width={179}
          height={37}
        />
        <Image
          src="/wave.svg"
          alt="Wave"
          className="absolute left-0 bottom-28 rotate-180"
          width={179}
          height={37}
        />
        <Image
          src="/wave.svg"
          alt="Wave"
          className="absolute left-0 bottom-[70px] rotate-180"
          width={179}
          height={37}
        />
        <div className="flex flex-col justify-between gap-x-14 md:flex-row sm:gap-y-10">
          <div className="w-full md:w-1/2">
            <div className="relative w-[500px] h-[500px] max-w-full">
              <Image
                src="/img-1.svg"
                alt="Image 1"
                className="absolute z-10 rounded-tr-xl rounded-bl-xl"
                width={350}
                height={350}
              />
              <Image
                src="/img-2.svg"
                alt="Image 2"
                className="absolute -left-16 bottom-64"
                width={200}
                height={300}
              />
              <Image
                src="/img-3.svg"
                alt="Image 3"
                className="absolute right-20 bottom-24"
                width={200}
                height={300}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col h-full gap-y-5">
            <Title title="About us" />
            <Paragraph description="Established in 2021, Tropique was born from a vision to create a haven of refined luxury in the heart of Bali, Indonesia. Our founders, inspired by a passion for hospitality and the captivating allure of our surroundings, embarked on a journey to craft an unparalleled retreat experience. Tropique stands today as a testament to their commitment, seamlessly blending sophistication with the natural beauty that defines our locale." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
