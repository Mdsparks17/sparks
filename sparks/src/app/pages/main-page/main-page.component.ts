import { Component, OnInit } from '@angular/core';
import { GoogleServiceComponent } from 'src/app/google-service/google-service.component';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  providers: [GoogleServiceComponent],
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  constructor(private service: GoogleServiceComponent) { }

  ngOnInit(): void {
    console.log(this.service.getSheetData);
  }

}
