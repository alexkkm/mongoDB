import { useState } from 'react'
import { searchUserAPI } from './QueryAPI';

function SearchUserPage() {
    const [query, setQuery] = useState("");
    const [content, setContent] = useState("");

    const handleOnSearch = async (e) => {
        e.preventDefault();
        const result = await searchUserAPI('http://localhost:5000/searchUser/' + query).catch((error) => {
            console.log(error)
        }).then(console.log("Successfully get data from URL"))
        setContent(result)
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
        </div>
    );
}

export default SearchUserPage;