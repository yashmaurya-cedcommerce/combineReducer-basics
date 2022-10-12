import { Provider } from 'react-redux';
import './App.css';
import Home from './components/CakeComponent';
import ChocolateComponent from './components/ChocolateComponent';
import IcecreamComponent from './components/IcecreamComponent';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <ChocolateComponent />
        <IcecreamComponent />
      </div>
    </Provider>
  );
}

export default App;
