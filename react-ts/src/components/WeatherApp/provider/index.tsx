import React, { createContext, useReducer } from 'react';

import { reducer } from '../reducer';
import { Action, State } from '../types';

type WeatherAppProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  renderType: 'none',
  data: null,
  searchValue: '',
};

export const WeatherAppContext = createContext<State>(initialState);
export const WeatherAppDispatchDispatchContext = createContext<
  React.Dispatch<Action>
>(() => null);

export default function WeatherAppProvider({
  children,
}: WeatherAppProviderProps) {
  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <WeatherAppContext.Provider value={data}>
      <WeatherAppDispatchDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherAppDispatchDispatchContext.Provider>
    </WeatherAppContext.Provider>
  );
}
