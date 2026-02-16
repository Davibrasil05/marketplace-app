import { Redirect } from "expo-router"
import { useUserStore } from "../shared/store/user-store"
export default function App() {

    const { user, token } = useUserStore()

    if (user && token) {
        return <Redirect href="/(private)/home" /> //Redireciona para a tela de home se estiver logado
    }
    return (
        <Redirect href="/(public)/login" /> //Redireciona logo para a tela de login
    )
}