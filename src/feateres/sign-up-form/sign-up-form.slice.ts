import { createSlice } from '@reduxjs/toolkit';

type State = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
  isFormSubmited: string;
};

const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
    isFormSubmited: '',
  } as State,
  reducers: {
    setName(state, action: { payload: State['name'] }) {
      state.name = action.payload;
    },
  },
});

export const {
  actions: { setName },
  reducer: signUpFormSliceReducer,
} = signUpFormSlice;
