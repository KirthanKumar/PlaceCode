import { guard, sample, createStore } from 'effector';
import { createEffect } from 'effector';
import { usersApi } from '@api';
import { auth } from '@model';

const getWorksFx = createEffect(async () => usersApi.getAvailableWorks());

const $works = createStore([]);
$works.on(getWorksFx.doneData, (_, { payload }) => payload);
$works.reset(auth.logout);

guard({
  source: sample({
    source: auth.$store,
    clock: auth.loggedIn,
    fn: ({ user }) => (user ? user.id : null),
  }),
  filter: Boolean,
  target: getWorksFx,
});

export const MainPage = {
  $works,
  $isLoading: getWorksFx.pending,
};
