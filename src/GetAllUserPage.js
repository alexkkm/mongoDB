import { useState } from 'react'

function GetAllUserPage() {
    const [content, setContent] = useState("");

    const handleOnSearch = async (e) => {
        let result = await fetch(
            'http://localhost:5000/getAllUsers', {
            method: "get",
        })
        result = await result.json();
        console.log(result);
        if (result) {
            setContent(result)
        }
    }
    return (
        <div>
            <h1>Add New User </h1>
            <form action="">
                <p>{content}</p>
                <button type="search"
                    onClick={handleOnSearch()}>submit</button>
            </form>

        </div>
    );
}

export default GetAllUserPage;