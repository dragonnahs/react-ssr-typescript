/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppState, Locale, UserInfo } from './types';

export const app = (state: { app: AppState }): AppState => state.app;

export const getLocale = createSelector([app], (app): Locale => app.locale);

export const getUserInfo = createSelector([app], (app): UserInfo => app.userInfo);
