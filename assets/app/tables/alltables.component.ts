import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Http } from '@angular/http';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from '@angular/common/http';

import * as $ from 'jquery';

@Component({
    selector: 'all-tables',
    templateUrl: './alltables.component.html',
    styleUrls: ['./alltables.component.css']
})
export class AllTablesComponent {
    myForm: FormGroup;

    constructor(private router: Router, private http: HttpClient) {
        
        $(window).on('load', function(){
            // Toronto
            $('.to18-donations').html($('.hbs-to18-don').css('display','block').text());
            $('.to18-regs').html($('.hbs-to18-reg').css('display','block').text());
            $('.to18-crews').html($('.hbs-to18-crews').css('display','block').text());
            $('.to18-riders').html($('.hbs-to18-riders').css('display','block').text());
            $('.to18-rfi').html($('.hbs-to18-rfi').css('display','block').text());
            $('.to17-donations').html($('.hbs-to17-don').css('display','block').text());
            $('.to17-regs').html($('.hbs-to17-reg').css('display','block').text());
            $('.to17-crews').html($('.hbs-to17-crews').css('display','block').text());
            $('.to17-riders').html($('.hbs-to17-riders').css('display','block').text());
            $('.to17-rfi').html($('.hbs-to17-rfi').css('display','block').text());
            // Alberta
            $('.ab18-donations').html($('.hbs-ab18-don').css('display','block').text());
            $('.ab18-regs').html($('.hbs-ab18-reg').css('display','block').text());
            $('.ab18-crews').html($('.hbs-ab18-crews').css('display','block').text());
            $('.ab18-riders').html($('.hbs-ab18-riders').css('display','block').text());
            $('.ab18-rfi').html($('.hbs-ab18-rfi').css('display','block').text());
            $('.ab17-donations').html($('.hbs-ab17-don').css('display','block').text());
            $('.ab17-regs').html($('.hbs-ab17-reg').css('display','block').text());
            $('.ab17-crews').html($('.hbs-ab17-crews').css('display','block').text());
            $('.ab17-riders').html($('.hbs-ab17-riders').css('display','block').text());
            $('.ab17-rfi').html($('.hbs-ab17-rfi').css('display','block').text());
            // Montreal
            $('.mo18-donations').html($('.hbs-mo18-don').css('display','block').text());
            $('.mo18-regs').html($('.hbs-mo18-reg').css('display','block').text());
            $('.mo18-crews').html($('.hbs-mo18-crews').css('display','block').text());
            $('.mo18-riders').html($('.hbs-mo18-riders').css('display','block').text());
            $('.mo18-rfi').html($('.hbs-mo18-rfi').css('display','block').text());
            $('.mo17-donations').html($('.hbs-mo17-don').css('display','block').text());
            $('.mo17-regs').html($('.hbs-mo17-reg').css('display','block').text());
            $('.mo17-crews').html($('.hbs-mo17-crews').css('display','block').text());
            $('.mo17-riders').html($('.hbs-mo17-riders').css('display','block').text());
            $('.mo17-rfi').html($('.hbs-mo17-rfi').css('display','block').text());
            // Vancouver
            $('.va18-donations').html($('.hbs-va18-don').css('display','block').text());
            $('.va18-regs').html($('.hbs-va18-reg').css('display','block').text());
            $('.va18-crews').html($('.hbs-va18-crews').css('display','block').text());
            $('.va18-riders').html($('.hbs-va18-riders').css('display','block').text());
            $('.va18-rfi').html($('.hbs-va18-rfi').css('display','block').text());
            $('.va17-donations').html($('.hbs-va17-don').css('display','block').text());
            $('.va17-regs').html($('.hbs-va17-reg').css('display','block').text());
            $('.va17-crews').html($('.hbs-va17-crews').css('display','block').text());
            $('.va17-riders').html($('.hbs-va17-riders').css('display','block').text());
            $('.va17-rfi').html($('.hbs-va17-rfi').css('display','block').text());
            // OneWalk Toronto
            $('.owto18-donations').html($('.hbs-owto18-don').css('display','block').text());
            $('.owto18-regs').html($('.hbs-owto18-reg').css('display','block').text());
            $('.owto18-crews').html($('.hbs-owto18-crews').css('display','block').text());
            $('.owto18-walkers').html($('.hbs-owto18-walkers').css('display','block').text());
            $('.owto18-night').html($('.hbs-owto18-night').css('display','block').text());
            $('.owto18-15km').html($('.hbs-owto18-15km').css('display','block').text());
            $('.owto18-25km').html($('.hbs-owto18-25km').css('display','block').text());
            $('.owto18-40km').html($('.hbs-owto18-40km').css('display','block').text());
            $('.owto18-rfi').html($('.hbs-owto18-rfi').css('display','block').text());
            $('.owto17-donations').html($('.hbs-owto17-don').css('display','block').text());
            $('.owto17-regs').html($('.hbs-owto17-reg').css('display','block').text());
            $('.owto17-crews').html($('.hbs-owto17-crews').css('display','block').text());
            $('.owto17-15km').html($('.hbs-owto17-15km').css('display','block').text());
            $('.owto17-40km').html($('.hbs-owto17-40km').css('display','block').text());
            $('.owto17-walkers').html($('.hbs-owto17-walkers').css('display','block').text());
            $('.owto17-rfi').html($('.hbs-owto17-rfi').css('display','block').text());
            // Ride Perth
            $('.pr18-donations').html($('.hbs-pr18-don').css('display','block').text());
            $('.pr18-regs').html($('.hbs-pr18-reg').css('display','block').text());
            $('.pr18-crews').html($('.hbs-pr18-crews').css('display','block').text());
            $('.pr18-riders').html($('.hbs-pr18-riders').css('display','block').text());
            $('.pr18-rfi').html($('.hbs-pr18-rfi').css('display','block').text());
            $('.pr17-donations').html($('.hbs-pr17-don').css('display','block').text());
            $('.pr17-regs').html($('.hbs-pr17-reg').css('display','block').text());
            $('.pr17-crews').html($('.hbs-pr17-crews').css('display','block').text());
            $('.pr17-riders').html($('.hbs-pr17-riders').css('display','block').text());
            $('.pr17-rfi').html($('.hbs-pr17-rfi').css('display','block').text());
            // OneDay Melbourne
            $('.ml18-donations').html($('.hbs-ml18-don').css('display','block').text());
            $('.ml18-regs').html($('.hbs-ml18-reg').css('display','block').text());
            $('.ml18-riders').html($('.hbs-ml18-riders').css('display','block').text());
            $('.ml17-donations').html($('.hbs-ml17-don').css('display','block').text());
            $('.ml17-regs').html($('.hbs-ml17-reg').css('display','block').text());
            $('.ml17-riders').html($('.hbs-ml17-riders').css('display','block').text());
            $('.ml17-walkers').html($('.hbs-ml17-rfi').css('display','block').text());
            // Ride Perth
            $('.pr18-donations-daily').html($('.hbs-pr18-don-daily').css('display','block').text());
            $('.pr17-donations-daily').html($('.hbs-pr17-don-daily').css('display','block').text());
            $('.pr18-regs-daily').html($('.hbs-pr18-regs-daily').css('display','block').text());
            $('.pr18-rfi-daily').html($('.hbs-pr18-rfi-daily').css('display','block').text());
            // Toronto Daily Data
            $('.to18-donations-daily').html($('.hbs-to18-don-daily').css('display','block').text());
            $('.to17-donations-daily').html($('.hbs-to17-don-daily').css('display','block').text());
            $('.to18-regs-daily').html($('.hbs-to18-regs-daily').css('display','block').text());
            $('.to18-rfi-daily').html($('.hbs-to18-rfi-daily').css('display','block').text());
            $('.to18-riders-daily').html($('.hbs-to18-riders-daily').css('display','block').text());
            $('.to18-crews-daily').html($('.hbs-to18-crews-daily').css('display','block').text());
            // Montreal Daily Data
            $('.mo18-donations-daily').html($('.hbs-mo18-don-daily').css('display','block').text());
            $('.mo17-donations-daily').html($('.hbs-mo17-don-daily').css('display','block').text());
            $('.mo18-regs-daily').html($('.hbs-mo18-regs-daily').css('display','block').text());
            $('.mo18-rfi-daily').html($('.hbs-mo18-rfi-daily').css('display','block').text());
            // Alberta Daily Data
            $('.ab18-donations-daily').html($('.hbs-ab18-don-daily').css('display','block').text());
            $('.ab17-donations-daily').html($('.hbs-ab17-don-daily').css('display','block').text());
            $('.ab18-regs-daily').html($('.hbs-ab18-regs-daily').css('display','block').text());
            $('.ab18-rfi-daily').html($('.hbs-ab18-rfi-daily').css('display','block').text());
            // Vancouver Daily Data
            $('.va18-donations-daily').html($('.hbs-va18-don-daily').css('display','block').text());
            $('.va17-donations-daily').html($('.hbs-va17-don-daily').css('display','block').text());
            $('.va18-regs-daily').html($('.hbs-va18-regs-daily').css('display','block').text());
            $('.va18-rfi-daily').html($('.hbs-va18-rfi-daily').css('display','block').text());
            // OneWalk Toronto Daily Data
            $('.owto18-donations-daily').html($('.hbs-owto18-don-daily').css('display','block').text());
            $('.owto17-donations-daily').html($('.hbs-owto17-don-daily').css('display','block').text());
            $('.owto18-regs-daily').html($('.hbs-owto18-regs-daily').css('display','block').text());
            $('.owto18-rfi-daily').html($('.hbs-owto18-rfi-daily').css('display','block').text());
            // OneDay Melbourne Daily Data
            $('.ml18-donations-daily').html($('.hbs-ml18-don-daily').css('display','block').text());
            $('.ml17-donations-daily').html($('.hbs-ml17-don-daily').css('display','block').text());
            $('.ml18-regs-daily').html($('.hbs-ml18-regs-daily').css('display','block').text());
            
            
//            $('.to-riders').css('display', 'block');
            
            $('.btn').on('click', function(){
               if ($(this).hasClass('alberta-btn')){
                   $('.ab-table').siblings('.table-responsive').fadeOut();
                   $('.ab-table').fadeIn();
               } else if ($(this).hasClass('toronto-btn')){
                   $('.to-table').siblings('.table-responsive').fadeOut();
                   $('.to-table').fadeIn();
               } else if ($(this).hasClass('vancouver-btn')){
                   $('.va-table').siblings('.table-responsive').fadeOut();
                   $('.va-table').fadeIn();
               } else if ($(this).hasClass('montreal-btn')){
                   $('.mo-table').siblings('.table-responsive').fadeOut();
                   $('.mo-table').fadeIn();
               } else if ($(this).hasClass('ow-toronto-btn')){
                   $('.ow-to-table').siblings('.table-responsive').fadeOut();
                   $('.ow-to-table').fadeIn();
               } else if ($(this).hasClass('perth-btn')){
                   $('.pr-table').siblings('.table-responsive').fadeOut();
                   $('.pr-table').fadeIn();
               } else if ($(this).hasClass('melbourne-btn')){
                   $('.ml-table').siblings('.table-responsive').fadeOut();
                   $('.ml-table').fadeIn();
               } else if ($(this).hasClass('all-btn')){
                   $('.all-table').siblings('.table-responsive').fadeOut();
                   $('.all-table').fadeIn();
               }
            });
            
        });
        if (window.location.href.indexOf('alltables') == -1) {
             location.reload(true);
        }
    }
    
//    getData(url, element) {
//        const req = new HttpRequest('GET', url, {
//          reportProgress: true
//        });
//
//        this.http.request(req).subscribe((event: HttpEvent<any>) => {
//          switch (event.type) {
//            case HttpEventType.Sent:
////              console.log('Request sent!');
//              break;
//            case HttpEventType.ResponseHeader:
////              console.log('Response header received!');
//              break;
//            case HttpEventType.DownloadProgress:
//              const kbLoaded = Math.round(event.loaded / 1024);
////              console.log(`Download in progress! ${ kbLoaded }Kb loaded`);
//              break;
//            case HttpEventType.Response:
////              console.log('😺 Done!', event.body.getGroupInfoResponse);
//              $(element).append(event.body.getGroupInfoResponse.groupInfo.numMembers);
//          }
//        });
//    }
}