import { Text, View } from "react-native"

const Profile = props => {
    console.log(props)
    const { id, name, status } = props.data
    return <View>
        <Text>Profile</Text>
        <Text>Id : {id}</Text>
        <Text>Name : {name}</Text>
        <Text>Status :{status ? "Available" : "UnAvailable"}</Text>
    </View>
}
export { Profile };