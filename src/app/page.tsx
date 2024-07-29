import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-full">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Page;
