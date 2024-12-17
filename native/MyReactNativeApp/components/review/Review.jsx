import { produce } from "immer"
import { useState } from "react"
import { Button, Text } from "react-native"

const Review = props => {
    const [value, setValue] = useState({ increment: 0, decrement: 0 })
    return <>
        <Text> Like : {value.increment} Dislike: {value.decrement}</Text>
        {/* <Button onPress={() => {
            setValue({ ...value, increment: value.increment + 1 })
        }} title="Like" />
        <Text></Text>
        <Button onPress={() => {
            setValue({ ...value, decrement: value.decrement + 1 })
        }} title="Dislike" /> */}
        <Button onPress={() => {
            setValue(produce(value, draft => {
                draft.decrement += 1
            }))
        }} title="Like" />
        <Text></Text>
        <Button onPress={() => {
            setValue(produce(value, draft => {
                draft.decrement += 1
            }))
        }} title="Dislike" />
    </>
}
export { Review }