import { useState } from 'react'
import { searchUserAPI } from './QueryAPI';

function DeleteUserPage() {
    const [query, setQuery] = useState("");
    const [content, setContent] = useState("");
    const [result, setResult] = useState("");
    const [name, setName] = useState('');

    const handleOnSearch = async (e) => {
        e.preventDefault();
        const result = await searchUserAPI('http://localhost:5000/searchUser/' + query).catch((error) => {
            console.log(error)
        }).then(console.log("Successfully get data from URL"))
        setContent(result)
        setResult(result)
        setName(result.name)
    }

    const handleOnDelete = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/deleteUser/' + name, {
            method: "post",
            body: JSON.stringify({ name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert(result)
        }
    }

    return (
        <div>
            <h1>Search User</h1>
            <form action="">
                <input type="text" placeholder="query"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSearch}>submit</button>
            </form>
            <p>{JSON.stringify(content)}</p>
            <p>{JSON.stringify()}</p>
            <button type="submit"
                onClick={handleOnDelete}>submit</button>
        </div>
    );
}

export default DeleteUserPage;