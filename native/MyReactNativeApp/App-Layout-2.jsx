import { StyleSheet, View } from "react-native";

const App = () => {
    // Flex Container
    return <View style={styles.container}>
        {/* Flex items:Children */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        <View style={{ flex: 3, backgroundColor: 'blue' }} />
        <View style={{ flex: 4, backgroundColor: 'gray' }} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'pink'
    }
})


export default App;