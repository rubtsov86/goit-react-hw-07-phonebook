import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contacts-reducer';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: contactsReduser,
});

// const myMiddleware = store => next => action => {
//   console.log('моя прослойка', action);

//   next(action);
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // myMiddleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
