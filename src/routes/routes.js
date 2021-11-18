import Home from "../pages/Homepage/Home";
import CollectionPage from "../pages/CollectionsPage/CollectionPage/CollectionPage";
import Customerservice from "../pages/CustomerService/Customerservice";
import AboutUs from "../pages/AboutUs/AboutUs";
import MensCollection from "../pages/CollectionsPage/MensCollection/MensCollection";
import WomensCollection from "../pages/CollectionsPage/WomensCollection/WomensCollection";
import ProductDetail from "../components/common/Catalog/ProductDetail";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import EmailSignUpPage from "../pages/SignupPage/EmailSignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import SendSuccessfullyPage from "../pages/SuccessPage/SendSuccessfullyPage";
import MyAccountPage from "../pages/MyAccountPage/MyAccountPage";
import Wishlist from "../pages/Wishlist/Wishlist";

export default [
  { path: "/", name: "Home", Component: Home },
  {
    path: "/klantenservice",
    name: "Klantenservice",
    Component: Customerservice,
  },
  { path: "/over-ons", name: "Over ons", Component: AboutUs },
  { path: "/collectie", name: "Collectie", Component: CollectionPage },
  {
    path: "/collectie/heren",
    name: "Heren",
    Component: MensCollection,
  },
  {
    path: "/collectie/dames",
    name: "Dames",
    Component: WomensCollection,
  },
  {
    path: `/collectie/:categoryName/:productId`,
    name: "Huidig product",
    Component: ProductDetail,
  },
  { path: "/login", name: "Login", Component: LoginPage },
  { path: "/aanmelden", name: "Aanmelden", Component: SignupPage },
  { path: "/email-register", name: "Registreren", Component: EmailSignUpPage },
  {
    path: "/wachtwoord-vergeten",
    name: "Wachtwoord vergeten",
    Component: ForgotPasswordPage,
  },
  {
    path: "/algemene-voorwaarden",
    name: "Algemene Voorwaarden",
    Component: TermsAndConditions,
  },
  { path: "/privacy", name: "Privacy", Component: PrivacyPage },
  {
    path: "/email-is-verzonden",
    name: "Email is verstuurd",
    Component: SendSuccessfullyPage,
  },
  { path: "/mijn-account", name: "Mijn account", Component: MyAccountPage },
  { path: "/wishlist", name: "Wishlist", Component: Wishlist },
];
