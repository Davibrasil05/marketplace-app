import { ImagePickerOptions } from "expo-image-picker"
import { useAppModal } from "./useAppModal"
import { useCamera } from "./useCamera"
import { useGallery } from "./useGallery"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useModalStore } from "../store/modal-store"

interface UseImageParams extends ImagePickerOptions {
    callback: (uri: string | null) => void
}

export const useImage = ({callback, ...pickerOptions}: UseImageParams) => {
    const {openCamera, isLoading: cameraLoading} = useCamera(pickerOptions)
    const {openGallery, isLoading: galleryLoading} = useGallery(pickerOptions)

    const loading = Boolean(cameraLoading || galleryLoading)

    const {close} = useModalStore()
    const modals = useAppModal()

    const handleCallback = (uri: string | null) => {
        close()
        callback(uri) //chama o caminho da imagem
    }
      
      
    const handleSelectImage = () => {
        modals.showSelection({
            title: "Selecionar foto",
            message: "Escolha uma opção",
            options: [
                {
                    text: "Galeria",
                    icon: "images",
                    variant: "primary",
                    onPress: async() => {
                        const imageUri = await openGallery()
                        handleCallback(imageUri) // utilizando a função para pegar o caminho da imagem
                    }
                },
                {
                    text: "Câmera",
                    icon: "camera",
                    variant: "primary",
                    onPress: async () => {
                        const imageUri = await openCamera()
                        handleCallback(imageUri)
                    }
                }
            ]
                
            })
        }
      

    return {
        handleSelectImage,
        loading
    }

}