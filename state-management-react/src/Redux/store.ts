import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';

export const store = configureStore({
    reducer: {
        counter : counterReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>



  
//   // Can still subscribe to the store
//   store.subscribe(() => console.log(store.getState()))
  
//   // Still pass action objects to `dispatch`, but they're created for us
//   store.dispatch(incremented())
//   // {value: 1}
//   store.dispatch(incremented())
//   // {value: 2}
//   store.dispatch(decremented())
//   // {value: 1}
