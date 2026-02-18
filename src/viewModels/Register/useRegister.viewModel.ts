import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRegisterMutation } from '../../shared/queries/auth/use-register.mutation'
import { RegisterFormData, registerScheme } from './register.scheme'
import { useUserStore } from '../../shared/store/user-store'
import { useImage } from '../../shared/hooks/useImage'
import { useState } from 'react'
import { CameraType } from 'expo-image-picker'
import { useUploadAvatarMutation } from '../../shared/queries/auth/use-upload-avatar.mutation'


export const useRegisterViewModel = () => {
  const { updateUser } = useUserStore()

  const [avatarUri, setAvatarUri] = useState<string | null>(null)
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front
  })


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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    },
  })

  const uploadAvatarMutation = useUploadAvatarMutation()

  const userRegisterMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri)
        updateUser({ avatarUrl: url })

      }

    },
  })
  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData


    await userRegisterMutation.mutateAsync(registerData)
  })

  return {
    userRegisterMutation,
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
    avatarUri
  }
}