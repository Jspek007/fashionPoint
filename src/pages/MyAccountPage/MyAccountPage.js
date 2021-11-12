import React from 'react';
import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm";
import "./MyAccountPage.scss";
import AccountMenu from "../../components/Form/MyAccount/AccountMenu";

function MyAccountPage() {
    return (
        <section className="my-account-container">
            <AccountMenu />
            <section className="personal-information-container">
                <UserInfoForm/>
            </section>
        </section>
    );
}

export default MyAccountPage;