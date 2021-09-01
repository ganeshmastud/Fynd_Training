import { SequelMovie} from './jsinheritanve.js'

class Movie {
    constructor(name, cast, yearOfRelease, boxOfficeCollection) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeCollection = boxOfficeCollection;
    }

    addToCast( newMember ){
        this.cast.push( newMember );

    }

    addToCollection( amount ) {
        this.boxOfficeCollection += amount;
    }
}

const lotr = new Movie('LOTR', ['Frodo', 'Gandalf'], 2000, 100);

lotr.addToCast('Gimli');
lotr.addToCollection(100);

console.log( lotr );

export{
    Movie,
}