import { View, StyleSheet, Text } from "react-native";
import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";

const initialState = {
    entities: [],
    loading: false,
}
const getPosts = createAsyncThunk('posts/getPosts', async (thunkAPI) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return posts
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false
            state.entities = payload
        }).addCase(getPosts.rejected, (state, action) => {
            state.loading = false
        })
    }

})
const postReducer = postSlice.reducer

const appStore = configureStore({
    reducer: {
        posts: postReducer
    }
})
function Post() {
    const dispatch = useDispatch()
    const { entities, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    //SplashScreen
    if (loading) return <Text style={styles.label}>Loading...</Text>

    return (
        <View style={styles.container}>
            <Text>Blog Posts</Text>
            {entities.map((post) => (
                <Text key={post.id}>{post.title}</Text>
            ))}
        </View>
    )
}
function App() {
    return <Provider store={appStore}>
        <View style={styles.container}>
            <Post />
        </View>
    </Provider>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
})
