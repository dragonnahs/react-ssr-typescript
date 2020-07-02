import { combineReducers } from 'redux';
import user from './user/reducer';
import app from './app/reducer';

const createRootReducer = () =>
    combineReducers({
        app,
        user,
    });

export default createRootReducer;
