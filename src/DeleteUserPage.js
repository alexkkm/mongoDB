import { useState } from 'react'
import { searchUserAPI } from './QueryAPI';

function DeleteUserPage() {
    const [query, setQuery] = useState("");
    const [content, setContent] = useState("");
    const [deleteName, setDeleteName] = useState('');
    const [deleteEmail, setDeleteEmail] = useState('');

    const handleOnSearch = async (e) => {
        e.preventDefault();

        //TODO: Optimize the catch then logic, remove result flag
        var result;
        // search for the user in the database
        const response = await searchUserAPI('http://localhost:5000/searchUser/' + query).catch((error) => {
            console.log(error)
        }).then(result = true, result = false)

        if (result) {
            console.log("Successfully get data from URL");
            // if successfully get the data, save the response as "content"
            setContent(response)
            // update the "deleteName" by the serching response
            setDeleteName(response[0].name)
            // update the "deleteName" by the serching response
            setDeleteEmail(response[0].email)
        }
    }




    const handleOnDelete = async (e) => {
        e.preventDefault();
        let response = await fetch(
            'http://localhost:5000/deleteUser/' + deleteName, {
            method: "delete",
            body: JSON.stringify({ deleteName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();
        console.warn(response);
        if (response) {
            alert(JSON.stringify(response))
        }
    }

    return (
        <div>
            <h1>Delete User</h1>
            <form action="">
                <input type="text" placeholder="query"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSearch}>submit</button>
            </form>
            <p>{JSON.stringify(content)}</p>
            <p>The user that you gonna delete:</p>
            <p>{deleteName}</p>
            <p>{deleteEmail}</p>
            <button type="submit"
                onClick={handleOnDelete}>delete</button>
        </div>
    );
}

export default DeleteUserPage;