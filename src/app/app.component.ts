import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'test';   

  constructor(private router: Router) {    
  }
  openApp(){
    this.router.navigate(["/inicio"]);
  }
  openAbout(){
    this.router.navigate(["/about"]);
  }
  openContacts(){
    this.router.navigate(["/contacts"]);
  }
}



