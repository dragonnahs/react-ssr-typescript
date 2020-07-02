import { produce } from 'immer';
import { ActionTypes } from './actions';
import { Action, AppState } from './types';

export const initialState = Object.freeze<AppState>({
    locale: 'zh_CN',
    token: '',
    userInfo: null,
});

export default (state: AppState = initialState, action: Action): AppState =>
    produce(state, (draft) => {
        switch (action.type) {
            case ActionTypes.SETLOCALE: {
                draft.locale = action.payload;
                return;
            }
            case ActionTypes.SETTOKEN: {
                draft.token = action.payload;
                return;
            }
            case ActionTypes.SETUSERINFO: {
                draft.userInfo = action.payload;
                return;
            }
        }
    });
