import logo from './logo.svg';
import './App.css';
import Authentication from './components/authentication/Authentication';
import Markdown from './components/markdown/Markdown';

// function login() {
//   let loginInput = ;
//   let welcomeMessage = ;
//   authentiction(loginInput)(welcomeMessage);
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Authentication />
        <Markdown />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;