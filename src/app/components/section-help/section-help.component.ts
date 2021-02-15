import { Component, OnInit } from '@angular/core';
import {textApp} from '../../../assets/utils/const.js';
@Component({
  selector: 'app-section-help',
  templateUrl: './section-help.component.html',
  styleUrls: ['./section-help.component.scss']
})
export class SectionHelpComponent implements OnInit {
  textApp = textApp;
  constructor() { }

  ngOnInit(): void {
  }

}
