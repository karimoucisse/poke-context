import {BrowserRouter ,Switch,Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Nav from "./components/Nav"
// import { useContext } from "react"
import { UserContextProvider } from "./Contexts/User"
import "./App.css"
function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="*" component={NotFound} />
        </Switch>
     </BrowserRouter>
    </UserContextProvider>
  )
}

export default App;
