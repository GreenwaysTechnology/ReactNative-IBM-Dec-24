import { StyleSheet, Text, View } from "react-native";

function App() {
    return <View style={styles.box}>
        <Text style={styles.label}>Hello</Text>
        <Text style={styles.label}>Hello</Text>
        <Text style={styles.label}>Hello</Text>
        <Text style={styles.label}>Hello</Text>
        <Text style={{ color: 'blue' }}>Hello</Text>
    </View>
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'pink',
        height: 900
    },
    label: {
        color: 'red'
    }
})
export default App;