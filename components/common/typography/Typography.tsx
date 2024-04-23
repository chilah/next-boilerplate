import { BaseComponentProps } from '@/type';
import React from 'react';

type TypographyProps = {} & BaseComponentProps;

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Typography;
