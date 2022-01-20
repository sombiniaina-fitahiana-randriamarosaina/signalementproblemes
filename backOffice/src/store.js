import { configureStore } from '@reduxjs/toolkit'

import signalementReducer from './slices/signalement';
import regionReducer from './slices/region';
const reducer = {
 signalement :signalementReducer,
 region:regionReducer,
}
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export default store;