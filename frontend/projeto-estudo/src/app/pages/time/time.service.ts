import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  protected http: HttpClient;
  private pathBase: string = environment.apiUrl

  constructor(http: HttpClient) {
    this.http = http;
  }
}
