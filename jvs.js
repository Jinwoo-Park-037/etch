const button = document.createElement("button");
button.innerText = "Set number of pixels";
let numPixels = "1000";

button.addEventListener("click", () => {
    while (numPixels > 100) {
        numPixels = prompt("How many pixels would you like in your drawing?");
    }

    let mainContainer = document.getElementById("main");
    mainContainer.innerHTML = "";
    makeGrid(numPixels);

});

document.body.appendChild(button);

const mainContainer = document.createElement("div");
mainContainer.setAttribute("id", "main");

document.body.appendChild(mainContainer);

function makeGrid(numPixels){
    for (let i = 0; i < numPixels; i++)
    {
        const subContainer = document.createElement("div");
        subContainer.setAttribute("class", "sub");
        subContainer.style.cssText = "display: flex; flex-direction: row;"
    
        for (let j = 0; j < numPixels; j++)
        {
            const subsubContainer = document.createElement("div");
            subsubContainer.setAttribute("class", "pixel");
            subContainer.appendChild(subsubContainer);
            subsubContainer.style.cssText = "background-color: white; height: 10px; width: 10px;";
    
            subsubContainer.addEventListener("mouseenter", () => {
                subsubContainer.style.backgroundColor = "black";
            });
        
            subsubContainer.addEventListener("mouseleave", () => {
                subsubContainer.style.backgroundColor = "white";
            });
        }
    
        mainContainer.appendChild(subContainer);
    }
    
    mainContainer.style.cssText = "display: flex; flex-direction: column;";
}







