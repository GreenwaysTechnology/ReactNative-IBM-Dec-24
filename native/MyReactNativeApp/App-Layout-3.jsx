import { StyleSheet, View, Text } from "react-native";

const App = () => {
    // Flex Container
    return <View style={styles.container}>
        {/* Flex items:Children */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'pink' }} />
        <View style={{ flex: 3, backgroundColor: 'blue', padding: 10 }} >
            <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 5 }}>
                <Text style={{ textAlign: 'center' }}>React Native</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: 'pink', marginBottom: 5 }} />
            <View style={{ flex: 1, backgroundColor: 'pink', marginBottom: 5 }} />
            <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
})


export default App;