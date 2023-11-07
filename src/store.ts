import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

export type PageState =
  | { loginState: false; actionState: "login" | "signin" | "searchPW" }
  | { loginState: true; actionState: "home" | "homePostDetail" };

type Action =
  | { type: "login" | "home" }
  | { type: "signin" }
  | { type: "searchPW" }
  | { type: "logout" }
  | { type: "homePostDetail" };

let pageState: PageState = { loginState: false, actionState: "login" };

const pageStateSlice = createSlice({
  name: "pageState",
  initialState: pageState,
  reducers: {
    login: (state: PageState) => {
      state.loginState = true;
      state.actionState = "home";
    },
    signin: (state: PageState) => {
      state.actionState = "signin";
    },
    search: (state: PageState) => {
      state.actionState = "searchPW";
    },
    logout: (state: PageState) => {
      state.loginState = false;
      state.actionState = "login";
    },
    homePostDetail: (state: PageState) => {
      state.loginState = true;
      state.actionState = "homePostDetail";
    },
    home: (state: PageState) => {
      state.loginState = true;
      state.actionState = "home";
    },
  },
});

export const { login, signin, search, logout, homePostDetail, home } =
  pageStateSlice.actions;
export const pageStateAction = pageStateSlice.reducer;

const store = configureStore({
  reducer: {
    pageState: pageStateAction,
  },
});

export default store;

export const usePageStateDispatch = () => useDispatch<typeof store.dispatch>();
export const usePageStateSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
