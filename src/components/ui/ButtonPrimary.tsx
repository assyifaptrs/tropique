import React from 'react';

type Props = {
  text: string;
};

const ButtonPrimary = ({ text }: Props) => {
  return (
    <button className="bg-blue rounded-md text-center py-3 px-8 hover:shadow-md">
      <span className="text-white font-semibold">{text}</span>
    </button>
  );
};

export default ButtonPrimary;
