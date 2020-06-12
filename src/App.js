import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter , Route} from 'react-router-dom'
import Header from './common/header'
import Detail from '../src/pages/detail'
import Home from '../src/pages/home'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div> 
    </Provider>
  );
}

export default App;
