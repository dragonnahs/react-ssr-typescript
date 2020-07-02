import { LOGIN, LOGOUT } from './type';

interface initState {
    userInfo: object;
    type?: string;
}

const defaultState: initState = {
    userInfo: { name: 'admin', password: 123 },
};

export default (state = defaultState, action: initState) => {
    switch (action.type) {
        case LOGIN: {
            const newState1 = { ...state };
            newState1.userInfo = action.userInfo;
            return newState1;
        }
        case LOGOUT: {
            const newState = { ...state };
            newState.userInfo = {};
            return newState;
        }
        default: {
            return state;
        }
    }
};
