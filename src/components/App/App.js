import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import Panda from '../Panda/Panda';

/*
HTML:
<div class="unicorn-input" />

JSX:
<div className="unicorn-input" />
*/

function App() {
  return (
    // This is JSX: JavaScript eXtension 
    // A tool called Babel transpiles this code 
    // and turns it into HTML
    <div className="App">

      {/* Header is a function that returns JSX */}
      {/* Here we are rendering the Header component */}
      {/* In reality, we are calling the Header function! */}
      {/* Header() */}
      <Header />
      
      <Panda 
        disposition="friendly" 
        name="George" 
        imageUrl="my-panda-url"
      /> 
      {/*

      This is equivalent to: 
      Panda({ 
        disposition: 'friendly',
        name: 'George'
      });

      */}
      <Panda disposition="sleepy" name="Sleepy" imageUrl="my-panda-url"/> {/* Panda() */}
      <Panda disposition="dopey" name="Dopey" imageUrl="my-panda-url"/> {/* Panda() */}
      <Panda disposition="excited" name="Bob" imageUrl="my-panda-url" /> {/* Panda() */}
      <Panda disposition="tired" name="Salem" imageUrl="my-panda-url"/> {/* Panda() */}


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world! 🌊</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
