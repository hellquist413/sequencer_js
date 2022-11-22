async function createShortIO(urlToShorten) {
    console.log(urlToShorten);
    
    const response = await fetch("/api/shortIO", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: 'pk_Fyb6rXgT61WeumwC'
        },
        body: JSON.stringify({
            originalURL: urlToShorten,
            domain: "5sc4.short.gy",
            path: ""
        })
    }).then(response => {
      console.log(response.body);
    });    

}