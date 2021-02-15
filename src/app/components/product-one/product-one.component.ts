import { Component, OnInit } from '@angular/core';
import {textApp} from '../../../assets/utils/const.js';
@Component({
  selector: 'app-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.scss']
})
export class ProductOneComponent implements OnInit {

  textApp = textApp;

  constructor() { }

  ngOnInit(): void {
  }

}
