import { AssignmentService } from "./AssignmentService";

describe("AssignmentService", () => {
  it("should assign the users to other users", () => {
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
});
