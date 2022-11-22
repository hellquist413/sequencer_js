function createShortIO(urlToShorten) {
    console.log(urlToShorten);

    const response = fetch("/api/tiny", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "hellqx"
        },
        
        body: JSON.stringify({
            "url": urlToShorten,
            "domain": "tiny.one",
            "alias": "preset",
            "tags": "preset,link",
            "expires_at": "2023-10-25 10:11:12"
          })
    }).then(response => {
      console.log(response.json);
    });       

}