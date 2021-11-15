import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/Form/MyAccount/ChangeEmailForm";
import ChangePasswordForm from "../../components/Form/MyAccount/ChangePasswordForm";
import DeleteAccountForm from "../../components/Form/MyAccount/DeleteAccountForm";

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
    },
    {
        title: 'Verwijder mijn account',
        content: <DeleteAccountForm />
    }
]