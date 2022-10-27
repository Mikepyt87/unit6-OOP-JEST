import Job from "./Job";

class HourlyJob implements Job {
  hourlyWage: number;
  title: string;
  yearsRequired: number;
  remote: boolean;

  constructor(hourlyWage: number, title: string, yearsRequired: number = 0, remote: boolean = false) {
    this.title = title;
    this.yearsRequired = yearsRequired;
    this.remote = remote;
    this.hourlyWage = hourlyWage;
  }

  getAnnualPay() {
    return this.hourlyWage * 2000;
  }
}

export default HourlyJob;