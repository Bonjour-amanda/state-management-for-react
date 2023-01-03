/* eslint-disable camelcase */
import create from 'zustand';

type TStore = {
  count: number;
  setCount: (val:any) => void;

};

const defaultState = {
  count: 0,
};

const useStore = create<TStore>((set): TStore => ({
  ...defaultState,
  setCount: (val) => set((state) => ({ count: val })),
}));

export default useStore;
