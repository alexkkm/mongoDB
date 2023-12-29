import { useEffect, useState } from 'react'

function GetAllUserPage() {
    const [content, setContent] = useState("");

    useEffect(() => async function () {
        let result = await fetch(
            'http://localhost:5000/getAllUsers', {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log("result:")
        console.log(result);
        if (result) {
            setContent(result)
        }
    })
    return (
        <div>
            <h1>Get User</h1>
            <form action="">
                <p>{JSON.stringify(content)}</p>
            </form>

        </div>
    );
}

export default GetAllUserPage;