import React from 'react';
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
    if (crumbs.length <= 1) {
        return null;
    }

    return (
        <section>
            {crumbs.map(({ name, path}, key) =>
                key + 1 === crumbs.length ? (
                    <span key={key}>
                        {name}
                    </span>
                ) : (
                    <Link key={key} to={path}>
                        {name}
                    </Link>
                )
            )}
        </section>
    );
};

export default Breadcrumbs;