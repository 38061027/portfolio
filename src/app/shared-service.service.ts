import { environment } from './environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {


  private gitUrl:string = 'https://api.github.com/users/38061027/repos'
  private token: string = environment.gitToken


  constructor(private http: HttpClient ){

  }


  public menuShow():void {
     let menuMobile = document.querySelector('.mobile-menu');

     if (menuMobile?.classList.contains('open')) {
       return menuMobile.classList.remove('open')
     } else {
       return menuMobile?.classList.add('open')
     }
   }




   getApiGitHub():Observable<any[]>{
    const headers = new HttpHeaders().set('Authorization', `${this.token}`);
    return this.http.get<any[]>(this.gitUrl,  { headers })
   }


  getLanguages(language:any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `${this.token}`);
    return this.http.get<any>(language,  { headers })
  }

}
