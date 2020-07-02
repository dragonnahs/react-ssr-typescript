import { LOGIN, LOGOUT } from './type';

export const loginAction = (userInfo: object) => {
    return (dispatch: any) => {
        dispatch({
            type: LOGIN,
            userInfo,
        });
    };
};

export const logoutAction = () => {
    return (dispatch: any) => {
        dispatch({
            type: LOGOUT,
        });
    };
};
