import { Text, TouchableOpacity, View } from "react-native"
import { AuthFormHeader } from "../../../shared/components/AuthFormHeader"
import { AppInput } from "../../../shared/components/AppInput"
import { router } from "expo-router"
import { KeyboardContainer } from "../../../shared/components/KeyboardContainer/index."
import { FC } from "react"
import { useLoginViewModel } from "./useLogin.viewModel."
import { AppInputController } from "../../../shared/components/AppInputController"

export const LoginView: FC<ReturnType<typeof useLoginViewModel>>= ({
    
    control,
}
) => {
    return (
        <KeyboardContainer>
            <View className="flex-1 justify-center items-center px-[40px]">
                <AuthFormHeader 
                title="Acesse sua conta" 
                subTitle="Informe seu e-mail e senha para entrar"/>
                
                <AppInputController 
                    placeholder="email@exemplo.com.br"
                    label="E-MAIL"
                    control={control} 
                    name="email" 
                    leftIcon="mail-outline"
                />
                <AppInputController 
                    label="SENHA"
                    control={control} 
                    name="password" 
                    leftIcon="lock-closed-outline"  
                    placeholder="Sua senha"
                    secureTextEntry
                />

                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text>
                        Registro
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardContainer>
    )
}