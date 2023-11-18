import { Action, State } from '../types';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'render_type':
      return {
        ...state,
        renderType: action.payload,
      };
    case 'set_input_value':
      return {
        ...state,
        searchValue: action.payload,
      };
    case 'fetch_data':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
