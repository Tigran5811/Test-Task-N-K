import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import employeesReducer from './reducers/employees';
import tasksReducer from './reducers/tasks';
import employeeReducer from './reducers/employee';
import taskReducer from './reducers/task';
import loaderReducer from './reducers/loader';
import pageReducer from './reducers/page';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  employees: employeesReducer,
  employee: employeeReducer,
  task: taskReducer,
  tasks: tasksReducer,
  loader: loaderReducer,
  page: pageReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
