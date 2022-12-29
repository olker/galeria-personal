(async () => {
    let response = await fetch('views/main.html');
    let text = await response.text();
    document.querySelector(".main").innerHTML = text;
    })()