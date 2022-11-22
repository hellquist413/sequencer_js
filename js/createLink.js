function createShortIO(urlToShorten) {
    const options = {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'pk_Fyb6rXgT61WeumwC'
        },
        body: JSON.stringify({ originalURL: urlToShorten })
    };

    fetch('https://api.short.io/links/public', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}