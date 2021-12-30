import { Provider, connect } from 'react-redux';
import { store } from "./config/store";
import './App.css';
import CounterActions from "./actions/counter";
import CounterComponent from './components/CounterComponent';

const mapStateToProps = ({counter}) => ({
  counter,
});

const mapDispatchToProps = () => ({
  ...CounterActions,
});

// Se pasa el componente y los diferentes Maps
const ConnectedCounterComponent = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
       <ConnectedCounterComponent />
      </div>
    </Provider>
  );
}

export default App;
