import { combineReducers } from 'redux';
import clientReducer from './client';
import userReducer from './user';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  client: clientReducer,
  user: userReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
