import { useState } from "react"

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

const initialState = {
    'name': '',
    'username': '',
    'email': '',
    'phone': ''
}

function AddTableItem() {

    const [newItem, setNewItem] = useState(initialState)

    console.log(newItem) 

    function handleSubmit(e) {
        e.preventDefault()

        fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                    name: newItem.name,
                    username: newItem.username,
                    email: newItem.email,
                    phone: newItem.phone
                })})
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th><input type="text" defaultValue={ initialState.name }
                        onChange={ (e) => setNewItem((prevState) => ({
                            ...prevState,
                            name: e.target.value
                        }))}/></th>
                    <th><input type="text" defaultValue={ initialState.username }
                        onChange={ (e) => setNewItem((prevState) => ({
                            ...prevState,
                            username: e.target.value 
                        }))}/></th>
                    <th><input type="text" defaultValue={ initialState.email }
                        onChange={ (e) => setNewItem((prevState) => ({
                            ...prevState,
                            email: e.target.value 
                        }))}/></th>
                    <th><input type="text" defaultValue={ initialState.phone }
                        onChange={ (e) => setNewItem((prevState) => ({
                            ...prevState,
                            phone: e.target.value 
                        }))}/></th>
                    <th><button type="button" onClick={ (e) => handleSubmit(e) }>add user</button></th>
                </tr>
            </tbody>
        </table>
    )
}

export default AddTableItem