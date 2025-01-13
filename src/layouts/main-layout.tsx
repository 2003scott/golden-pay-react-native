import { SafeAreaView, ScrollView } from "react-native";
import { Statusbar } from "../components/ui";

const MainLayout = ({ children } : { children : React.ReactNode}) => {
    return (
        <SafeAreaView>
            <Statusbar/>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
};

export { MainLayout };
