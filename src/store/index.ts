import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// create reducer
const reducers = combineReducers({
  counter,
})

// redux persist
const persistConfig = {
  key: 'redux-state',
  storage: storage,
  whitelist: ['counter'],
}
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
export const useDispatch: () => AppDispatch = useAppDispatch

export const persistor = persistStore(store)

export default store
