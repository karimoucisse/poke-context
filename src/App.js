import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
import "./App.css"
function App() {
  return (
     <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="*" component={NotFound} />
      </Switch>
     </BrowserRouter>
  )
}

export default App;
