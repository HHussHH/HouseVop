import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Sessions from './components/sessions/Sessions';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Sessions />
    </div>
  );
}

export default App;
