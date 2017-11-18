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
    selector: 'app-perth',
    templateUrl: './perth.component.html',
    styleUrls: ['./perth.component.css']
})
export class PerthComponent {

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
            $('.pr18-rfi-daily').html(event.body.pr18RFIDaily);
            $('.pr18-riders-daily').html(event.body.pr18RidersDaily);
            $('.pr18-riders-daily').html(event.body.pr18RidersDaily);
            $('.pr18-donations-daily').html(event.body.pr18DonDaily);
            $('.pr18-regs-daily').html(event.body.pr18RegFeeDaily);
            $('.pr18-crews-daily').html(event.body.pr18CrewDaily);

            $('.pr18-donations').html(event.body.pr18Donations);
            $('.pr18-regs').html(event.body.pr18RegFee);
            $('.pr18-crews').html(event.body.pr18Crews);
            $('.pr18-riders').html(event.body.pr18Riders);
            $('.pr18-rfi').html(event.body.pr18RFI);

            $('.pr17-donations').html(event.body.pr17Donations);
            $('.pr17-regs').html(event.body.pr17RegFee);
            $('.pr17-crews').html(event.body.pr17Crews);
            $('.pr17-riders').html(event.body.pr17Riders);
            $('.pr17-rfi').html(event.body.pr17RFI);

            $('.pr17-donations-daily').html(event.body.pr17DonDaily);
        	}
   		});
    }

}