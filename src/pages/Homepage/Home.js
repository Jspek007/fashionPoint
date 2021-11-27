import React from "react";
import "./Home.scss";
import HomepageMainImage from "../../assets/images/contentImages/homepageMainImage.jpeg"
import FashionImage from "../../assets/images/contentImages/fashionContent.jpg";
import PriceImage from "../../assets/images/contentImages/contentImageDiscounts.jpeg";
import MemberExclusive from "../../assets/images/contentImages/memberExclusive.jpg";
import {Link} from "react-router-dom";
import {BrandSlider} from "../../components/common";
import CategoryBanner from "../../components/common/Content/CategoryBanner";
import {useAuth} from "../../contexts/AuthContext";
import {RedirectButton} from "../../components/Form/Buttons";
import UspBanner from "../../components/common/Content/UspBanner/UspBanner";
import FullWidthBanner from "../../components/common/Content/FullWidthBanner/FullWidthBanner";

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
                    <FullWidthBanner imageSrc={HomepageMainImage}
                                     callToAction={"Krijg toegang tot onze uitgebreide fashion outlet!"}
                                     paragraph={"Met kortingen tot wel 50%"}
                    >
                        <Link exact="true" to="/login">
                            <RedirectButton callToAction="Inloggen"/>
                        </Link>
                        <Link exact="true" to="/aanmelden">
                            <RedirectButton callToAction="Meld mij aan" signup/>
                        </Link>
                    </FullWidthBanner>

                        <section className="main-content-container">
                            <UspBanner
                                imageSrc={FashionImage}
                                textTitle={"Honderden designer merken"}
                                seoText={"Bij ons krijg je toegang tot honderden designer merken. Altijd jouw favoriete merk " +
                                "aanwezig. En dat op één en de zelfde locatie."}
                            />
                            <section className="main-content-container-flipped">
                                <UspBanner imageSrc={PriceImage}
                                           textTitle={"Onze prijzen..."}
                                           seoText={"Bij ons shop je eenvoudig afgeprijsde fashion. De kortingen lopen op tot wel " +
                                           "50%, waardoor wij voorraad een nieuw leven in blazen."}
                                           flipped
                                />
                            </section>
                            <section className="main-content-container">
                                <UspBanner imageSrc={MemberExclusive}
                                           textTitle={"Exclusief voor leden"}
                                           seoText={"Als FashionPoint lid geniet je naast zeer scherp geprijsde mode ook van een" +
                                           "snelle levering en eenvoudig retourproces. Daarnaast geven wij jou graag updates over " +
                                           "jou favoriete merken!"}
                                />
                            </section>
                        </section>
                </>
            )}
        </>
    );
}

export default Home;
