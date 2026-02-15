import {create} from "zustand"
import {persist, createJSONStorage} from "zustand/middleware"
import { UserInterface } from "../interfaces/user"
import AsyncStorage from "@react-native-async-storage/async-storage" //Mantém as informações guardadas (login)

interface setSessionParams {
    user: UserInterface,
    token: string, 
    refreshToken: string,
}

interface UpdateTokenParams {
    token: string | null
    refreshToken: string | null
}

export interface UserStore {
    user: UserInterface | null
    token: string | null
    refreshToken: string | null

    setSession: (sessionData: setSessionParams) => void
    logout: () => void
    updateTokens: (updateTokenData: UpdateTokenParams) => void
    updateUser: (updatedUserData: Partial<UserInterface>) => void
}

export const useUserStore = create<UserStore>()(persist((set) => ({
    user: null,
    token: null,
    refreshToken: null,

    logout: () => set({
        user: null,
        token: null,
        refreshToken: null,
    }),
    setSession: (sessionData) => {set({...sessionData})},
    updateTokens: (updateTokenData) =>  set ({ ...updateTokenData}),
    updateUser: (updatedUserData) => {
        set((state) => ({
        user: state.user ? {...state.user, ...updatedUserData} : null,
    }))
    },

    }),
    {
        name: "marketplace-auth",
        storage: createJSONStorage(() => AsyncStorage),
    }
)
)