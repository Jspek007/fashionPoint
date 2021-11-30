import UserInfoForm from "../../components/common/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/common/MyAccount/ChangeEmailForm";
import ChangePasswordForm from "../../components/common/MyAccount/ChangePasswordForm";
import DeleteAccountForm from "../../components/common/MyAccount/DeleteAccountForm";

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