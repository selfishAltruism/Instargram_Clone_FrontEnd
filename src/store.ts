import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

export type PageState =
  | { loginState: false; actionState: "login" | "signin" | "searchPW" }
  | { loginState: true; actionState: "home" | "homePostDetail" };

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

export type UserState = {
  id: string;
  name: string;
  islogin: boolean;
};

let userState: UserState = {
  id: "",
  name: "",
  islogin: false,
};

const userStateSlice = createSlice({
  name: "userState",
  initialState: userState,
  reducers: {
    userlogin: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.islogin = true;
    },
    userlogout: (state, action) => {
      state.id = "";
      state.name = "";
      state.islogin = false;
    },
  },
});

export const { userlogin, userlogout } = userStateSlice.actions;

const store = configureStore({
  reducer: {
    pageState: pageStateAction,
    userState: userStateSlice.reducer,
  },
});

export default store;

export const useStateDispatch = () => useDispatch<typeof store.dispatch>();
export const useStateSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
