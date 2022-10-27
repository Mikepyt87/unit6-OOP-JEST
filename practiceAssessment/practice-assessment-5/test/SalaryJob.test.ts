import SalaryJob from "../src/SalaryJob";

describe("SalaryJob class", () => {
  test("properties are set from constructor", () => {
    const job = new SalaryJob(50000, "Junior Dev", 1, true);
    expect(job.salary).toBe(50000);
    expect(job.title).toBe("Junior Dev");
    expect(job.yearsRequired).toBe(1);
    expect(job.remote).toBe(true);
  });
  test("yearsRequired defaults to 0", () => {
    const job = new SalaryJob(50000, "Junior Dev");
    expect(job.yearsRequired).toBe(0);
  });
  test("remote defaults to false", () => {
    const job = new SalaryJob(50000, "Junior Dev");
    expect(job.remote).toBe(false);
  });
  test("getAnnualPay returns salary", () => {
    const job = new SalaryJob(70000, "Analyst");
    expect(job.getAnnualPay()).toBe(70000);
  });
});