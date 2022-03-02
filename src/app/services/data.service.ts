import { Reimbursement } from 'src/app/models/reimbursement';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  reimbursements: Reimbursement[] = [];
  byStatus: Reimbursement[] = [];
  byAuthId: Reimbursement[] = [];
  byId: any = null;
  users: any = null;

  constructor(private http: HttpClient) { }

  getReimbursements(){
    let reimbUrl = 'http://localhost:8080/reimbursement';
    return this.http.get(reimbUrl).pipe(map((response: any) => {
      this.reimbursements  = response;
    }));
  }
  getReimbursementsByStatus(status: String){
    let reimbUrl = 'http://localhost:8080/reimbursement?status=';
    return this.http.get(reimbUrl+status).pipe(map((response: any) => {
      this.byStatus  = response;
    }));
  }

  getReimbursementByAuthorId(authId: number){
    let reimbUrl = 'http://localhost:8080/reimbursement?authId=';
    return this.http.get(reimbUrl+authId).pipe(map((response: any) => {
      this.byAuthId  = response;
    }));
  }
  getReimbursementById(id: number){
    let reimbUrl = 'http://localhost:8080/reimbursement/';
    return this.http.get(reimbUrl+id).pipe(map((response: any) => {
      this.byId  = response;
    }));
  }
}
