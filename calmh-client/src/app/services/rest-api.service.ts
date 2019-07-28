import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  get(type: string, id: string) {
    return this.http.get(Constants.CLOUDANT_SERVER + type + '/' + id);
  }

  getAll(type: string) {
    return this.http.get(Constants.CLOUDANT_SERVER + type + '/all');
  }

  post(type: string, body: any) {
    return this.http.post(Constants.CLOUDANT_SERVER + type, body);
  }

  put(type: string, id: string, body: any) {
    return this.http.put(Constants.CLOUDANT_SERVER + type + '/' + id, body);
  }

  delete(type: string, id: string) {
    return this.http.delete(Constants.CLOUDANT_SERVER + type + '/' + id);
  }

  login(body: { username: string, password: string }) {
    return this.http.post(Constants.CLOUDANT_SERVER + 'login', body);
  }
}
