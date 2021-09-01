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

class SequelMovie extends Movie{
    constructor(name,cast,yearOfRelease,boxOfficeCollection,earlierMovies){
        super(name,cast,yearOfRelease,boxOfficeCollection);
        this.earlierMovies=earlierMovies;
    }

    getLifetimeEarnings(){
        for(let idx=0;idx<this.earlierMovies.length;idx++)
        {
            this.boxOfficeCollection+=this.earlierMovies[idx].boxOfficeCollection;
        }
        return this.boxOfficeCollection;
    }
}



// const movie1=new Movie('criminal justice',['pankaj','fava'],2019,550000);
// const movie2= new Movie('LOTR', ['Frodo', 'Gandalf'], 2000, 100);

// const sequelMovie= new SequelMovie('cjbtb',['pankaj','favac'],2020,233212,[movie1]);

export{
    SequelMovie,
}
