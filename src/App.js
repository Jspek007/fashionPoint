import "./App.css";
import Home from "./pages/Homepage/Home";
import { Usp, Header } from "./components/common";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customerservice from "./pages/CustomerService/Customerservice";
import AboutUs from "./pages/AboutUs/AboutUs";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/klantenservice">
          <Customerservice />
        </Route>

        <Route exact path="/over-ons">
          <AboutUs />
        </Route>

        <Route exact path="/collectie">
          <CollectionPage />
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/aanmelden">
          <SignupPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
