import '../ListItem/ListItem.css';
import React, { FC } from 'react';

type Props = {
  num: number;
  text: string;
};

export const ListItem: FC<Props> = ({ num, text }) => {
  return (
    <li className="ListItem">
      <span className="ListItem__mark">{num}</span>
      <span className="ListItem__text">{text}</span>
    </li>
  );
};
