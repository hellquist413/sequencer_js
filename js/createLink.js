async function createShortIO(urlToShorten) {
  var data = {
    "domain": "5sc4.short.gy",
    "originalURL": urlToShorten
  };
  await fetch('/api/shortIO', {
    // await fetch('https://api.short.io/links/public', {
    method: 'post',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': process.env.SHORTIO_API_TOKEN_PUBLIC
    },
    body: JSON.stringify(data)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    shortIOresponse = data.shortURL;
    // console.log(shortIOresponse);
    navigator.clipboard.writeText(shortIOresponse);
    return shortIOresponse;
  })
}

function getShortIOBulk() {
  fetch('/api/shortIOlinks')
    .then(function (response) {
      return response.json();
    }).then(function (data) {

      const sidebarBox = document.getElementById('presetIOlist');
      let selectLinks = data; // object
      sidebarBox.innerHTML = "";

      for (let i = 0; i < selectLinks.length; i++) {
        let linkDiv = document.createElement('div');
        linkDiv.classList.add('presetlistSidebarItem');

        let copyDiv = document.createElement('div');
        copyDiv.classList.add('presetlistSidebarItemCopy');

        linkDiv.addEventListener('click', () => {
          dataFromLink = selectLinks[i].originalURL.split('?d=')[1];
          getAllLinks = document.querySelectorAll('.presetlistSidebarItem');
          getAllLinks.forEach(element => {
            if (element.classList.contains('cellActive')) {
              element.classList.remove('cellActive');
              element.classList.add('presetlistSidebarItemPreviously');
            }
          });
          linkDiv.classList.add('cellActive');
          userPresetIsPressed = true;
          loadUserPresetData(dataFromLink);
        });

        copyDiv.addEventListener('click', () => {
          copyDiv.classList.add('forthN');
          setTimeout(function () {
            copyDiv.classList.remove('forthN');
          }, 200);
          navigator.clipboard.writeText(selectLinks[i].shortURL);
        });

        let splitShort = selectLinks[i].shortURL.split('https://')[1];
        linkDiv.innerHTML += splitShort;
        copyDiv.innerHTML += `<img src="img/link.png" height="15" width="15" class="copyImg">`;
        sidebarBox.appendChild(copyDiv);
        sidebarBox.appendChild(linkDiv);
      }
    })
    .catch((err) => console.error);
}