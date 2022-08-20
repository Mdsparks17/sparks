import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})
export class MainPageContentComponent implements OnInit {

  temps = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit(): void {
  }

}
