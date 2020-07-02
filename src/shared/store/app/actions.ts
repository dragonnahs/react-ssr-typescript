import { Locale, Token, UserInfo } from './types';

export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
    SETTOKEN: 'app/set-token',
    SETUSERINFO: 'app/set-userinfo',
};

export const setLocale = (locale: Locale) => ({
    type: ActionTypes.SETLOCALE,
    payload: locale,
});

export const setToken = (token: Token) => ({
    type: ActionTypes.SETTOKEN,
    payload: token,
});

export const setUserInfo = (userInfo: UserInfo) => ({
    type: ActionTypes.SETUSERINFO,
    payload: userInfo,
});
