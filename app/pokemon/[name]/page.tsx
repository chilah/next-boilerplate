import React from 'react';

type Props = {
  params: {
    name: string;
  };
};

const Page = (props: Props) => {
  return <div>{props.params.name}</div>;
};

export default Page;
