import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { RegisterFormData, registerScheme } from './register.scheme'
import { useUserStore } from '../../shared/store/user-store'
import { useImage } from '../../shared/hooks/useImage'


export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const {setSession, user} = useUserStore()
  const {handleSelectImage} = useImage()


  const handleSelectAvatar = async () => {
    await handleSelectImage()
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: 'teste65',
      email: 'teste10000@gmail.com',
      password: '123123123',
      confirmPassword: '123123123',
      phone: '11111111111',
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    console.log(userData)
    const { confirmPassword, ...registerData } = userData

    const mutationResponse = await userRegisterMutation.mutateAsync(registerData)
  
  setSession ({
    refreshToken: mutationResponse.refreshToken,
    token: mutationResponse.token,
    user: mutationResponse.user
  })
})

console.log(user)
return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
  }
}