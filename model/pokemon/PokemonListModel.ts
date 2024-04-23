import { customtypes } from '@/lib/mobx';
import { pokemonService } from '@/service';
import {
  Instance,
  SnapshotOut,
  applySnapshot,
  flow,
  types,
} from 'mobx-state-tree';

export const PokemonListItemModel = types.model('PokemonListItemModel', {
  name: customtypes.optional(types.string, ''),
  url: customtypes.optional(types.string, ''),
});

export type TPokemonListItemModel = Instance<typeof PokemonListItemModel>;
export type TPokemonListItemModelSnapshot = SnapshotOut<
  typeof PokemonListItemModel
>;

export const PokemonListModel = types
  .model('PokemonListModel', {
    search: customtypes.optional(types.string, ''),
    page: customtypes.optional(types.number, 0),

    count: customtypes.optional(types.number, 0),
    next: customtypes.optional(types.union(types.string, types.null), null),
    previous: customtypes.optional(types.union(types.string, types.null), null),
    results: customtypes.optional(types.array(PokemonListItemModel), []),
  })
  .views((self) => ({
    get totalPage() {
      return Math.ceil(self.count / 10);
    },
  }))
  .actions((self) => ({
    getPokemonList: flow(function* () {
      try {
        const response = yield pokemonService.getPokemon();

        self.count = response.count;
        self.results = response.results;
      } catch (error) {
        console.error(error);
      }
    }),

    setField: <K extends keyof typeof self, V extends (typeof self)[K]>(
      fieldName: K,
      value: V
    ) => {
      self[fieldName] = value;
    },

    resetAll: () => {
      applySnapshot(self, {});
    },
  }));

export type TPokemonListModel = Instance<typeof PokemonListModel>;
