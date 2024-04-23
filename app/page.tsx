'use client';

import React from 'react';
import { TextInput } from '@/components/pattern';
import { AppModel, PokemonListModel } from '@/model';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Typography } from '@/components/common';

const Page = () => {
  const pokemonStore = useLocalObservable(() => PokemonListModel.create({}));

  React.useEffect(() => {
    (async () => {
      try {
        await pokemonStore.getPokemonList();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col px-20 py-10">
      <TextInput
        value={pokemonStore.search}
        onChange={(value) => {
          pokemonStore.setField('search', value);
        }}
        label={'Search'}
      />

      <div className="flex flex-col gap-4">
        <div>
          {pokemonStore.results.map((item, index) => (
            <Typography key={index}>{item.name}</Typography>
          ))}
        </div>

        <Typography>{`Total: ${pokemonStore.totalPage}`}</Typography>
      </div>
    </main>
  );
};

export default observer(Page);
