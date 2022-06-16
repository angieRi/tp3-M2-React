import './App.css';
import {
    BrowserRouter as Router
} from "react-router-dom"
import Menu from "./components/Menu";
import Main from "./Routes/Main"

function App() {
  return (
      <Router>
          <Menu />
          <Main />
      </Router>
  );
}

export default App;
