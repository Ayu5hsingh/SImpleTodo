import axios from "axios"
import { useState } from "react"

export default function CreateTodo() {
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    async function sendData() {
        const response = await axios.post('http://localhost:3000/todos',
            {
                title: title,
                description: description
            }
        )
        console.log(response)
    }

    return (
        // work on this and make the frontend send request to the backend.
        <div>
            <input id="title" type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} /> <br />
            <input id="description" type="text" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} /> <br />
            <button onClick={sendData}>Add Toddo</button>
        </div>
    )
}

