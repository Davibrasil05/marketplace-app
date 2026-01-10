import { Text, TouchableOpacity, View } from "react-native"
import { AuthFormHeader } from "../../../shared/components/AuthFormHeader"
import { AppInput } from "../../../shared/components/AppInput"
import { router } from "expo-router"

export const LoginView = () => {
    return (
        <View className="items-center justify-center flex-1">
            <AuthFormHeader 
            title="Acesse sua conta" 
            subTitle="Informe seu e-mail e senha para entrar"/>
            
            <AppInput/>

            <TouchableOpacity onPress={() => router.push('/register')}>
                <Text>
                    Registro
                </Text>
            </TouchableOpacity>
        </View>
    )
}