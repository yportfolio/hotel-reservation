import React from "react";
import "./App.css";

import { RoomProvider } from "./helpers/context";

import Home from "./pages/Home";
import RoomDetail from "./pages/RoomDetail";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={RoomDetail} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </RoomProvider>
  );
}

export default App;
