import "./App.css";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customerservice from "./pages/CustomerService/Customerservice";
import AboutUs from "./pages/AboutUs/AboutUs";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Switch exact path="/klantenservice">
          <Customerservice />
        </Switch>

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

        <Route exact path="/algemene-voorwaarden">
          <TermsAndConditions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
