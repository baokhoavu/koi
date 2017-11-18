import { Component } from "@angular/core";
import * as $ from 'jquery';
import { Http } from '@angular/http';
import {
    HttpClient,
    HttpRequest,
    HttpEvent,
    HttpEventType
} from '@angular/common/http';


@Component({
    selector: 'app-vancouver',
    templateUrl: './vancouver.component.html',
    styleUrls: ['./vancouver.component.css']
})
export class VancouverComponent {

    constructor(private http: HttpClient) {
    	this.getData('/api/data');
    }
    getData(url) {
      	const req = new HttpRequest('GET', url, {
        	reportProgress: true
      	});

      	this.http.request(req).subscribe((event: HttpEvent<any>) => {
        	switch (event.type) {
          	case HttpEventType.Sent:
//              console.log('Request sent!');
            break;
          	case HttpEventType.ResponseHeader:
//              console.log('Response header received!');
            break;
          	case HttpEventType.DownloadProgress:
            const kbLoaded = Math.round(event.loaded / 1024);
//              console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
            break;
          	case HttpEventType.Response:

            // console.log('😺 Done!', event.body.getGroupInfoResponse);
            // console.log(event.body);
            // $(element).append(event.body.getGroupInfoResponse.groupInfo.numMembers);
            $('.va18-rfi-daily').html(event.body.va18RFIDaily);
            $('.va18-riders-daily').html(event.body.va18RidersDaily);
            $('.va18-riders-daily').html(event.body.va18RidersDaily);
            $('.va18-donations-daily').html(event.body.va18DonDaily);
            $('.va18-regs-daily').html(event.body.va18RegFeeDaily);
            $('.va18-crews-daily').html(event.body.va18CrewDaily);

            $('.va18-donations').html(event.body.va18Donations);
            $('.va18-regs').html(event.body.va18RegFee);
            $('.va18-crews').html(event.body.va18Crews);
            $('.va18-riders').html(event.body.va18Riders);
            $('.va18-rfi').html(event.body.va18RFI);

            $('.va17-donations').html(event.body.va17Donations);
            $('.va17-regs').html(event.body.va17RegFee);
            $('.va17-crews').html(event.body.va17Crews);
            $('.va17-riders').html(event.body.va17Riders);
            $('.va17-rfi').html(event.body.va17RFI);

            $('.va17-donations-daily').html(event.body.va17DonDaily);
        	}
   		});
    }

}