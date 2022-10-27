import Candidate from "../src/Candidate";
import HourlyJob from "../src/HourlyJob";
import SalaryJob from "../src/SalaryJob";

describe("Candidate class", () => {
  test("properties are set from constructor", () => {
    const candidate = new Candidate("Juan");
    expect(candidate.name).toBe("Juan");
  });
  test("yearsExperience set to 0", () => {
    const candidate = new Candidate("Julia");
    expect(candidate.yearsExperience).toBe(0);
  });
  test("calling addExperience once", () => {
    const candidate = new Candidate("Brian");
    candidate.addExperience(3);
    expect(candidate.yearsExperience).toBe(3);
  });
  test("calling addExperience twice", () => {
    const candidate = new Candidate("Brian");
    candidate.addExperience(2);
    candidate.addExperience(5);
    expect(candidate.yearsExperience).toBe(7);
  });
  test("fitsJob with more experience", () => {
    const job = new SalaryJob(80000, "Physicist", 4, false);
    const candidate = new Candidate("Brian");
    candidate.addExperience(12);
    expect(candidate.fitsJob(job)).toBe(true);
  });
  test("fitsJob with same experience", () => {
    const job = new HourlyJob(20, "Assistant", 2, true);
    const candidate = new Candidate("Peter");
    candidate.addExperience(2);
    expect(candidate.fitsJob(job)).toBe(true);
  });
  test("fitsJob with less experience", () => {
    const job = new SalaryJob(60000, "Driver", 5, false);
    const candidate = new Candidate("Christa");
    candidate.addExperience(4);
    expect(candidate.fitsJob(job)).toBe(false);
  });
});
