import { customtypes } from '@/lib/mobx';
import { Instance, types } from 'mobx-state-tree';

export const AppModel = types.model('AppModel', {
  loading: customtypes.optional(types.boolean, false),
});

export type IAppModel = Instance<typeof AppModel>;
