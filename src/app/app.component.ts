import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'myproject';
  showMore = false;
   hearts = Array.from({ length: 20 }, () => ({
    left: Math.floor(Math.random() * 100),
    delay: Math.random() * 9
  }));

  today : Date = new Date();

  toggleMessage() {
    this.showMore = !this.showMore;
  }

}
