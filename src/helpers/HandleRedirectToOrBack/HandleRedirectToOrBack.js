export const HandleRedirectToOrBack = ({ history, location }) => {
    history.replace(location.state?.from ?? '/');
};

