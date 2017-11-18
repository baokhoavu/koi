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
    selector: 'app-ow-toronto',
    templateUrl: './ow-toronto.component.html',
    styleUrls: ['./ow-toronto.component.css']
})
export class OWTorontoComponent {

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
            // console.log(event.body.owTo17Donations);
            // $(element).append(event.body.getGroupInfoResponse.groupInfo.numMembers);
            $('.owto18-rfi-daily').html(event.body.owto18RFIDaily);
            $('.owto18-donations-daily').html(event.body.owto18DonDaily);
            $('.owto18-regs-daily').html(event.body.owto18RegDaily);
            $('.owto18-crews-daily').html(event.body.owTo18CrewDaily);

            $('.owto18-donations').html(event.body.owTo18Donations);
            $('.owto18-regs').html(event.body.owTo18RegFee);
            $('.owto18-crews').html(event.body.owTo18Crews);
            $('.owto18-walkers').html(event.body.owTo18Walkers);
            $('.owto18-riders').html(event.body.owTo18Riders);
            $('.owto18-rfi').html(event.body.owTo18RFI);
            $('.owto18-night').html(event.body.owTo18NightWalkers);
            $('.owto18-15km').html(event.body.owTo1815kmWalkers);
            $('.owto18-25km').html(event.body.owTo1825kmWalkers);
            $('.owto18-40km').html(event.body.owTo1840kmWalkers);
            $('.owto18-2day').html(event.body.owTo182day);

            $('.owto17-donations').html(event.body.owTo17Donations);
            $('.owto17-regs').html(event.body.owTo17RegFee);
            $('.owto17-crews').html(event.body.owTo17Crews);
            $('.owto17-walkers').html(event.body.owTo17Walkers);
            $('.owto17-rfi').html(event.body.owTo17RFI);
            $('.owto17-15km').html(event.body.owTo1715kmWalkers);
            $('.owto17-25km').html(event.body.owTo1725kmWalkers);
            $('.owto17-40km').html(event.body.owTo1740kmWalkers);

            $('.owto17-donations-daily').html(event.body.owto17DonDaily);
        	}
   		});
    }

}