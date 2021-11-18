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
import routes from "./routes/routes";
import Breadcrumbs from "./components/common/Breadcrumbs/Breadcrumbs";

const App = () => (
    <Router>
        <Switch>
            {routes.map(({path, Component}, key) => (
                <Route
                    exact
                    path={path}
                    key={key}
                    render={props => {
                        const crumbs = routes.filter(({path}) => props.match.path.includes(path))
                            .map(({path, ...rest}) => ({
                                path: Object.keys(props.match.params).length
                                    ? Object.keys(props.match.params).reduce(
                                        (path, param) => path.replace(
                                            `:${param}`, props.match.params[param]
                                        ), path
                                    )
                                    : path,
                                ...rest
                            }));
                        console.log(`generated crumbs for ${props.match.path}`);
                        crumbs.map(({name, path}) => console.log({name, path}));

                        return (
                            <AuthContextProvider>
                            <Header/>
                                <Breadcrumbs crumbs={crumbs} />
                                <Component {...props} />
                                <Footer />
                            </AuthContextProvider>
                        )
                    }}/>
            ))}
        </Switch>
    </Router>
);

export default App;