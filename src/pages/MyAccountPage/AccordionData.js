import UserInfoForm from "../../components/Form/Forms/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/Form/Forms/MyAccount/ChangeEmailForm";
import ChangePasswordForm from "../../components/Form/Forms/MyAccount/ChangePasswordForm";
import DeleteAccountForm from "../../components/Form/Forms/MyAccount/DeleteAccountForm";

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