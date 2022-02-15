import Home from './views/Home/Home';
import './App.css';
import { GlobalStyle } from './GlobalStyles';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Home/>
    </Fragment>
     
  );
}

export default App;
