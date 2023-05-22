import '../Test/Test.css';
import React, { FC } from 'react';

type Props = {
  num: number;
  text: string;
};

export const Test: FC<Props> = ({ num, text }) => {
  return (
    <div className="Test">
      <span className="ListItem__mark">{num}</span>
      <span className="ListItem__text">{text}</span>
    </div>
  );
};
