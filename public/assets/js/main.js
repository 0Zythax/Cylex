let gameOpen = false;

window.addEventListener('load', function () {
    const gameFrame = this.document.getElementsByClassName("game hidden")[0];
    const exitGameButton = this.document.getElementById("exitButton");
    const fullscreenButton = this.document.getElementById("fsButton");
    const mainFrame = this.document.getElementById("main");

    function toggleGameScreen(toggle) {
        if (toggle == true) {
            gameFrame.className = "game";
            mainFrame.className = "hidden";
        } else {
            gameFrame.className = "game hidden";
            mainFrame.className = "";
        }
    }

    exitGameButton.addEventListener("click", () => {
        toggleGameScreen(false)
    })

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
                toggleGameScreen(true)
            })
        }
    })
    .catch(message => alert("Failed to load games! " + message))
})