import Candidate from "./Candidate";
import Job from "./Job";

export function findQualifiedCandidates(job: Job, candidates: Candidate[]): Candidate[] {
  return candidates.filter(candidate => candidate.fitsJob(job));
}

export function getCombinedYearsExperience(candidates: Candidate[]): number {
  let sum = 0;
  for (const candidate of candidates) {
    sum += candidate.yearsExperience;
  }
  return sum;
}

export function findBestPayingJob(jobs: Job[]): Job | null {
  if (jobs.length === 0) {
    return null;
  }
  let best = jobs[0];
  for (const job of jobs) {
    if (job.getAnnualPay() > best.getAnnualPay()) {
      best = job;
    }
  }
  return best;
}