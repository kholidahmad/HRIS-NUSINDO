import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://desktop-2mqf1ki:8000/api/healthy_claim/healthy_claim/';

@Injectable({
  providedIn: 'root'
})
export class HealthServiceService {

  constructor(
    private http : HttpClient
  ) { }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
