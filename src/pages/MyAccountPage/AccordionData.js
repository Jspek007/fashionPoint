import UserInfoForm from "../../components/Form/MyAccount/UserInfoForm/UserInfoForm";
import ChangeEmailForm from "../../components/Form/MyAccount/ChangeEmailForm";

export const accordionData = [
    {
        title: 'Persoonlijke gegevens',
        content: <UserInfoForm />
    },
    {
        title: 'Email address wijzigen',
        content: <ChangeEmailForm />
    }
]