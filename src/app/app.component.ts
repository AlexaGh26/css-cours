import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'responsive';
  items:Array<any> = [1,2,3,4,5,6,7,8,9,10,11,11];
  widthViewport:number = screen.width;

  ngOnInit(): void {
    console.log(this.widthViewport)
  }
}

