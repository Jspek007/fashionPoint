import "./App.scss";
import Home from "./pages/Homepage/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Customerservice from "./pages/CustomerService/Customerservice";
import AboutUs from "./pages/AboutUs/AboutUs";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import EmailSignUpPage from "./pages/SignupPage/EmailSignUpPage";
import {Footer, Header} from "./components/common";
import AuthContextProvider from "./contexts/AuthContext";
import MensCollection from "./pages/CollectionsPage/MensCollection/MensCollection";

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Switch exact path="/klantenservice">
                        <Customerservice/>
                    </Switch>
                    <Route exact path="/over-ons">
                        <AboutUs/>
                    </Route>
                    <Route exact path="/collectie">
                        <CollectionPage/>
                    </Route>

                    <Route exact path="/heren-collectie">
                        <MensCollection />
                    </Route>

                    <Route exact path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact path="/aanmelden">
                        <SignupPage/>
                    </Route>
                    <Route exact path="/email-register">
                        <EmailSignUpPage/>
                    </Route>

                    <Route path="/algemene-voorwaarden">
                        <TermsAndConditions/>
                    </Route>

                    <Route exact path="/privacy">
                        <PrivacyPage/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
