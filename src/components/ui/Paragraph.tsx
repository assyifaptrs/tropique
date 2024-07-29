import React from 'react';

type Props = {
  description: string;
};

const Paragraph = ({ description }: Props) => {
  return (
    <span className="text-black opacity-75 leading-loose">{description}</span>
  );
};

export default Paragraph;
