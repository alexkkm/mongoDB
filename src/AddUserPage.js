import { useState } from 'react'

// Page for adding new user into db
function AddNewUserPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:5000/addNewUser', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setEmail("");
            setName("");
        }
    }
    return (
        <div>
            <h1>Add New User </h1>
            <form action="">
                <input type="text" placeholder="name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                    onClick={handleOnSubmit}>submit</button>
            </form>

        </div>
    );
}

export default AddNewUserPage;