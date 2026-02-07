import { ActivityIndicator, Text, Touchable, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ButtonVariants, buttonVariants } from "./button.variants"
import { FC } from "react"
import {Ionicons} from '@expo/vector-icons'
import { colors } from "../../../styles/colors"

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants{
    children: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
}

export const AppButton: FC<AppButtonProps> = ({
    leftIcon,
    rightIcon,
    children,
    variant = 'field',
    isDisabled,
    isLoading,
    hasIcon,
    className,
    ...rest
}) => {

    const contentColor = variant === 'field' ? colors.white : colors['purple-base'] 
    const styles = buttonVariants({
        hasIcon: !!leftIcon || !!rightIcon,
        isDisabled,
        isLoading,
        variant

    })

    const renderContent = () => {
        if(isLoading) {
            return (
                <ActivityIndicator size={"small"}
                 color= {contentColor}
                />

            )
        }
        return (
            <>
            {leftIcon && (
                <Ionicons name ={leftIcon} size={20} color={contentColor} />
                )}
            <Text className={styles.text()}>{children}</Text>
            {rightIcon && (
                <Ionicons name ={rightIcon} color={contentColor} size={20}/>
                )}
            </>

        )
    }
    return(
     <TouchableOpacity className={styles.base({ className})} {...rest}>
      {renderContent()}
     </TouchableOpacity>
    )
}