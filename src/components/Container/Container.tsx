// import * as React from 'react';
import '../Container/Container.css';
import React, { FC, ReactNode } from 'react';

type Props = {
  className: string;
  children: ReactNode;
};

export const Container: FC<Props> = ({ children, className }) => {
  return <section className={`Container ${className}`}>{children}</section>;
};
