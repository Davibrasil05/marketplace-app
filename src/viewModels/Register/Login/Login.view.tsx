import { Text, TouchableOpacity, View } from "react-native"
import { AuthFormHeader } from "../../../shared/components/AuthFormHeader"
import { AppInput } from "../../../shared/components/AppInput"
import { router } from "expo-router"
import { KeyboardContainer } from "../../../shared/components/KeyboardContainer/index."
import { FC } from "react"
import { useLoginViewModel } from "./useLogin.viewModel."
import { AppInputController } from "../../../shared/components/AppInputController"
import { AppButton } from "../../../shared/components/AppButton"

export const LoginView: FC<ReturnType<typeof useLoginViewModel>>= ({
    
    control,
}
) => {
    return (
        <KeyboardContainer>
            <View className="flex-1 justify-center items-center px-[40px]">
                <View className="flex-1 w-full items-center ">
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

              

                <AppButton 
                 className="mt-6"
                 rightIcon="arrow-forward" 
                 children="Login"
                 onPress={() => router.push('/home')} 
                />

                </View>
                <View className='flex-2 pb-16' >
                <Text className="text-base text-gray-300 mb-6">Já tem uma conta?</Text>
                 <AppButton 
                  variant='outlined'
                  rightIcon="arrow-forward" 
                  children="Cadastrar" 
                  onPress={() => router.push('/register')} 
                 />

                </View>

                
      
            </View>
        </KeyboardContainer>
    )
}