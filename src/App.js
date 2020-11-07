import logo from './logo.svg';
import Greeting from './components/Greeting/Greeting.jsx';
import PlayerCard from './components/PlayerCard';

function App() {
    const name = 'Riley';
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Example Header</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <PlayerCard />
                <Greeting name={name} />
                <Greeting />
                <Greeting />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React Hello World
                </a>
            </header>
        </div>
    );
}

export default App;
