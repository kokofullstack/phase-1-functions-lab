const distance = 50;
function distanceFromHqInBlocks(distance){
    return distance > 42 ? distance - 42 : 42 - distance;
};

function distanceFromHqInFeet(distance){
    distanceFromHqInBlocks(distance);
    return distance > 42 ? (distance - 42) * 264:
           distance < 42 ? (42 - distance) * 264:
           0;
};

function distanceTravelledInFeet(start,destination){
    return destination > start ? (destination - start) * 264:
         (start - destination) * 264;
};

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    return distance <= 400 ? 0:
           distance > 400 && distance < 2000 ? (distance - 400) * 0.02:
           distance >= 2000 && distance <= 2500 ? 25:
           "cannot travel that far";    
};