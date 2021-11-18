import "./App.scss";
import Home from "./pages/Homepage/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Customerservice from "./pages/CustomerService/Customerservice";
import AboutUs from "./pages/AboutUs/AboutUs";
import CollectionPage from "./pages/CollectionsPage/CollectionPage/CollectionPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PrivacyPage from "./pages/PrivacyPage/PrivacyPage";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import EmailSignUpPage from "./pages/SignupPage/EmailSignUpPage";
import {Footer, Header} from "./components/common";
import AuthContextProvider from "./contexts/AuthContext";
import MensCollection from "./pages/CollectionsPage/MensCollection/MensCollection";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import SendSuccessfullyPage from "./pages/SuccessPage/SendSuccessfullyPage";
import WomensCollection from "./pages/CollectionsPage/WomensCollection/WomensCollection";
import ProductDetail from "./components/common/Catalog/ProductDetail";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import Wishlist from "./pages/Wishlist/Wishlist";

const App = () => {
    return (
        <AuthContextProvider>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/klantenservice" component={Customerservice} />
                    <Route exact path="/over-ons" component={AboutUs} />
                    <Route exact path="/collectie" component={CollectionPage} />
                    <Route exact path="/heren-collectie" component={MensCollection} />
                    <Route exact path="/dames-collectie" component={WomensCollection} />
                    <Route path="/product/:productId" component={ProductDetail} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/aanmelden" component={SignupPage} />
                    <Route exact path="/email-register" component={EmailSignUpPage} />
                    <Route exact path="/wachtwoord-vergeten" component={ForgotPasswordPage} />
                    <Route path="/algemene-voorwaarden" component={TermsAndConditions} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/email-is-verzonden" component={SendSuccessfullyPage} />
                    <Route exact path="/mijn-account" component={MyAccountPage} />
                    <Route exact path="/wishlist" component={Wishlist} />
                </Switch>
                <Footer/>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
