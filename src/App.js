import './App.css';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          Get a Project quote
        </h1>
        <p className="subtitle">
          Please fill the form below to receive a quote for your project. Feel <br/> free to add as much detail as needed.
        </p>
      </header>
      <Form/>
    </div>
  );
}

export default App;
