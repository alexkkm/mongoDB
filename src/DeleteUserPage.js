import { useState } from 'react'
import { searchUserAPI } from './QueryAPI';

function DeleteUserPage() {
    const [query, setQuery] = useState("");
    const [content, setContent] = useState("");
    const [deleteName, setDeleteName] = useState('');
    const [deleteEmail, setDeleteEmail] = useState('');

    // Function for "searchButton" button
    const handleOnSearch = async (e) => {
        e.preventDefault();

        try {
            // search for the user in the database
            const response = await searchUserAPI('http://localhost:5000/searchUser/' + query);
            console.log("Successfully get data from URL");

            // if successfully get the data, save the response as "content"
            setContent(response);

            // update the "deleteName" and "deleteEmail" with the first item from the response
            if (response.length > 0) {
                // update the "deleteName" by the serching response
                setDeleteName(response[0].name);
                // update the "deleteEmail" by the serching response
                setDeleteEmail(response[0].email);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Function for "deleteButton" button
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
                <button type="submit" id="searchButton"
                    onClick={handleOnSearch}>submit</button>
            </form>
            <p>{JSON.stringify(content)}</p>
            <p>The user that you gonna delete:</p>
            <p>{deleteName}</p>
            <p>{deleteEmail}</p>
            <button type="submit" id="deleteButton"
                onClick={handleOnDelete}>delete</button>
        </div>
    );
}

export default DeleteUserPage;