import { useState } from "react"
import { Button, Text } from "react-native"


const Counter = props => {
    const [value, setValue] = useState(0)
    return <>
        <Text> Counter : {value}</Text>
        <Button onPress={() => {
            setValue(value + 1)
        }} title="+" />
        <Text></Text>
        <Button onPress={() => {
            setValue(value - 1)
        }} title="-" />
    </>
}
export { Counter }