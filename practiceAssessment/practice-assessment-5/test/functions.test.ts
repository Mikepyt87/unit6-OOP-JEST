import Candidate from "../src/Candidate";
import { findBestPayingJob, findQualifiedCandidates, getCombinedYearsExperience } from "../src/functions";
import HourlyJob from "../src/HourlyJob";
import RemoteCandidate from "../src/RemoteCandidate";
import SalaryJob from "../src/SalaryJob";

describe("findQualifiedCandidates function", () => {
  test("with array of Candidate and RemoteCandidates", () => {
    const job = new SalaryJob(75000, "Entertainer", 1, false);

    const candidates: Candidate[] = [
      new RemoteCandidate("Yasmine", "CST"),
      new Candidate("Abraham"),
      new Candidate("Clive")
    ];
    candidates[0].addExperience(3);
    candidates[1].addExperience(2);
    candidates[2].addExperience(1);
    expect(findQualifiedCandidates(job, candidates)).toEqual([
      candidates[1], candidates[2]
    ]);
  });
  test("none match", () => {
    const job = new SalaryJob(75000, "Entertainer", 3, false);

    const candidates: Candidate[] = [
      new RemoteCandidate("Yasmine", "CST"),
      new Candidate("Clive")
    ];
    candidates[0].addExperience(3);
    candidates[1].addExperience(1);
    expect(findQualifiedCandidates(job, candidates)).toEqual([]);
  });
  test("with empty array", () => {
    const job = new SalaryJob(75000, "Entertainer", 3, false);

    const candidates: Candidate[] = [];
    expect(findQualifiedCandidates(job, candidates)).toEqual([]);
  });
});

describe("getCombinedYearsExperience function", () => {
  test("with mixed array of candidates", () => {
    const candidates: Candidate[] = [
      new Candidate("Yasmine"),
      new Candidate("Abraham"),
      new Candidate("Clive")
    ];
    candidates[0].addExperience(3);
    candidates[1].addExperience(2);
    candidates[2].addExperience(7);
    expect(getCombinedYearsExperience(candidates)).toBe(12);
  });
  test("with empty array", () => {
    expect(getCombinedYearsExperience([])).toBe(0);
  });
});

describe("findBestPayingJob function", () => {
  test("where SalaryJob has best pay", () => {
    const jobs = [
      new SalaryJob(50000, "Teacher"),
      new HourlyJob(20, "Mechanic"),
      new SalaryJob(55000, "Painter")
    ];
    expect(findBestPayingJob(jobs)).toEqual(jobs[2]);
  });
  test("where HourlyJob has best pay", () => {
    const jobs = [
      new SalaryJob(50000, "Teacher"),
      new HourlyJob(30, "Mechanic"),
      new SalaryJob(55000, "Painter")
    ];
    expect(findBestPayingJob(jobs)).toEqual(jobs[1]);
  });
  test("where HourlyJob has best pay", () => {
    const jobs = [
      new SalaryJob(49000, "Teacher"),
      new HourlyJob(25, "Mechanic"),
      new SalaryJob(51000, "Painter")
    ];
    expect(findBestPayingJob(jobs)).toEqual(jobs[2]);
  });
  test("where HourlyJob has best pay", () => {
    const jobs = [
      new HourlyJob(25.50, "Mechanic"),
      new SalaryJob(49000, "Teacher"),
      new SalaryJob(50000, "Painter")
    ];
    expect(findBestPayingJob(jobs)).toEqual(jobs[0]);
  });
  test("with empty array", () => {
    expect(findBestPayingJob([])).toBe(null);
  });
});