window.addEventListener('load', function () {
    fetch('/assets/js/configuration.json')
    .then(responce => responce.json())
    .then(responce => {
        for (let i = 0; i < Object.keys(responce).length; i++) {
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


            /*
            <div class="tab">
                    <img src="/assets/img/template.jpg">
                    <p>Game name</p>
                    <button class="tabButton">t</button>
            </div>
            */
        }
    })
    .catch(message => alert("Failed to load games! " + message))

    /*
    var buttons = this.document.querySelectorAll(".tabButton")
    buttons.forEach((button) => {
        button.addEventListener("click", function(){ 

        }); 
    })
    */
})