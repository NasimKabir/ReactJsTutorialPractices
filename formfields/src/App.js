import React from 'react';
import './App.css';
import FormFields from './components/FormFields';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import WelcomeComponent from './components/WelcomeComponent';
import ContactComponent from './components/ContactComponent';
import BlockComponent from './components/BlockComponent';
import ErrorComponent from './components/ErrorComponent';
import WritePost from './components/WritePost';

function App() {
  return (
    <div className="App">
      <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={WelcomeComponent} />
              <Route path="/welcome" component={WelcomeComponent} />
              <Route path="/contact" component={ContactComponent} />
              <Route path="/block" component={BlockComponent} />
              <Route path="/add" component={WritePost} />

              <Route component={ErrorComponent} />
            </Switch>
          </>

        </Router>
    </div>
  );
}

export default App;
