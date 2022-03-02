import { Timestamp } from "rxjs";

export interface Reimbursement {
  reimbId: number,
  reimbAmount: number,
  reimbDescription: string,
  reimbReceipt: string,
  reimbResolved: Date,
  reimbSubmitted: Date,
  reimbAuthor: number,
  reimbResolver: number,
  reimbStatus: number,
  reimbType: number
 }
