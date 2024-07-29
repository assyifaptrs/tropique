import React from 'react';

type Props = {
  text: string;
};

const ButtonSecondary = ({ text }: Props) => {
  return (
    <button className="bg-transparent border border-blue rounded-md text-center py-3 px-8 hover:shadow-md">
      <span className="text-blue font-semibold">{text}</span>
    </button>
  );
};

export default ButtonSecondary;
