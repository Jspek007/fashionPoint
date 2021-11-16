import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/Form/MyAccount/ChangeEmailForm";
import ChangePasswordForm from "../../components/Form/MyAccount/ChangePasswordForm";
import DeleteAccountForm from "../../components/Form/MyAccount/DeleteAccountForm";

export const accordionData = [
    {
        id: 1,
        title: 'Persoonlijke gegevens',
        content: <UserInfoForm />
    },
    {
        id: 2,
        title: 'Email address wijzigen',
        content: <ChangeEmailForm />
    },
    {
        id: 3,
        title: 'Wachtwoord wijzigen',
        content: <ChangePasswordForm />
    },
    {
        id: 4,
        title: 'Verwijder mijn account',
        content: <DeleteAccountForm />
    }
]