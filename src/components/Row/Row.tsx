import '../Row/Row.css';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Row: FC<Props> = ({ children }) => {
  return <div className="Row">{children}</div>;
};
