import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import employeesReducer from './reducers/employees';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  employees: employeesReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: combineReducers({
//     users: usersReducer,
//     user: userReducer,
//     image: imageReducer,
//     images: imagesReducer,
//     auth: authReducer,
//     aside: asideReducer,
//     userAccount: userAccountReducer,
//     laptops: laptopsReducer,
//     laptop: laptopReducer,
//     orders: ordersReducer,

//   }),

// });
