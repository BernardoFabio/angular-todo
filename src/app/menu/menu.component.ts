import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,) { }

  ngOnInit(): void {
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.log(error);      
    }    
  }

}
