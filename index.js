function findMatching(someArray, someString) {
    const newDrivers =  someArray.filter( (thisThing) => thisThing.toUpperCase() === someString.toUpperCase() )
    return newDrivers;
}

function fuzzyMatch(someArray, someString) {
    const namesWithLetter = someArray.filter( (thisThing) => thisThing.substring(0,1) === someString.substring(0,1) )
    return namesWithLetter;
}

function matchName(someArray, someString) {
    const peopleWithHometown = someArray.filter ( (thisThing) => thisThing.name === someString )
    return peopleWithHometown;
}