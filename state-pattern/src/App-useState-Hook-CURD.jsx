import { produce } from "immer"
import { useState } from "react"

const Post = () => {

    //inital data with some sample posts
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is firstPost' },
        { id: 2, title: 'Post 2', body: 'this is secondPost' }
    ])

    //state for holding form values
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //state for holding button state like Add or update.
    //to handle submit button either add or update
    const [isEditing, setIsEditing] = useState(false)

    //handleSubmitt to handle either add or update

    const handleSubmit = e => {
        //to avoid default submission
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    const updatePost = () => {
        //to write update logic: update array items
        setPosts(posts.map(post => (post.id === form.id ? form : post)));
        setForm({ title: '', body: '', id: null })
        setIsEditing(false)
    }
    const addPost = () => {
        alert('Add Post')
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //reset form
        setForm({ title: '', body: '', id: null })
    }
    const handleEdit = post => {
        //load all post into forms
        setForm({ title: post.title, body: post.body, id: post.id })
        setIsEditing(true)
    }

    const deletePost = id => {
        setPosts(posts.filter(post => post.id !== id))
    }


    return <div>
        <h1>React CURD Application using Plain Array</h1>
        {/* Form to add new Post */}

        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    required
                    onChange={event => setForm({ ...form, title: event.target.value })}
                />
            </div>
            <div>
                <textarea
                    placeholder="Body"
                    value={form.body}
                    required
                    onChange={e => setForm({ ...form, body: e.target.value })}
                />
            </div>
            <div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
            </div>
        </form>

        {/* Inital posts */}
        <ul>
            {
                posts.map(post => {
                    return <li>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => {
                            handleEdit(post)
                        }}>Edit</button>
                        <button onClick={() => {
                            deletePost(post.id)
                        }}>Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
}

export default function App() {
    return <>
        <Post />
    </>
}