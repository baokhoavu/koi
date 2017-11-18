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
    selector: 'app-alberta',
    templateUrl: './alberta.component.html',
    styleUrls: ['./alberta.component.css']
})
export class AlbertaComponent {

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
            $('.ab18-rfi-daily').html(event.body.ab18RFIDaily);
            $('.ab18-riders-daily').html(event.body.ab18RidersDaily);
            $('.ab18-donations-daily').html(event.body.ab18DonDaily);
            $('.ab18-regs-daily').html(event.body.ab18RegFeeDaily);
            $('.ab18-crews-daily').html(event.body.ab18CrewDaily);

            $('.ab18-donations').html(event.body.ab18Donations);
            $('.ab18-regs').html(event.body.ab18RegFee);
            $('.ab18-crews').html(event.body.ab18Crews);
            $('.ab18-riders').html(event.body.ab18Riders);
            $('.ab18-rfi').html(event.body.ab18RFI);

            $('.ab17-donations').html(event.body.ab17Donations);
            $('.ab17-regs').html(event.body.ab17RegFee);
            $('.ab17-crews').html(event.body.ab17Crews);
            $('.ab17-riders').html(event.body.ab17Riders);
            $('.ab17-rfi').html(event.body.ab17RFI);

            $('.ab17-donations-daily').html(event.body.ab17DonDaily);
        	}
   		});
    }

}