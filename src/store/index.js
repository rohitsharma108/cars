import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  searchTermChange,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store };
export {
  carsReducer,
  addCar,
  removeCar,
  searchTermChange,
  formReducer,
  changeName,
  changeCost,
};
