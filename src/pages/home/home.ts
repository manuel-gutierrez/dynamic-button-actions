import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public content = `
    <button id="ctaButton" data-page="SecondPage">
      BOOM
    </button>
  `;

  public ctaButton: any;
  constructor(public navCtrl: NavController) {}
 
// This function trigger a new page nav push
// input: pageToNavigate
  goToPage(pageToNavigate:string) {
    console.log("Whas going on", pageToNavigate);
    this.navCtrl.push(pageToNavigate);
   }

  ionViewDidLoad() {
    
    this.ctaButton= document.getElementById('ctaButton');
    this.ctaButton.addEventListener('click', ()=>{
      this.goToPage(this.ctaButton.dataset.page); 
      // console.log("Execute");
    },true);
   
  }
  

  


}