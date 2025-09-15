window.addEventListener('load', function () {
    fetch('/games/configuration.json')
    .then(responce => responce.json())
    .then(responce => {
        var length = Object.keys(responce).length;
        this.document.getElementById("gameCount").innerHTML = "Games: " + length

        for (let i = 0; i < length; i++) {
            let data = responce[i];
            let element = this.document.getElementById("gamesContainer")

            let container = this.document.createElement("div")
            container.className = "tab"
            let button = this.document.createElement("button")
            button.className = "tabButton"
            let image = this.document.createElement("img")
            image.src = data.imageurl;
            let name = this.document.createElement("p")
            name.innerHTML = data.name;

            element.appendChild(container)
            container.appendChild(image)
            container.appendChild(name)
            container.appendChild(button)

            button.addEventListener("click", () => {

            })
        }
    })
    .catch(message => alert("Failed to load games! " + message))
})