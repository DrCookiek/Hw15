class models {
  constructor() {
    this.models = [];
  }
  addModel(model) {
    this.models.push(model);
  }
  printAllModels() {
    this.models.forEach((model) => {
      model.printId();
      console.log("");
    });
  }
}
