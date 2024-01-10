import axios from "axios"
import { useState } from "react"
import './components.css'

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
        <div className="inputContainer">
            <input className="Inputbox" id="title" type="text" placeholder="Title" onChange={(e) => { setTitle(e.target.value) }} /> <br />
            <input className="Inputbox" id="description" type="text" placeholder="Description" onChange={(e) => { setDescription(e.target.value) }} /> <br />
            <button class="cssbuttons-io-button" onClick={sendData}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
                <span>Add</span>
            </button>
        </div>
    )
}

