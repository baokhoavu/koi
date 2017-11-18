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
    selector: 'app-toronto',
    templateUrl: './toronto.component.html',
    styleUrls: ['./toronto.component.css']
})
export class TorontoComponent {

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
            $('.to18-rfi-daily').html(event.body.to18RFIDaily);
            $('.to18-riders-daily').html(event.body.to18RidersDaily);
            $('.to18-riders-daily').html(event.body.to18RidersDaily);
            $('.to18-donations-daily').html(event.body.to18DonDaily);
            $('.to18-regs-daily').html(event.body.to18RegFeeDaily);
            $('.to18-crews-daily').html(event.body.to18CrewDaily);

            $('.to18-donations').html(event.body.to18Donations);
            $('.to18-regs').html(event.body.to18RegFee);
            $('.to18-crews').html(event.body.to18Crews);
            $('.to18-riders').html(event.body.to18Riders);
            $('.to18-rfi').html(event.body.to18RFI);

            $('.to17-donations').html(event.body.to17Donations);
            $('.to17-regs').html(event.body.to17RegFee);
            $('.to17-crews').html(event.body.to17Crews);
            $('.to17-riders').html(event.body.to17Riders);
            $('.to17-rfi').html(event.body.to17RFI);

            $('.to17-donations-daily').html(event.body.to17DonDaily);
        	}
   		});
  	}

}