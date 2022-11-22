async function createShortIO(urlToShorten) {
    console.log(urlToShorten);
    const got = require("got");

    const response = await got("/api/shortIO", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "pk_vSV7CQxm4bzxTYGQ"
        },
        body: JSON.stringify({
            originalURL: urlToShorten,
            domain: "5sc4.short.gy",
        })
    }).then(response => {
      console.log(response.body);
    });    

}