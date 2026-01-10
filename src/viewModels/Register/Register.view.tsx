import { Alert, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { FC, useState } from "react"
import { AppInput } from "../../shared/components/AppInput"
import { Controller } from "react-hook-form"
import { AppInputController } from "../../shared/components/AppInputController"
import { AuthFormHeader } from "../../shared/components/AuthFormHeader"
import { router } from "expo-router"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {

    const [email,setEmail] =useState("");

    return(
        <View className="flex-1 justify-center">
            <AuthFormHeader title="Crie sua conta" subTitle="Informe seus dados pessoais e de acesso"/>
            <AppInputController leftIcon="mail-outline" label="E-MAIL" control={control}  name="email"/>
            <AppInputController leftIcon="lock-closed-outline" label="SENHA" control={control}  name="password" rightIcon="eye-off-outline"/>
            <TouchableOpacity onPress={onSubmit}>"
                <Text>Register</Text>
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => router.push("/login")}>"
                <Text>Login</Text>
            </TouchableOpacity> 
        </View>
    )
}