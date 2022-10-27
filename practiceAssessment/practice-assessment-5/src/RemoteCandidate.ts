import Candidate from "./Candidate";
import Job from "./Job";

class RemoteCandidate extends Candidate {
  timezone: string;

  constructor(name: string, timezone: string) {
    super(name);
    this.timezone = timezone;
  }

  fitsJob(job: Job): boolean {
    return job.remote && super.fitsJob(job);
  }
}

export default RemoteCandidate;