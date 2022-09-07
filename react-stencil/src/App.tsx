import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <uc-stock-price></uc-stock-price>
        <uc-stock-finder></uc-stock-finder>
      </div>
    );
  }
}

export default App;
