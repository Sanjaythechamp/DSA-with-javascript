function josephusSurvivor(totalPeople) {
    // Creating an array representing the circle of people
    let people = [];
    for (let i = 1; i <= totalPeople; i++) {
        people.push(i);
    }

    // Eliminating every second person until only one remains
    while (people.length > 1) {
        // Removing every second person from the array
        for (let i = 1; i < people.length; i += 2) {
        if((i+1)%2===0){
            people.pop()
        }
        }
    }

    // Returning the survivor's position
    return people[0];
}

// Test with 100 people
const survivorPosition = josephusSurvivor(100);
console.log("The survivor's position is:", survivorPosition);
