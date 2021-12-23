import './App.css';
import Portfolio from './Components/Portfolio';
import Stocks from './Components/Stocks';
import Input from "./Components/Input"
import Home from './Pages/Home';

function App() {
  return (
    <div className="app">
      <h1> Portfolio Performance</h1>
      {/* <Portfolio/>
      <Input/>
      <Stocks/> */}
      <Home/>
    </div>
  );
}

export default App;
