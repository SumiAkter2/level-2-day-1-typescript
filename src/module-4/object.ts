// create class, object and parameter properties:

class Animal {
//  public   name: string;
//   public  species: string;
//   public  sound: string;

constructor  (public name: string,public species: string,public sound: string){
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
    }

    makeSound() {
    console.log(`This is my pet ${this.name} and he says ${this.sound}`);
    }
}
const goat = new Animal('Puchu', 'goat', 'meeee meeeeee');
goat.makeSound();