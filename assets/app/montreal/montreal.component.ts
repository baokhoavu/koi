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
    selector: 'app-montreal',
    templateUrl: './montreal.component.html',
    styleUrls: ['./montreal.component.css']
})
export class MontrealComponent {

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
            $('.mo18-rfi-daily').html(event.body.mo18RFIDaily);
            // $('.ab18-riders-daily').append(event.body.ab18RidersDaily);
            $('.mo18-riders-daily').html(event.body.mo18RidersDaily);
            $('.mo18-donations-daily').html(event.body.mo18DonDaily);
            $('.mo18-regs-daily').html(event.body.mo18RegFeeDaily);
            $('.mo18-crews-daily').html(event.body.mo18CrewDaily);

            $('.mo18-donations').html(event.body.mo18Donations);
            $('.mo18-regs').html(event.body.mo18RegFee);
            $('.mo18-crews').html(event.body.mo18Crews);
            $('.mo18-riders').html(event.body.mo18Riders);
            $('.mo18-rfi').html(event.body.mo18RFI);
            $('.mo17-donations').html(event.body.mo17Donations);
            $('.mo17-regs').html(event.body.mo17RegFee);
            $('.mo17-crews').html(event.body.mo17Crews);
            $('.mo17-riders').html(event.body.mo17Riders);
            $('.mo17-rfi').html(event.body.mo17RFI);

            $('.ab17-donations-daily').html(event.body.ab17DonDaily);
        	}
   		});
    }

}