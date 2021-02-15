import { Component, OnInit } from '@angular/core';
import {textApp} from '../../../assets/utils/const.js';

@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.scss']
})
export class ProductTwoComponent implements OnInit {
  textApp = textApp;
  constructor() { }

  ngOnInit(): void {
  }

}
