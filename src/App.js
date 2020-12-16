import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './component/Home';
import './App.css';

function App(props) {
  const {store, history}= props;
  return (
        <Provider store = {store} >
          <Router history={history}>
          <div className="container p-4">
              <Route exact path = '/' component={Home}/>
              </div>
          </Router>
          </Provider>

    
  );
}

export default App;
