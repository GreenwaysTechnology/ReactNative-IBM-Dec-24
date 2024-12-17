import { View } from "react-native"
import { Profile } from "./components/profile/Profile"

function App() {

    return <View>
        <Profile data={{ id: 1, name: 'Subramanian Murugan', status:true }} />
    </View>
}
export default App