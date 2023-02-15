import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

/* 

  To modify the store and configure the default middleWares =>
  
  export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddelware({
    serializableCheck:false,
  })
  });
  
  also to add our own middleware along with the default ones,
  
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(myMiddleWares)

*/
