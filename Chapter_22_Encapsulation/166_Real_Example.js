class Person {

    #child1;
    #child2;

    constructor( name, ch1, ch2 ) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;

    }

    getChild1() {
        return this.#child1;
    }

    getChild2() {
        return this.#child2;
    }

    setChild1( changed_name ) {
        this.#child1 = changed_name;
    }

    setChild2( changed_name2 ) {
        this.#child2 = changed_name2;
    }
}

let per = new Person( "Ashok", "Akshay", "Abhi" );
console.log( per.name );
console.log( per.getChild1() );
console.log( per.getChild2() );

