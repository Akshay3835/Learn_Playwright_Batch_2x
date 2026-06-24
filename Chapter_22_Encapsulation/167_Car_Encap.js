class Car {

    #engine;

    constructor( name, engineName ) {
        this.#engine = engineName;
        this.name = name;
    }

    getEngine() {
        return this.#engine;
    }

    setEngine( engine_name ) {

        this.#engine = engine_name;
    }
}

let model = new Car( "Breeza", "Petrol Engine" );

console.log( model.getEngine() );

model.setEngine( "Desile Engine" )

console.log( model.getEngine() );


