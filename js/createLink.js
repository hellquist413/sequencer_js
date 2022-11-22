async function createShortIO(urlToShorten) {
    console.log(urlToShorten);
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'pk_Fyb6rXgT61WeumwC'
        },
        body: JSON.stringify({ originalURL: urlToShorten, domain: "example.com"})
    };

    fetch('/api/shortIO', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}