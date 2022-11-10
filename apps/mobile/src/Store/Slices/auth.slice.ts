import { createSlice } from "@reduxjs/toolkit";

// =====================================================================

const initialState = {
  accessToken: null,
  refreshToken: null,
  currentCompoundId: 1,
  user: {
    email: null,
    id: null,
    name: "user name",
    permission: "",
    address: "user address ",
    userType: "user type",
    info: null,
    updatedAt: null,
    createdAt: null,
  },
};

// =====================================================================

const reducers = {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  setAuthUser: (state: any, action: any) => ({ ...state, ...action.payload }),

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  setAccesToken: (state: any, action: any) => ({
    ...state,
    accessToken: action.payload,
  }),

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  setUser: (state: any, action: any) => ({
    ...state,
    user: { ...action.payload },
  }),

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  setCompountId: (state: any, action: any) => {
    state.currentCompoundId = action.payload;
  },
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  resetAuthUser: () => initialState,

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
};

// =====================================================================

const auhthSlice = createSlice({ name: "auth", initialState, reducers });

// =====================================================================

export const {
  setAuthUser,
  setAccesToken,
  setUser,
  resetAuthUser,
  setCompountId,
} = auhthSlice.actions;

// =====================================================================

export default auhthSlice;
