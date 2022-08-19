// Code your solution in this file!
let drivers = []
const returnFirstTwoDrivers = (drivers) => {
    const firstDrivers = drivers.slice(0, -2);
    return firstDrivers;
}

const returnLastTwoDrivers = (drivers) => {
    const lastDrivers = drivers.slice(2);
    return lastDrivers;
    

}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier (number) {
    return function (fare){
        return number * fare;
    }
}

const fareDoubler = function (fare){
    return createFareMultiplier(2)(fare);
    
}

// function fareDoubler(fare){
//     return fare * 2;

// }

const fareTripler = function (fare){
    return createFareMultiplier(3)(fare);
}

// function fareDoubler(fare){
//     return fare * 3
// }

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    
    return returnFirstTwoDrivers(drivers);
   

}
