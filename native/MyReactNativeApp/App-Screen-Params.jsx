import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Button } from 'react-native'

//create Object of Stack
const Stack = createNativeStackNavigator()

//Screen Components
const Home = (props) => {

    const onMove = () => {
        //move to Profile
        props.navigation.navigate("Profile", { id: 1, name: 'Subramanian', status: true })
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="GoToProfile" onPress={onMove} />
    </View>
}

const Profile = (props) => {
    const profile = props.route.params
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>Id : {profile.id}</Text>
        <Text>Name : {profile.name}</Text>
        <Text>Status : {profile.status ? "Available" : "Not Available"}</Text>


    </View>
}

function App() {
    return <NavigationContainer>
        {/* Type of Navigation :Stack or Tab or Drawer Navigation */}
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* Define screens */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})