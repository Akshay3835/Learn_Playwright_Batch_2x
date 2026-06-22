class Car {
    //CAB

    constructor( name_given_to_object ) {
        this.carName = name_given_to_object;

    }

    // Attributes
    carCC = 1500;
    color = "Brave Kaki";
    airBags = 6;

    // Behaviour

    drive() {
        console.log( "Enroute to Kashi " );

    }


}

const breeza = new Car( " Breeza Zxi+" );
breeza.carCC;
breeza.color;
breeza.airBags;
breeza.drive();

console.log( "" );


console.log( breeza );