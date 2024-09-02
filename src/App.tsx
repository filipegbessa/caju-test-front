import { Header } from './components/Header';
import AppRouter from './router';

function App() {
  return (
    <main>
      <Header />
      <div>
        <AppRouter />
      </div>
    </main>
  );
}

export default App;
