export let API: string;

if (process.env.NODE_ENV === 'development') {
  API = process.env.REACT_APP_BASE_URL!;
} else if (process.env.NODE_ENV === 'production') {
  API = process.env.REACT_APP_BASE_URL!;
}