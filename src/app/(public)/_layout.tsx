import { Redirect, Stack } from "expo-router";
import { useUserStore } from "../../shared/store/user-store";

export default function PublicLayout() {
    const { user, token } = useUserStore()

    // Always call hooks in the same order - no early returns
    if (user && token) {
        return <Redirect href="/(private)/home" />
    }

    return (
        <Stack screenOptions={{
            headerShown: false
        }} />
    )
}