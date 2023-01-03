import { atom, selector } from "recoil";

export const counter = atom({
    key: "counter",
    default: 0
})


export const countState = selector({
    key: 'countState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const counting = get(counter);
  
      return counting;
    },
});