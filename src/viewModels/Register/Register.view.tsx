import { Alert, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { FC, useState } from "react"
import { AppInput } from "../../shared/components/AppInput"
import { Controller } from "react-hook-form"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>
> = ({
    onSubmit,
    control
}) => {

    const [email,setEmail] =useState("");

    return(
        <View className="flex-1 justify-center">
            <Controller control={control} name ="password" render={({
                field: {onChange, onBlur, value}
            }) => (
                <AppInput 
                    leftIcon="lock-closed-outline" 
                    label= "Senha"
                    rightIcon="eye-outline"
                    secureTextEntry={true}
                    value={value}
                />

            )}/>
            <TouchableOpacity onPress={onSubmit}>"
                <Text>Register</Text>
            </TouchableOpacity> 
        </View>
    )
}