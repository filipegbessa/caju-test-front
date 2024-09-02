import { Header } from './components/Header';
import AppRouter from './router';

function App() {
  return (
    <main>
      <Header className="top-0 left-0 right-0 w-full z-10 sticky">
        <div className="container mx-auto">
          <h1>Caju Front Teste</h1>
        </div>
      </Header>
      <div>
        <AppRouter />
      </div>
    </main>
  );
}

export default App;
