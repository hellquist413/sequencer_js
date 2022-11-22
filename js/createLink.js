function createShortIO(urlToShorten) {
    const CORS_HEADERS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
    }
    const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
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