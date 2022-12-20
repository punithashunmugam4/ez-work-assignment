import './App.css';
import Clients from './components/Clients';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Clients/>
      <Main/>
    </div>
  );
}

export default App;
