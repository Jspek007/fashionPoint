import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/Form/MyAccount/ChangeEmailForm";
import ChangePasswordForm from "../../components/Form/MyAccount/ChangePasswordForm";

export const accordionData = [
    {
        title: 'Persoonlijke gegevens',
        content: <UserInfoForm />
    },
    {
        title: 'Email address wijzigen',
        content: <ChangeEmailForm />
    },
    {
        title: 'Wachtwoord wijzigen',
        content: <ChangePasswordForm />
    }
]