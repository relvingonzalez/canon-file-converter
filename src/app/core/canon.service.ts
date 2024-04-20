import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanonService {
  constructor(private http: HttpClient) { }

  private ipAddress   = '192.168.43.219';
  private port        = '8080';
  private version     = 'ver100';
  private storage     = 'sd';
  private directory   = '100CANON';
  private apiUrl      = `http://${this.ipAddress}:${this.port}/ccapi/${this.version}/`;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


/*  getCameraContents (): Observable<any> {
  	const endpointUrl = `contents/${this.storage}/${this.directory}`;
  	const fullUrl = this.apiUrl + endpointUrl;
  	return this.http.get(fullUrl);
  }*/

  getCameraContents (): Observable<any> {
    const endpointUrl = `http://b2b64826.ngrok.io/getImages`;
    const fullUrl = endpointUrl;
    return this.http.get(fullUrl);
  }
}
