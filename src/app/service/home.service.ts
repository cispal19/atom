import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  homes: Home[] = [];

  constructor(private http: HttpClient) {
    this.cargarDashboard();
   }


  private cargarDashboard() {
    return new Promise ( (resolve, reject ) => {
      this.http.get('https://angular-html-jc.firebaseio.com/atoms.json')
      .subscribe((resp: Home[]) => {
        this.homes = resp;
        console.log(this.homes);
        resolve();
      });

    });
 }
}
