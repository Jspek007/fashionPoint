import React, {useState} from 'react';
import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm";
import "./MyAccountPage.scss";
import AccountMenu from "../../components/Form/MyAccount/AccountMenu";
import {accordionData} from "./AccordionData";
import Accordion from "../../components/Form/MyAccount/Accordion/Accordion"

function MyAccountPage() {
    return (
        <section className="my-account-container">
            <AccountMenu/>
            <section className="accordion-container">
                <section className="my-account-accordion">
                    {accordionData.map(({title, content}) => (
                        <Accordion title={title} content={content}/>
                    ))}
                </section>
            </section>
        </section>
    );
}

export default MyAccountPage;