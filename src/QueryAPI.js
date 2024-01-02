// Function for calling fetchAPI for searching user data in db
export const searchUserAPI = async (url) => {
    let result = await fetch(
        url,
        {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
    return result.json();
};