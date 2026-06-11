fetch("components/header.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
    })