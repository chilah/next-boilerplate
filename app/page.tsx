'use client';

import { AppModel } from '@/model';
import { observer, useLocalObservable } from 'mobx-react-lite';
import Image from 'next/image';

const Home = () => {
  const appStore = useLocalObservable(() => AppModel.create({}));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
};

export default observer(Home);
