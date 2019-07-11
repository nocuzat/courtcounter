import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  teamA=0;
  teamB= 0;
  constructor(public navCtrl: NavController) {
    this.teamA=0;
    this.teamB=0;
  }
  onClickA1(num:number){
    if(num==4){
      this.teamA +=4;
    }
    else if(num==3){
      this.teamA +=3;
    }
    else if(num==2){
      this.teamA +=2;
    }
    else {
      this.teamA +=1;
    }  
  }
  onClickA2(num:number){
    if(num==4){
      this.teamA -=4;
    }
    else if(num==3){
      this.teamA -=3;
    }
    else if(num==2){
      this.teamA -=2;
    }
    else if(num==1){
      this.teamA -=1;
    }  
  }


  onClickB1(num:number){
    if(num==4){
      this.teamB +=4;
    }
    else if(num==3){
      this.teamB +=3;
    }
    else if(num==2){
      this.teamB +=2;
    }
    else if(num==1){
      this.teamB +=1;
    }  
  }
  onClickB2(num:number){
    if(num==4){
      this.teamB -=4;
    }
    else if(num==3){
      this.teamB -=3;
    }
    else if(num==2){
      this.teamB -=2;
    }
    else if(num==1){
      this.teamB -=1;
    }  
  } 

  onClick(){
    this.teamA =0;
    this.teamB =0;
  }
}
