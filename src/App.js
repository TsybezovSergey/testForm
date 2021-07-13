import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { useAuthContext } from "./Context/Context";
import { Form } from "./Form/Form";
import { Main } from "./Main/Main/Main";

function App() {
  const { auth } = useAuthContext()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={!auth ? Form : Main}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
