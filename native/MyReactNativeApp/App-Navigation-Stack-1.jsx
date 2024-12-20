import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet } from 'react-native'

//create Object of Stack
const Stack = createNativeStackNavigator()

//Screen Components
const Home = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}


function App() {
    return <NavigationContainer>
        {/* Type of Navigation :Stack or Tab or Drawer Navigation */}
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* Define screens */}
            <Stack.Screen name="Home" component={Home} />
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