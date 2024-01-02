import { useEffect, useState } from 'react'
import { searchUserAPI } from './QueryAPI';

// Page for getting all user data in the db
function GetAllUserPage() {
    const [content, setContent] = useState("");

    useEffect(() => {
        const callAPI = async () => {
            const result = await searchUserAPI('http://localhost:5000/getAllUsers').catch((error) => {
                console.log(error)
            }).then(console.log("Successfully get data from URL"))

            setContent(result)
        }
        callAPI();
    }, [])

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