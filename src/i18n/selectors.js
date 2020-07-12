import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;

const makeSelectIsLoginPending = () =>
  createSelector(
    selectLogin,
    substate => substate.isPending
  );

export { makeSelectIsLoginPending };
