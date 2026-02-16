import { Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../../shared/store/user-store";

const {logout} = useUserStore()
export default function Home(){
    return(
        <View className="flex-1 items-center justify-center">
            <TouchableOpacity onPress={logout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}