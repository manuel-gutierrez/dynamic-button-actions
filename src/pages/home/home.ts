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
    this.navCtrl.push(pageToNavigate);
   }

  ionViewDidLoad() {
    // On load  grab an element with Id ctaButton
    this.ctaButton= document.getElementById('ctaButton');
    this.ctaButton.addEventListener('click', ()=>{
      this.goToPage(this.ctaButton.dataset.page); 
    },true);
   
  }
  

  


}