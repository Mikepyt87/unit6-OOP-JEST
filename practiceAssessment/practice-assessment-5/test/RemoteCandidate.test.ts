import RemoteCandidate from "../src/RemoteCandidate";
import HourlyJob from "../src/HourlyJob";
import SalaryJob from "../src/SalaryJob";

describe("RemoteCandidate class", () => {
  test("properties are set from constructor", () => {
    const candidate = new RemoteCandidate("Juan", "EST");
    expect(candidate.name).toBe("Juan");
    expect(candidate.timezone).toBe("EST");
  });
  test("yearsExperience set to 0", () => {
    const candidate = new RemoteCandidate("Julia", "EST");
    expect(candidate.yearsExperience).toBe(0);
  });
  test("fitsJob with more experience", () => {
    const job = new SalaryJob(80000, "Physicist", 7, true);
    const candidate = new RemoteCandidate("Brian", "PDT");
    candidate.addExperience(12);
    expect(candidate.fitsJob(job)).toBe(true);
  });
  test("fitsJob with same experience", () => {
    const job = new SalaryJob(55000, "Assistant", 1, true);
    const candidate = new RemoteCandidate("Peter", "PDT");
    candidate.addExperience(1);
    expect(candidate.fitsJob(job)).toBe(true);
  });
  test("fitsJob with less experience", () => {
    const job = new HourlyJob(18, "Driver", 3, true);
    const candidate = new RemoteCandidate("Christa", "PDT");
    candidate.addExperience(2);
    expect(candidate.fitsJob(job)).toBe(false);
  });
  test("fitsJob not remote", () => {
    const job = new HourlyJob(22, "Typist", 2, false);
    const candidate = new RemoteCandidate("Christa", "PDT");
    candidate.addExperience(4);
    expect(candidate.fitsJob(job)).toBe(false);
  });
});
