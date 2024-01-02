export const getAPI = async (url) => {
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