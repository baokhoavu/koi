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
            $('.to18-donations').append($('.hbs-to18-don').css('display','block'));
            $('.to18-regs').append($('.hbs-to18-reg').css('display','block'));
            $('.to18-crews').append($('.hbs-to18-crews').css('display','block'));
            $('.to18-riders').append($('.hbs-to18-riders').css('display','block'));
            $('.to18-rfi').append($('.hbs-to18-rfi').css('display','block'));
            $('.to17-donations').append($('.hbs-to17-don').css('display','block'));
            $('.to17-regs').append($('.hbs-to17-reg').css('display','block'));
            $('.to17-crews').append($('.hbs-to17-crews').css('display','block'));
            $('.to17-riders').append($('.hbs-to17-riders').css('display','block'));
            $('.to17-rfi').append($('.hbs-to17-rfi').css('display','block'));
            // Alberta
            $('.ab18-donations').append($('.hbs-ab18-don').css('display','block'));
            $('.ab18-regs').append($('.hbs-ab18-reg').css('display','block'));
            $('.ab18-crews').append($('.hbs-ab18-crews').css('display','block'));
            $('.ab18-riders').append($('.hbs-ab18-riders').css('display','block'));
            $('.ab18-rfi').append($('.hbs-ab18-rfi').css('display','block'));
            $('.ab17-donations').append($('.hbs-ab17-don').css('display','block'));
            $('.ab17-regs').append($('.hbs-ab17-reg').css('display','block'));
            $('.ab17-crews').append($('.hbs-ab17-crews').css('display','block'));
            $('.ab17-riders').append($('.hbs-ab17-riders').css('display','block'));
            $('.ab17-rfi').append($('.hbs-ab17-rfi').css('display','block'));
            // Montreal
            $('.mo18-donations').append($('.hbs-mo18-don').css('display','block'));
            $('.mo18-regs').append($('.hbs-mo18-reg').css('display','block'));
            $('.mo18-crews').append($('.hbs-mo18-crews').css('display','block'));
            $('.mo18-riders').append($('.hbs-mo18-riders').css('display','block'));
            $('.mo18-rfi').append($('.hbs-mo18-rfi').css('display','block'));
            $('.mo17-donations').append($('.hbs-mo17-don').css('display','block'));
            $('.mo17-regs').append($('.hbs-mo17-reg').css('display','block'));
            $('.mo17-crews').append($('.hbs-mo17-crews').css('display','block'));
            $('.mo17-riders').append($('.hbs-mo17-riders').css('display','block'));
            $('.mo17-rfi').append($('.hbs-mo17-rfi').css('display','block'));
            // Vancouver
            $('.va18-donations').append($('.hbs-va18-don').css('display','block'));
            $('.va18-regs').append($('.hbs-va18-reg').css('display','block'));
            $('.va18-crews').append($('.hbs-va18-crews').css('display','block'));
            $('.va18-riders').append($('.hbs-va18-riders').css('display','block'));
            $('.va18-rfi').append($('.hbs-va18-rfi').css('display','block'));
            $('.va17-donations').append($('.hbs-va17-don').css('display','block'));
            $('.va17-regs').append($('.hbs-va17-reg').css('display','block'));
            $('.va17-crews').append($('.hbs-va17-crews').css('display','block'));
            $('.va17-riders').append($('.hbs-va17-riders').css('display','block'));
            $('.va17-rfi').append($('.hbs-va17-rfi').css('display','block'));
            // OneWalk Toronto
            $('.owto18-donations').append($('.hbs-owto18-don').css('display','block'));
            $('.owto18-regs').append($('.hbs-owto18-reg').css('display','block'));
            $('.owto18-crews').append($('.hbs-owto18-crews').css('display','block'));
            $('.owto18-walkers').append($('.hbs-owto18-walkers').css('display','block'));
            $('.owto18-rfi').append($('.hbs-owto18-rfi').css('display','block'));
            $('.owto17-donations').append($('.hbs-owto17-don').css('display','block'));
            $('.owto17-regs').append($('.hbs-owto17-reg').css('display','block'));
            $('.owto17-crews').append($('.hbs-owto17-crews').css('display','block'));
            $('.owto17-walkers').append($('.hbs-owto17-walkers').css('display','block'));
            $('.owto17-rfi').append($('.hbs-owto17-rfi').css('display','block'));
            // Ride Perth
            $('.pr18-donations').append($('.hbs-pr18-don').css('display','block'));
            $('.pr18-regs').append($('.hbs-pr18-reg').css('display','block'));
            $('.pr18-crews').append($('.hbs-pr18-crews').css('display','block'));
            $('.pr18-riders').append($('.hbs-pr18-riders').css('display','block'));
            $('.pr18-rfi').append($('.hbs-pr18-rfi').css('display','block'));
            $('.pr17-donations').append($('.hbs-pr17-don').css('display','block'));
            $('.pr17-regs').append($('.hbs-pr17-reg').css('display','block'));
            $('.pr17-crews').append($('.hbs-pr17-crews').css('display','block'));
            $('.pr17-riders').append($('.hbs-pr17-riders').css('display','block'));
            $('.pr17-rfi').append($('.hbs-pr17-rfi').css('display','block'));
            // OneDay Melbourne
            $('.ml18-donations').append($('.hbs-ml18-don').css('display','block'));
            $('.ml18-regs').append($('.hbs-ml18-reg').css('display','block'));
            $('.ml18-riders').append($('.hbs-ml18-riders').css('display','block'));
            $('.ml17-donations').append($('.hbs-ml17-don').css('display','block'));
            $('.ml17-regs').append($('.hbs-ml17-reg').css('display','block'));
            $('.ml17-riders').append($('.hbs-ml17-riders').css('display','block'));
            $('.ml17-walkers').append($('.hbs-ml17-rfi').css('display','block'));
            // Ride Perth
            $('.pr18-donations-daily').append($('.hbs-pr18-don-daily').css('display','block'));
            $('.pr17-donations-daily').append($('.hbs-pr17-don-daily').css('display','block'));
            $('.pr18-regs-daily').append($('.hbs-pr18-regs-daily').css('display','block'));
            $('.pr18-rfi-daily').append($('.hbs-pr18-rfi-daily').css('display','block'));
            // Toronto Daily Data
            $('.to18-donations-daily').append($('.hbs-to18-don-daily').css('display','block'));
            $('.to17-donations-daily').append($('.hbs-to17-don-daily').css('display','block'));
            $('.to18-regs-daily').append($('.hbs-to18-regs-daily').css('display','block'));
            $('.to18-rfi-daily').append($('.hbs-to18-rfi-daily').css('display','block'));
            // Montreal Daily Data
            $('.mo18-donations-daily').append($('.hbs-mo18-don-daily').css('display','block'));
            $('.mo17-donations-daily').append($('.hbs-mo17-don-daily').css('display','block'));
            $('.mo18-regs-daily').append($('.hbs-mo18-regs-daily').css('display','block'));
            $('.mo18-rfi-daily').append($('.hbs-mo18-rfi-daily').css('display','block'));
            // Alberta Daily Data
            $('.ab18-donations-daily').append($('.hbs-ab18-don-daily').css('display','block'));
            $('.ab17-donations-daily').append($('.hbs-ab17-don-daily').css('display','block'));
            $('.ab18-regs-daily').append($('.hbs-ab18-regs-daily').css('display','block'));
            $('.ab18-rfi-daily').append($('.hbs-ab18-rfi-daily').css('display','block'));
            // Vancouver Daily Data
            $('.va18-donations-daily').append($('.hbs-va18-don-daily').css('display','block'));
            $('.va17-donations-daily').append($('.hbs-va17-don-daily').css('display','block'));
            $('.va18-regs-daily').append($('.hbs-va18-regs-daily').css('display','block'));
            $('.va18-rfi-daily').append($('.hbs-va18-rfi-daily').css('display','block'));
            // OneWalk Toronto Daily Data
            $('.owto18-donations-daily').append($('.hbs-owto18-don-daily').css('display','block'));
            $('.owto17-donations-daily').append($('.hbs-owto17-don-daily').css('display','block'));
            $('.owto18-regs-daily').append($('.hbs-owto18-regs-daily').css('display','block'));
            $('.owto18-rfi-daily').append($('.hbs-owto18-rfi-daily').css('display','block'));
            // OneDay Melbourne Daily Data
            $('.ml18-donations-daily').append($('.hbs-ml18-don-daily').css('display','block'));
            $('.ml17-donations-daily').append($('.hbs-ml17-don-daily').css('display','block'));
            $('.ml18-regs-daily').append($('.hbs-ml18-regs-daily').css('display','block'));
            
            
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