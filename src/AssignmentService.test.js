import { AssignmentService } from "./AssignmentService";

describe("AssignmentService", () => {
  it("should assign the values to other values", () => {
    const hardcodedProvider = {
      provide() {
        return 0;
      }
    };

    const assignmentService = new AssignmentService(hardcodedProvider);

    const users = assignmentService.assign(["dany", "billy", "peni"]);

    expect(users).toEqual({
      dany: "billy",
      billy: "peni",
      peni: "dany"
    });
  });

  it("should not assign a value to itself", () => {
    let counter = 0;
    const hardcodedProvider = {
      provide() {
        counter++;
        if (counter === 1) {
          return 0.6;
        }

        if (counter === 2) {
          return 0.9;
        }

        return 0;
      }
    };

    const assignmentService = new AssignmentService(hardcodedProvider);

    const users = assignmentService.assign(["dany", "billy", "peni"]);

    expect(users).toEqual({
      dany: "billy",
      billy: "peni",
      peni: "dany"
    });
  });
});
