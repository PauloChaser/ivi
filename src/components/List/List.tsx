import '../List/List.css';
import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const List: FC<Props> = ({ children }) => {
  return <div className="List">{children}</div>;
};
