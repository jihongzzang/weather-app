export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type ErrorResponse = {
  cod: string;
  message: string;
};

export type RenderType = 'none' | 'card' | 'notFound';

export interface State {
  renderType: RenderType;
  data: Nullable<WeatherData | ErrorResponse>;
  searchValue: string;
}

export type Action =
  | { type: 'render_type'; payload: RenderType }
  | { type: 'set_input_value'; payload: string }
  | { type: 'fetch_data'; payload: WeatherData | ErrorResponse };
