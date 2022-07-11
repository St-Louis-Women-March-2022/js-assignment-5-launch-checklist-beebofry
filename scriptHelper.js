// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `

}

function validateInput(testInput) {
           let pilotName = document.querySelector("input[name=pilotName]");
           let copilotName = document.querySelector("input[name=copilotName]");
           let fuelLevel = document.querySelector("input[name=fuelLevel]");
           let cargoMass = document.querySelector("input[name=cargoMass]");

           if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("All fields are required!");
            window.event.preventDefault();
            return "Empty"
           };

           if (isNaN(fuelLevel.value) || (isNaN(cargoMass.value))) {
            alert("Make sure to enter valid information for each field!");
            window.event.preventDefault();
            return "Not a Number"
           };

           if ((!isNaN(pilotName.value)) || (!isNaN(copilotName.value))) {
            alert("Make sure to enter valid information for each field!");
            window.event.preventDefault();
            return "Is a Number"
           };

           let list = [pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value];
           return list;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function() {
        list = validateInput();
        pilot = list[0];
        copilot = list[1];
        fuelLevel = Number(list[2]);
        cargoLevel = Number(list[3]);
     
        let faultyItems = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
     
        let form = document.getElementById("launchForm");
        
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
     
        if (fuelLevel < 10000){
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = `Fuel level too low for launch`
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.setAttribute("style", "color: red")
         window.event.preventDefault();
        }
     
        if (cargoLevel > 10000){
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = `Cargo mass too high for launch`
         launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
         launchStatus.setAttribute("style", "color: red");
         window.event.preventDefault();
        }
     
        if (fuelLevel >= 10000 && cargoLevel < 10000){
         launchStatus.innerHTML = `Shuttle is Ready for Launch`;
         launchStatus.setAttribute("style", "color: green")
         faultyItems.style.visibility = "hidden";
         window.event.preventDefault();
        }
        
    })
  
};

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        })
        
    return planetsReturned;
    
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*6)
    let pickedPlanet = planets[num];
    return pickedPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
