//instrument class
class Instrument {
    constructor(volume, family, play) {
        this.volume = volume;
        this.family = family;
        this.play = play;
    }
    test() {
        console.log("the " + this.family + " " + this.play + " a note " + this.volume + "ly");
    }
}

//woodwind class
class Woodwind extends Instrument {
    constructor(volume){ //child constructor
        super(volume) //sends up volume to the parent class (Instrument)
        this.volume = volume;
        // super(volume, "quiet") //Why doesnt this work?
        this.family = "clarinets";
        this.play = "blow";
    }
}

//percussion class
class Percussion extends Instrument {
    constructor(volume){ //child constructor
        super(volume) //sends up volume to the parent class (Instrument)
        this.volume = volume;
        this.family = "drums";
        this.play = "beat";
    }
}

//string class
class String extends Instrument {
    constructor(volume){ //child constructor
        super(volume) //sends up volume to the parent class (Instrument)
        this.volume = volume;
        this.family = "strings";
        this.play = "pluck";
    }
}

let playArray = [];

playArray[0] = new Woodwind("quiet");
// playArray[0].test(); //invoke test from parent class

playArray[1] = new Percussion("loud");

playArray[2] = new String("soft");

//invoke test for instruments
playArray.forEach((Instrument) => {
    Instrument.test();
})

// let mayo = new Instrument("loud", "drums", "beats");
// mayo.test();


