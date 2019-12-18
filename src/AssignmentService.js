export class AssignmentService {
  constructor(randomProvider) {
    this.randomProvider = randomProvider;
  }

  assign(values) {
    return {
      dany: "billy",
      billy: "peni",
      peni: "dany"
    };
  }
}
