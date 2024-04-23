import { sum } from '@/lib/mock';
import { AppModel } from '@/model';
import { expect, test } from 'vitest';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('app loading should be falsy', () => {
    const app = AppModel.create({});

    expect(app.loading).toBeFalsy();
});

test('app loading should be truthy', () => {
    const app = AppModel.create({});

    app.setField('loading', true);

    expect(app.loading).toBeTruthy();
});

test('app model should be reset', () => {
    const app = AppModel.create({});

    app.setField('name', 'zzz');
    app.setField('loading', true);

    app.resetAll();

    expect(app).toMatchObject({ loading: false, name: '' });
});
