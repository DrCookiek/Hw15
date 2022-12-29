export class models2 {
  constructor(species, name, color, size) {
    this.species = species;
    this.name = name;
    this.color = color;
    this.size = size;
  }
  printId() {
    console.log(`species: ${this.species}`);
    console.log(`name: ${this.name}`);
    console.log(`color: ${this.color}`);
    console.log(`size: ${this.size}`);
    console.log();
    console.log();
    console.log();
  }
}
