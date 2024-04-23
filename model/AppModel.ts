import { customtypes } from '@/lib/mobx';
import { Instance, applySnapshot, types } from 'mobx-state-tree';

export const AppModel = types
    .model('AppModel', {
        loading: customtypes.optional(types.boolean, false),
    })
    .actions((self) => ({
        setField: <K extends keyof typeof self, V extends (typeof self)[K]>(
            fieldName: K,
            value: V,
        ) => {
            self[fieldName] = value;
        },

        resetAll: () => {
            applySnapshot(self, {});
        },
    }));

export type IAppModel = Instance<typeof AppModel>;
