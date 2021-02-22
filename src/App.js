import './App.css';
import Header from './containers/Header/Header';
import Home from './containers/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
  library.add(fab);
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
