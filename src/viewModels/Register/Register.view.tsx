import { Alert, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { FC, useState } from "react"
import { AppInput } from "../../shared/components/AppInput"
import { Controller } from "react-hook-form"
import { AppInputController } from "../../shared/components/AppInputController"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {

    const [email,setEmail] =useState("");

    return(
        <View className="flex-1 justify-center">
            <AppInputController leftIcon="mail-outline" label="E-MAIL" control={control}  name="email"/>
            <AppInputController leftIcon="lock-closed-outline" label="SENHA" control={control}  name="password" rightIcon="eye-off-outline"/>
            <TouchableOpacity onPress={onSubmit}>"
                <Text>Register</Text>
            </TouchableOpacity> 
        </View>
    )
}