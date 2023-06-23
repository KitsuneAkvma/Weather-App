import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { updateGeoLocation } from './operations';
import { TRootState } from '../../store';

import {
  IGeoLocationData,
  ILoginForm,
  IRegisterForm,
  ISessionSettings,
  IUser,
} from './types';

interface IInitialState {
  isLoading: boolean;
  error: Error | undefined;
  loginForm: ILoginForm | undefined;
  registerForm: IRegisterForm | undefined;
  user: IUser | undefined;
  isAuth: boolean;
  token: string;
  geoLocation: IGeoLocationData | undefined;
  sessionSettings: ISessionSettings;
  savedLocations: Array<string>;
}

const initialState: IInitialState = {
  isLoading: false,
  error: undefined,
  loginForm: undefined,
  registerForm: undefined,
  user: undefined,
  isAuth: false,
  token: '',
  geoLocation: undefined,
  sessionSettings: { tempUnit: 'C', speedUnit: 'km/h', theme: 'default' },
  savedLocations: [],
};
const handlePending = (state: TRootState) => {
  state.isLoading = true;
};
const handleRejected = (state: TRootState, action: PayloadAction<never>) => {
  state.isLoading = true;
  state.error = action.payload;
};

const SessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    clearLoginForm: state => {
      state.loginForm = initialState.loginForm;
    },
    updateRegisterForm: (state, action) => {
      state.registerForm = action.payload;
    },
    clearRegisterForm: state => {
      state.registerForm = initialState.registerForm;
    },
    updateIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    updateTempUnit: (state, action) => {
      state.sessionSettings.tempUnit = action.payload;
    },
    updateTheme: (state, action) => {
      state.sessionSettings.theme = action.payload;
    },
    addLocation: (state, action) => {
      state.savedLocations = [...state.savedLocations, action.payload];
    },
    removeLocation: (state, action) => {
      state.savedLocations = state.savedLocations.filter(
        item => item != action.payload
      );
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(updateGeoLocation.pending, handlePending)
      .addCase(updateGeoLocation.rejected, handleRejected)
      .addCase(
        updateGeoLocation.fulfilled,
        (state: IInitialState, action: PayloadAction<IGeoLocationData>) => {
          state.isLoading = false;
          state.geoLocation = action.payload;
        }
      );
  },
});

export const {
  updateLoginForm,
  clearLoginForm,
  updateRegisterForm,
  clearRegisterForm,
  updateTempUnit,
  updateTheme,
  addLocation,
  removeLocation,
} = SessionSlice.actions;

export const SessionReducer = SessionSlice.reducer;
