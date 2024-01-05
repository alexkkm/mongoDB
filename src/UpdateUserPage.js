import { useState } from 'react'
import { searchUserAPI } from './QueryAPI';

function UpdateUserPage() {
    const [query, setQuery] = useState("");
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [newContent, setNewContent] = useState("");

    const handleOnSearch = async (e) => {
        e.preventDefault();
        const result = await searchUserAPI('http://localhost:5000/searchUser/' + query).catch((error) => {
            console.log(error)
        }).then(console.log("Successfully get data from URL"))
        setContent(result)

        const resultName = result[1].name
        setName(resultName)
    }

    const handleOnUpdate = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/updateUser/' + name, {
            method: "patch",
            body: newContent,
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
            <h1>Delete User</h1>
            <form action="">
                <input type="text" placeholder="query"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSearch}>submit</button>
            </form>
            <p>{JSON.stringify(content)}</p>
            <p>{name}</p>

            <form action="">
                <input type="text" placeholder="query"
                    value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSearch}>submit</button>
            </form>
            <button type="submit"
                onClick={handleOnUpdate}>submit</button>
        </div>
    );
}

export default UpdateUserPage;

function handleJSON(json) {
    const jsonObject = JSON.parse(json);
    console.log(jsonObject)
}