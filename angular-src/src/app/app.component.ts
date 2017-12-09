import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="text" placeholder="text message">
    <button (click)="onClick()">Send</button>
  `,
  styles: []
})
export class AppComponent {
  text: string;

  constructor(private http: HttpClient) {}

  onClick() {
      console.log(this.text);
      const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post('http://localhost:3000/', {text: this.text}, {headers: headers}).subscribe(
          data => console.log(data)
      );
  }
}
