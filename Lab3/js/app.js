class Game {
    //class properties
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#327da8";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar();

    constructor() {
        //make the circle
        for(var i = 0; i < 25; i++) {
            //create circle
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            newCirc.classList.add("gameCirc");
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);
            // newCirc.setAttribute("radius", 15);

            //randomly choose what revealed color the circle is
            if(Math.random() < .3) {
                //set to be the 'looking for color'
                newCirc.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            } else {
                newCirc.dataset.hiddenColor = this.normalColor;
            }

            //mouse events
            //on mouseover show the hidden color in the data=hiddencolor attribute
            newCirc.addEventListener("mouseover", (event) => {
                event.target.style.fill = event.target.dataset.hiddenColor;
            })

            //hide color on mouseover
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000";
            })

            //for click event -> if it is the right color it will return true
            newCirc.addEventListener("click", (event) => {
                if(event.target.dataset.hiddenColor == this.searchColor) {
                    event.target.remove();

                    //store how many have been clicked
                    this.foundCircles++;

                    //update the found UI
                    this.foundBar.setPercent(this.foundCircles/this.totalCircles);
                }
            })

            //add the circle to the screen
            this.gameZone.appendChild(newCirc);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

////testing the bar
// let f = new foundBar();
// f.setPercent(.5);

let g = new Game();
