(async () => {
    let response = await fetch('views/header.html');
    let text = await response.text();
    document.querySelector(".header").innerHTML = text;
    })()