//General fetch function to be reused 

export async function makeRequest(url, method, body) {
    try {
        let response = await fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(response);

        if (response.status == 404) {
            throw new Error("Not found")
        }

        return await response.json()
    } catch (err) {
        throw err
    }
}