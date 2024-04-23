import { BaseComponentProps } from '@/type';
import React from 'react';

type Props = {} & BaseComponentProps;

const Layout: React.FC<Props> = ({ children }) => {
  return <div className=" bg-red-300">{children}</div>;
};

export default Layout;
