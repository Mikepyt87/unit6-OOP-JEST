import Job from "./Job";

class Candidate {
  name: string;
  yearsExperience: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  addExperience(years: number): void {
    this.yearsExperience += years;
  }

  fitsJob(job: Job): boolean {
    return this.yearsExperience >= job.yearsRequired;
  }
}

export default Candidate;