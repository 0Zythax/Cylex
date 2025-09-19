window.addEventListener('load', function () {
    const gameFrame = this.document.getElementsByClassName("game hidden")[0];
    const gameContainer = this.document.getElementById("gameContainer");
    const exitGameButton = this.document.getElementById("exitButton");
    const fullscreenButton = this.document.getElementById("fsButton");
    const mainFrame = this.document.getElementById("main");

    const topbarGamesButton = this.document.getElementById("topbarGamesButton");
    const topbarSettingsButton = this.document.getElementById("topbarSettingsButton");
    const settingsContainer = this.document.getElementById("settingsContainer");
    const themeSelect = this.document.getElementById("themeSelect");

    function toggleGameScreen(toggle) {
        if (toggle == true) {
            gameFrame.className = "game";
            mainFrame.className = "hidden";
        } else {
            gameContainer.innerHTML = "";
            gameFrame.className = "game hidden";
            mainFrame.className = "";
        }
    }

    function updateTheme() {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.style.setProperty("--frame-backdrop", "#363636")
            document.body.style.setProperty("--button-backdrop", "rgb(48, 48, 48)")
            document.body.style.setProperty("--hover-color", "white")
            document.body.style.setProperty("--text", "white");
        } else {
            document.body.style.setProperty("--frame-backdrop", "#ffffffff")
            document.body.style.setProperty("--button-backdrop", "rgba(139, 139, 139, 1)")
            document.body.style.setProperty("--hover-color", "rgba(138, 138, 138, 1)")
            document.body.style.setProperty("--text", "rgba(187, 187, 187, 1)");
        }
    }

    function initGame(url) {
        gameContainer.innerHTML = `<iframe src="${url}"></iframe>`
    }
    
    if (localStorage.getItem('theme') === null) {
        localStorage.setItem('theme', 'dark');
    }

    themeSelect.addEventListener("change", () => {
        if (themeSelect.value === "dark") {
            document.documentElement.setAttribute('theme', 'dark');
        } else {
            document.documentElement.setAttribute('theme', 'light');
        }  
        localStorage.setItem('theme', themeSelect.value);
        updateTheme();
    });

    updateTheme();

    topbarGamesButton.addEventListener("click", () => {
        settingsContainer.className = "hidden";
        mainFrame.className = "";
    });

    topbarSettingsButton.addEventListener("click", () => {
        toggleGameScreen(false)
        mainFrame.className = "hidden";
        settingsContainer.className = "";
    });

    fullscreenButton.addEventListener("click", () => {
        gameContainer.requestFullscreen();
    })

    exitGameButton.addEventListener("click", () => {
        toggleGameScreen(false)
    })

    fetch('/assets/js/configuration.json')
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
            console.log(data.imageurl.length)
            if (data.imageurl.length <= 0) {
                image.src = "/assets/img/notFound.jpg"
            } else {
                image.src = data.imageurl;
            }
            let name = this.document.createElement("p")
            name.innerHTML = data.name;

            element.appendChild(container)
            container.appendChild(image)
            container.appendChild(name)
            container.appendChild(button)

            button.addEventListener("click", () => {
                toggleGameScreen(true)
                initGame(data.gameurl)
            })
        }
    })
    .catch(message => alert("Failed to load games! " + message))
})