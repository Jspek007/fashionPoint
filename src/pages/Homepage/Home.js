import React from "react";
import "./Home.scss";
import HomepageImage from "../../assets/images/mainImage.jpg";
import FashionImage from "../../assets/images/contentImages/fashionContent.jpg";
import PriceImage from "../../assets/images/contentImages/contentImageDiscounts.jpeg";
import MemberExclusive from "../../assets/images/contentImages/memberExclusive.jpg";
import {Link} from "react-router-dom";
import {BrandSlider} from "../../components/common";
import CategoryBanner from "../../components/common/Content/CategoryBanner";
import {useAuth} from "../../contexts/AuthContext";
import {RedirectButton} from "../../components/Form/Buttons";
import UspBanner from "../../components/common/Content/UspBanner/UspBanner";

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
                                Met kortingen tot wel 50%
                            </section>

                            <section className="homepage-action-buttons">
                                <Link exact="true" to="/login">
                                    <RedirectButton callToAction="Inloggen"/>
                                </Link>
                                <Link exact="true" to="/aanmelden">
                                    <RedirectButton callToAction="Aanmelden"/>
                                </Link>
                            </section>
                        </section>
                    </section>

                    <UspBanner
                        imageSrc={FashionImage}
                        textTitle={"Honderden designer merken"}
                        seoText={"Bij ons krijg je toegang tot honderden designer merken. Altijd jouw favoriete merk " +
                        "aanwezig. En dat op één en de zelfde locatie."}
                    />
                    <UspBanner imageSrc={PriceImage}
                               textTitle={"Onze prijzen..."}
                               seoText={"Bij ons shop je eenvoudig afgeprijsde fashion. De kortingen lopen op tot wel " +
                               "50%, waardoor wij voorraad een nieuw leven in blazen."}
                               flipped
                    />
                    <UspBanner imageSrc={MemberExclusive}
                               textTitle={"Exclusief voor leden"}
                               seoText={"Als FashionPoint lid geniet je naast zeer scherp geprijsde mode ook van een" +
                               "snelle levering en eenvoudig retourproces. Daarnaast geven wij jou graag updates over " +
                               "jou favoriete merken!"}
                    />
                </>
            )}
        </>
    );
}

export default Home;
