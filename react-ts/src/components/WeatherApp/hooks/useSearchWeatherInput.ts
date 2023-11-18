import useWeaherStore from './useWeaherStore';
import useWeatherStoreDispatch from './useWeatherStoreDispatch';

export default function useSearchWeatherInput() {
  const { renderType } = useWeaherStore();
  const dispatch = useWeatherStoreDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch?.({ type: 'set_input_value', payload: value });

    if (renderType === 'notFound') {
      dispatch({ type: 'render_type', payload: 'none' });
    }
  };

  return { handleSearch };
}
