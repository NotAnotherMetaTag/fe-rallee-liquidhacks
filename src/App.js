import logo from './logo.svg';
import Greeting from './components/Greeting/Greeting.jsx';
import PlayerCard from './components/PlayerCard';

function App() {
    const username = 'Riley';
    const bio = 'Riley really likes coldstone cake batter ice cream.';
    const game = 'League of Legends';
    const rank = 'Gold';
    const role = 'ADC';
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Example Header</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <PlayerCard
                    username={username}
                    bio={bio}
                    game={game}
                    rank={rank}
                    role={role}
                />
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
