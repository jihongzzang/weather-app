import AppProvider from './AppProvider';
import AppRoutes from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
