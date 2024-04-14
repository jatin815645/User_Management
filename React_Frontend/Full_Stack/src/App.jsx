import Navbar from "./layout/Navbar"
import Home from "./pages/Home"
import AddUser from "./users/AddUser"
import {BrowserRouter as Router,Routes as Switch ,Route} from "react-router-dom"
import EditUser from "./users/EditUser"

function App() {
  return<>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/adduser" element={<AddUser/>} />
        <Route exact path="/edituser/:id" element={<EditUser/>} />
      </Switch>
    </Router>
  </>
}

export default App
