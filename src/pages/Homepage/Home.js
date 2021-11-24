import React, {Fragment} from "react";
import "./Home.scss";
import HomepageImage from "../../assets/images/mainImage.jpg";
import {Link} from "react-router-dom";
import {BrandSlider} from "../../components/common";
import CategoryBanner from "../../components/common/CategoryBanner";
import {useAuth} from "../../contexts/AuthContext";
import {UserControlButton} from "../../components/Form/Buttons";

function Home() {

    const auth = useAuth();

    return (
        <>
            {auth.currentUser && (
                <>
                    <CategoryBanner/>
                    <BrandSlider/>
                </>
            )}

            {!auth.currentUser && (
                <>
                    <Fragment>
                        <section className="wave-container">
                            <section className="wave">
                                <svg
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                        className="shape-fill"
                                    />
                                </svg>
                            </section>

                            <section className="homepage-media">
                                <img
                                    src={HomepageImage}
                                    alt="Your fashion outlet!"
                                    className="main-area-content"
                                    draggable="false"
                                />
                            </section>

                            <section className="homepage-actions">
                                <section className="action-text-main">
                                    Krijg toegang tot onze uitgebreide fashion outlets
                                </section>

                                <section className="action-text-secondairy">
                                    Met kortingen tot wel 70%
                                </section>

                                <section className="homepage-action-buttons">
                                    <Link exact="true" to="/login">
                                        <UserControlButton callToAction="Inloggen"/>
                                    </Link>
                                    <Link exact="true" to="/aanmelden">
                                        <UserControlButton callToAction="Aanmelden"/>
                                    </Link>
                                </section>
                            </section>
                        </section>
                    </Fragment>
                </>
            )}
        </>

    );
}

export default Home;
