(function () {
    "use strict";
    // window.alert("Hello world!");
    console.log("Hello world!");


    function toggleButton(e) {

        let classValue = e.target.getAttribute("class");
        if (classValue.includes("-off")) {
            classValue = classValue.replace("-off", "-on");
        } else {
            classValue = classValue.replace("-on", "-off");
        }

        e.target.setAttribute('class', classValue)
        //console.log(classValue)
    };
    function changeTemperature() {
        const tempIndicator = document.getElementById("temp-indicator");
        tempIndicator.textContent = Number(Math.random() * 40).toFixed(2);
        if(tempIndicator.textContent>30){
            console.log("temp>30")
        }

    }
   
    function changeLightBulb(){
        const bulbNode = document.getElementById("temp-light-state").querySelector("i");
        let classValue = bulbNode.getAttribute("class");
        if(classValue.includes("far ")){
            classValue = classValue.replace("far ", "fas ");
            bulbNode.style.color = '#f8da4c';
        }
        else {
            classValue = classValue.replace("fas ", "far ");
            bulbNode.style.color = '#000000';
        }

        bulbNode.setAttribute('class', classValue);
        console.log(classValue);
    };


    const tempToggle = document.getElementById("temp-toggle");
    tempToggle.addEventListener('click', toggleButton);
    tempToggle.addEventListener('click', changeTemperature);

    const lightToggle = document.getElementById("temp-light");
    lightToggle.addEventListener('click', toggleButton);
    lightToggle.addEventListener('click', changeLightBulb);

})();