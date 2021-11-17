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
                        <MensCollection/>
                    </Route>

                    <Route exact path="/dames-collectie">
                        <WomensCollection/>
                    </Route>

                    <Route path="/product/:productId">
                        <ProductDetail/>
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

                    <Route exact path="/wachtwoord-vergeten">
                        <ForgotPasswordPage/>
                    </Route>

                    <Route path="/algemene-voorwaarden">
                        <TermsAndConditions/>
                    </Route>

                    <Route exact path="/privacy">
                        <PrivacyPage/>
                    </Route>

                    <Route exact path="/email-is-verzonden">
                        <SendSuccessfullyPage/>
                    </Route>

                    <Route exact path="/mijn-account">
                        <MyAccountPage />
                    </Route>

                    <Route exact path="/wishlist">
                        <Wishlist />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </AuthContextProvider>
    );
}

export default App;
