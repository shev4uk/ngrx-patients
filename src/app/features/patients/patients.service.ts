import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }

  getAllPatients() {
    return this.http.get('https://api.mocki.io/v2/51597ef3')
  }
}
