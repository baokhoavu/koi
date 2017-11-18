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
    selector: 'app-melbourne',
    templateUrl: './melbourne.component.html',
    styleUrls: ['./melbourne.component.css']
})
export class MelbourneComponent {

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

            $('.ml18-donations').html($('.hbs-ml18-don').css('display','block').text());
            $('.ml18-regs').html($('.hbs-ml18-reg').css('display','block').text());
            $('.ml18-riders').html($('.hbs-ml18-riders').css('display','block').text());
            $('.ml17-donations').html($('.hbs-ml17-don').css('display','block').text());
            $('.ml17-regs').html($('.hbs-ml17-reg').css('display','block').text());
            $('.ml17-riders').html($('.hbs-ml17-riders').css('display','block').text());
            $('.ml17-walkers').html($('.hbs-ml17-rfi').css('display','block').text());

            $('.ml18-riders-daily').html(event.body.ml18RidersDaily);
            $('.ml18-donations-daily').html(event.body.ml18DonDaily);
            $('.ml18-regs-daily').html(event.body.ml18RegDaily);

            $('.ml18-donations').html(event.body.ml18Donations);
            $('.ml18-regs').html(event.body.ml18RegFee);
            $('.ml18-riders').html(event.body.ml18Riders);

            $('.ml17-donations').html(event.body.ml17Donations);
            $('.ml17-regs').html(event.body.ml17RegFee);
            $('.ml17-riders').html(event.body.ml17Riders);

            $('.ml17-donations-daily').html(event.body.ml17DonDaily);
        	}
   		});
    }

}