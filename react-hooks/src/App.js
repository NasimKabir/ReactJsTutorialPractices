import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './components/ClassBasedComponent';
import UseEstateComponent from './components/UseEstateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassBasedComponent /> */}
        <UseEstateComponent />
      </header>
    </div>
  );
}

export default App;
