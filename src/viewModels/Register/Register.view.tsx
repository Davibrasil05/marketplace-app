import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { FC, useState } from "react"
import { AppInput } from "../../shared/components/AppInput"
import { Controller } from "react-hook-form"
import { AppInputController } from "../../shared/components/AppInputController"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { router } from "expo-router"
import { KeyboardContainer } from "../../shared/components/KeyboardContainer/index."

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {

    const [email,setEmail] =useState("");

    return(
        <KeyboardContainer>
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader 
                    title="Crie sua conta" 
                    subTitle="Informe seus dados pessoais e de acesso"
                />
                <AppInputController 
                    placeholder="Seu Nome"
                    leftIcon="person-outline" 
                    label="NOME" 
                    control={control}  
                    name="name"
                />
                <AppInputController 
                    placeholder="(00) 00000-0000"
                    leftIcon="call-outline"
                    label="TELEFONE" 
                    control={control}  
                    name="phone"
                />
                <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>
                <AppInputController 
                    placeholder="email@exemplo.com"
                    leftIcon="mail-outline" 
                    label="E-MAIL" 
                    control={control}  
                    name="email"
                />
                <AppInputController 
                    placeholder="Sua Senha"
                    leftIcon="lock-closed-outline" 
                    label="SENHA" 
                    control={control}  
                    name="password"
                    secureTextEntry
                />
                <AppInputController 
                    placeholder="Confirme sua Senha"
                    leftIcon="lock-closed-outline" 
                    label="CONFIRMAR SENHA" 
                    control={control}  
                    name="confirmPassword"
                    secureTextEntry
                />
                <TouchableOpacity onPress={onSubmit}>"
                    <Text>Register</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => router.push("/login")}>"
                    <Text>Login</Text>
                </TouchableOpacity> 
            </ScrollView>
        </KeyboardContainer>

    )
}