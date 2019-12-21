export class AssignmentService {
  constructor(randomProvider) {
    this.randomProvider = randomProvider;
  }

  assign(values) {
    const newValues = values.slice();
    for (let i = newValues.length - 1; i > 0; i--) {
      const j = Math.floor(this.randomProvider.provide() * (i + 1));
      [newValues[i], newValues[j]] = [newValues[j], newValues[i]];
    }

    const assignments = {};

    for (let i = 0; i < values.length; i++) {
      const element = values[i];
      assignments[element] = newValues[i];
    }
    return assignments;
  }
}
