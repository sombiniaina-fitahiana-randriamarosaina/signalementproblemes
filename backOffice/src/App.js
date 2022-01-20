import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotAffectedList from "./pages/notAffectedList/NotAffectedList";
import Affectation from "./pages/affectation/Affectation";
import NewUser from "./pages/newUser/NewUser";
import AffectedList from "./pages/affectedList/AffectedList";
import UpdateStatus from "./pages/updateStatus/UpdateStatus";
import All from "./pages/All/All";
import Login from "./pages/login/Login";
import { useState,useEffect } from "react";
import Region from "./pages/Region/Region";
import Signalement from "./pages/Signalement/Signalement";
import Detail from "./pages/Detail/Detail";


function App(props) {
  const[connected,setConnected]=useState(true);

  return (
    <>
    {
    connected == false ?
     <Router>
      <Route>
        <Login/>
      </Route>
    </Router>:
    <Router>
  
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/SIG/notaffected">
            <NotAffectedList />
          </Route>
          <Route path="/SIG/notaffected">
            <Detail />
          </Route>
          <Route path="/gestion/Region">
            <Region />
          </Route>
          <Route path="/gestion/Signalement">
            <Signalement />
          </Route>
          <Route path="/SIG/affected">
            <AffectedList />
          </Route>
          <Route path="/SIG/all">
            <All />
          </Route>
          <Route path="/updateStatus/">
            <UpdateStatus/>
          </Route>
          <Route path="/affectation/" >
            <Affectation/>
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  }
  </>
  );
}

export default App;
