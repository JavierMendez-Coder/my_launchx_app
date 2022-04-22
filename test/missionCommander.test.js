const MissionCommander = require("./../app/missionCommander");

describe("Unit Tests for MissionCommander Class", () => {
  test("1) Create a mission commander object", () => {
    const myMissionCommander = new MissionCommander("Woopa");
    expect(myMissionCommander.name).toBe("Woopa");
  });
});
