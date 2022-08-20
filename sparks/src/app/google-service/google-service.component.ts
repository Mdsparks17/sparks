import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'google-service',
  templateUrl: './google-service.component.html',
  styleUrls: ['./google-service.component.scss']
})

@Injectable()
export class GoogleServiceComponent implements OnInit {
 
  data: any = null;

  ngOnInit(): void {
    this.getSheetData;
  }

  constructor(public httpClient: HttpClient) { }

  public getSheetData(): Observable<any> {
    const sheetId = '2PACX-1vQd2rdQCgWZkFSB7_zjAW5SKq8QJlIt6TUPvllpCIxrtexy52rhaT392XlG61_4viatVVESw0-9-X';
    const url = 'https://docs.google.com/document/d/e/2PACX-1vQd2rdQCgWZkFSB7_zjAW5SKq8QJlIt6TUPvllpCIxrtexy52rhaT392XlG61_4viatVVESw0-9-XtL/pub';

    return this.httpClient.get(url)
      .pipe(
        map((res: any) => {
          const data = res.feed.entry;

          const returnArray: Array<any> = [];
          if (data && data.length > 0) {
            data.forEach((entry: { [x: string]: { [x: string]: any; }; }) => {
              const obj: any = {};
              for (const x in entry) {
                if (x.includes('gsx$') && entry[x]['$t']) {
                  obj[x.split('$')[1]] = entry[x]['$t'];
                }
              }
              returnArray.push(obj);
            });
          }
          return returnArray;
        })
      );
  }
}
