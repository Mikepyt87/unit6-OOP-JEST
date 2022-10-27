import HourlyJob from "../src/HourlyJob";

describe("HourlyJob class", () => {
  test("properties are set from constructor", () => {
    const job = new HourlyJob(15, "Intern", 3, true);
    expect(job.hourlyWage).toBe(15);
    expect(job.title).toBe("Intern");
    expect(job.yearsRequired).toBe(3);
    expect(job.remote).toBe(true);
  });
  test("yearsRequired defaults to 0", () => {
    const job = new HourlyJob(15, "Intern");
    expect(job.yearsRequired).toBe(0);
  });
  test("remote defaults to false", () => {
    const job = new HourlyJob(15, "Intern");
    expect(job.remote).toBe(false);
  });
  test("getAnnualPay returns salary", () => {
    const job = new HourlyJob(50, "Analyst");
    expect(job.getAnnualPay()).toBe(100000);
  });
});