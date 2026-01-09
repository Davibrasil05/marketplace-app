import { Redirect } from "expo-router"
export default function App(){
    
    const userData = null

    if(userData){
        return <Redirect href={"/(private)/home"}/> //Redireciona para a tela de home se estiver logado
    }
    return(
        <Redirect href={"/login"}/> //Redireciona logo para a tela de login
    )
}