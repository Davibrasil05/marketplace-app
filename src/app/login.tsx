import { LoginView } from "../viewModels/Register/Login/Login.view"
import { useLoginViewModel } from "../viewModels/Register/Login/useLogin.viewModel."

export default function Login(){

    const props = useLoginViewModel()
    return(
        <LoginView {...props}/>
    )
}