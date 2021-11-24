import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Footer, Header} from "./components/common";
import AuthContextProvider from "./contexts/AuthContext";
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