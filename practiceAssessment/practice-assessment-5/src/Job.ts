export default interface Job {
  title: string;
  yearsRequired: number;
  remote: boolean;
  getAnnualPay(): number;
}