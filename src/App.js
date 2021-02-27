import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sawasdee TOC Itim
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href="https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg"
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
