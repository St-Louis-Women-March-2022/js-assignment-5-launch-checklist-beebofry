// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { addDestinationInfo } = require("./scriptHelper");

//const { pickPlanet } = require("./scriptHelper");
//const { myFetch } = require("./scriptHelper");
//const { validateInput } = require("./scriptHelper");
//const { formSubmission } = require("./scriptHelper");
//const { validateInput, formSubmission } = require("./scriptHelper");



window.addEventListener("load", function() {
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   })
});

window.addEventListener("load", function () {
    let form = document.getElementById("launchForm");
    form.addEventListener("submit", formSubmission(document, validateInput[0], validateInput[1],validateInput[2], validateInput[3]))
    
});