import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
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

    constructor(private router: Router, private http: HttpClient, private authService: AuthService) {

        this.getData('/api/data');

        $(window).on('load', function(){
            $('.btn-view').on('click', function() {
                $('.all-buttons-row').slideToggle();
                $(this).toggleClass('view-hide');
                if ($(this).hasClass('view-hide')) {
                    $(this).text('Hide Table Menu');
                } else {
                    $(this).text('Show Table Menu');
                }
            });
            // // Toronto
            // $('.to18-donations').html($('.hbs-to18-don').css('display','block').text());
            // $('.to18-regs').html($('.hbs-to18-reg').css('display','block').text());
            // $('.to18-crews').html($('.hbs-to18-crews').css('display','block').text());
            // $('.to18-riders').html($('.hbs-to18-riders').css('display','block').text());
            // $('.to18-rfi').html($('.hbs-to18-rfi').css('display','block').text());
            // $('.to17-donations').html($('.hbs-to17-don').css('display','block').text());
            // $('.to17-regs').html($('.hbs-to17-reg').css('display','block').text());
            // $('.to17-crews').html($('.hbs-to17-crews').css('display','block').text());
            // $('.to17-riders').html($('.hbs-to17-riders').css('display','block').text());
            // $('.to17-rfi').html($('.hbs-to17-rfi').css('display','block').text());
            // // Alberta
            // $('.ab18-donations').html($('.hbs-ab18-don').css('display','block').text());
            // $('.ab18-regs').html($('.hbs-ab18-reg').css('display','block').text());
            // $('.ab18-crews').html($('.hbs-ab18-crews').css('display','block').text());
            // $('.ab18-riders').html($('.hbs-ab18-riders').css('display','block').text());
            // $('.ab18-rfi').html($('.hbs-ab18-rfi').css('display','block').text());
            // $('.ab17-donations').html($('.hbs-ab17-don').css('display','block').text());
            // $('.ab17-regs').html($('.hbs-ab17-reg').css('display','block').text());
            // $('.ab17-crews').html($('.hbs-ab17-crews').css('display','block').text());
            // $('.ab17-riders').html($('.hbs-ab17-riders').css('display','block').text());
            // $('.ab17-rfi').html($('.hbs-ab17-rfi').css('display','block').text());
            // // Montreal
            // $('.mo18-donations').html($('.hbs-mo18-don').css('display','block').text());
            // $('.mo18-regs').html($('.hbs-mo18-reg').css('display','block').text());
            // $('.mo18-crews').html($('.hbs-mo18-crews').css('display','block').text());
            // $('.mo18-riders').html($('.hbs-mo18-riders').css('display','block').text());
            // $('.mo18-rfi').html($('.hbs-mo18-rfi').css('display','block').text());
            // $('.mo17-donations').html($('.hbs-mo17-don').css('display','block').text());
            // $('.mo17-regs').html($('.hbs-mo17-reg').css('display','block').text());
            // $('.mo17-crews').html($('.hbs-mo17-crews').css('display','block').text());
            // $('.mo17-riders').html($('.hbs-mo17-riders').css('display','block').text());
            // $('.mo17-rfi').html($('.hbs-mo17-rfi').css('display','block').text());
            // // Vancouver
            // $('.va18-donations').html($('.hbs-va18-don').css('display','block').text());
            // $('.va18-regs').html($('.hbs-va18-reg').css('display','block').text());
            // $('.va18-crews').html($('.hbs-va18-crews').css('display','block').text());
            // $('.va18-riders').html($('.hbs-va18-riders').css('display','block').text());
            // $('.va18-rfi').html($('.hbs-va18-rfi').css('display','block').text());
            // $('.va17-donations').html($('.hbs-va17-don').css('display','block').text());
            // $('.va17-regs').html($('.hbs-va17-reg').css('display','block').text());
            // $('.va17-crews').html($('.hbs-va17-crews').css('display','block').text());
            // $('.va17-riders').html($('.hbs-va17-riders').css('display','block').text());
            // $('.va17-rfi').html($('.hbs-va17-rfi').css('display','block').text());
            // // OneWalk Toronto
            // $('.owto18-donations').html($('.hbs-owto18-don').css('display','block').text());
            // $('.owto18-regs').html($('.hbs-owto18-reg').css('display','block').text());
            // $('.owto18-crews').html($('.hbs-owto18-crews').css('display','block').text());
            // $('.owto18-walkers').html($('.hbs-owto18-walkers').css('display','block').text());
            // $('.owto18-night').html($('.hbs-owto18-night').css('display','block').text());
            // $('.owto18-2day').html($('.hbs-owto18-2day').css('display','block').text());
            // $('.owto18-15km').html($('.hbs-owto18-15km').css('display','block').text());
            // $('.owto18-25km').html($('.hbs-owto18-25km').css('display','block').text());
            // $('.owto18-40km').html($('.hbs-owto18-40km').css('display','block').text());
            // $('.owto18-rfi').html($('.hbs-owto18-rfi').css('display','block').text());
            // $('.owto17-donations').html($('.hbs-owto17-don').css('display','block').text());
            // $('.owto17-regs').html($('.hbs-owto17-reg').css('display','block').text());
            // $('.owto17-crews').html($('.hbs-owto17-crews').css('display','block').text());
            // $('.owto17-15km').html($('.hbs-owto17-15km').css('display','block').text());
            // $('.owto17-25km').html($('.hbs-owto17-25km').css('display','block').text());
            // $('.owto17-40km').html($('.hbs-owto17-40km').css('display','block').text());
            // $('.owto17-walkers').html($('.hbs-owto17-walkers').css('display','block').text());
            // $('.owto17-rfi').html($('.hbs-owto17-rfi').css('display','block').text());
            // // Ride Perth
            // $('.pr18-donations').html($('.hbs-pr18-don').css('display','block').text());
            // $('.pr18-regs').html($('.hbs-pr18-reg').css('display','block').text());
            // $('.pr18-crews').html($('.hbs-pr18-crews').css('display','block').text());
            // $('.pr18-riders').html($('.hbs-pr18-riders').css('display','block').text());
            // $('.pr18-rfi').html($('.hbs-pr18-rfi').css('display','block').text());
            // $('.pr17-donations').html($('.hbs-pr17-don').css('display','block').text());
            // $('.pr17-regs').html($('.hbs-pr17-reg').css('display','block').text());
            // $('.pr17-crews').html($('.hbs-pr17-crews').css('display','block').text());
            // $('.pr17-riders').html($('.hbs-pr17-riders').css('display','block').text());
            // $('.pr17-rfi').html($('.hbs-pr17-rfi').css('display','block').text());
            // // OneDay Melbourne
            // $('.ml18-donations').html($('.hbs-ml18-don').css('display','block').text());
            // $('.ml18-regs').html($('.hbs-ml18-reg').css('display','block').text());
            // $('.ml18-riders').html($('.hbs-ml18-riders').css('display','block').text());
            // $('.ml17-donations').html($('.hbs-ml17-don').css('display','block').text());
            // $('.ml17-regs').html($('.hbs-ml17-reg').css('display','block').text());
            // $('.ml17-riders').html($('.hbs-ml17-riders').css('display','block').text());
            // $('.ml17-walkers').html($('.hbs-ml17-rfi').css('display','block').text());
            // // Ride Perth
            // $('.pr18-donations-daily').html($('.hbs-pr18-don-daily').css('display','block').text());
            // $('.pr17-donations-daily').html($('.hbs-pr17-don-daily').css('display','block').text());
            // $('.pr18-regs-daily').html($('.hbs-pr18-regs-daily').css('display','block').text());
            // $('.pr18-rfi-daily').html($('.hbs-pr18-rfi-daily').css('display','block').text());
            // $('.pr18-riders-daily').html($('.hbs-pr18-riders-daily').css('display','block').text());
            // $('.pr18-crews-daily').html($('.hbs-pr18-crews-daily').css('display','block').text());

            // // ====== BEGIN DAILY DATA ====== //

            // // Toronto Daily Data
            // $('.to18-donations-daily').html($('.hbs-to18-don-daily').css('display','block').text());
            // $('.to17-donations-daily').html($('.hbs-to17-don-daily').css('display','block').text());
            // $('.to18-regs-daily').html($('.hbs-to18-regs-daily').css('display','block').text());
            // $('.to18-rfi-daily').html($('.hbs-to18-rfi-daily').css('display','block').text());
            // $('.to18-riders-daily').html($('.hbs-to18-riders-daily').css('display','block').text());
            // $('.to18-crews-daily').html($('.hbs-to18-crews-daily').css('display','block').text());
            // // Montreal Daily Data
            // $('.mo18-donations-daily').html($('.hbs-mo18-don-daily').css('display','block').text());
            // $('.mo17-donations-daily').html($('.hbs-mo17-don-daily').css('display','block').text());
            // $('.mo18-regs-daily').html($('.hbs-mo18-regs-daily').css('display','block').text());
            // $('.mo18-rfi-daily').html($('.hbs-mo18-rfi-daily').css('display','block').text());
            // $('.mo18-riders-daily').html($('.hbs-mo18-riders-daily').css('display','block').text());
            // $('.mo18-crews-daily').html($('.hbs-mo18-crews-daily').css('display','block').text());
            // // Alberta Daily Data
            // $('.ab18-donations-daily').html($('.hbs-ab18-don-daily').css('display','block').text());
            // $('.ab17-donations-daily').html($('.hbs-ab17-don-daily').css('display','block').text());
            // $('.ab18-regs-daily').html($('.hbs-ab18-regs-daily').css('display','block').text());
            // $('.ab18-rfi-daily').html($('.hbs-ab18-rfi-daily').css('display','block').text());
            // $('.ab18-riders-daily').html($('.hbs-ab18-riders-daily').css('display','block').text());
            // $('.ab18-crews-daily').html($('.hbs-ab18-crews-daily').css('display','block').text());
            // // Vancouver Daily Data
            // $('.va18-donations-daily').html($('.hbs-va18-don-daily').css('display','block').text());
            // $('.va17-donations-daily').html($('.hbs-va17-don-daily').css('display','block').text());
            // $('.va18-regs-daily').html($('.hbs-va18-regs-daily').css('display','block').text());
            // $('.va18-rfi-daily').html($('.hbs-va18-rfi-daily').css('display','block').text());
            // $('.va18-riders-daily').html($('.hbs-va18-riders-daily').css('display','block').text());
            // $('.va18-crews-daily').html($('.hbs-va18-crews-daily').css('display','block').text());
            // // OneWalk Toronto Daily Data
            // $('.owto18-donations-daily').html($('.hbs-owto18-don-daily').css('display','block').text());
            // $('.owto17-donations-daily').html($('.hbs-owto17-don-daily').css('display','block').text());
            // $('.owto18-regs-daily').html($('.hbs-owto18-regs-daily').css('display','block').text());
            // $('.owto18-rfi-daily').html($('.hbs-owto18-rfi-daily').css('display','block').text());
            // $('.owto18-walkers-daily').html($('.hbs-owto18-walkers-daily').css('display','block').text());
            // $('.owto18-crews-daily').html($('.hbs-owto18-crews-daily').css('display','block').text());
            // // OneDay Melbourne Daily Data
            // $('.ml18-donations-daily').html($('.hbs-ml18-don-daily').css('display','block').text());
            // $('.ml17-donations-daily').html($('.hbs-ml17-don-daily').css('display','block').text());
            // $('.ml18-regs-daily').html($('.hbs-ml18-regs-daily').css('display','block').text());
            // $('.ml18-riders-daily').html($('.hbs-ml18-riders-daily').css('display','block').text());

//            $('.to-riders').css('display', 'block');

            $('.btn').on('click', function(){
               if ($(this).hasClass('alberta-btn')){
                   $('.ab-table').siblings('.table-responsive').slideUp();
                   $('.ab-table').slideDown();
               } else if ($(this).hasClass('toronto-btn')){
                   $('.to-table').siblings('.table-responsive').slideUp();
                   $('.to-table').slideDown();
               } else if ($(this).hasClass('vancouver-btn')){
                   $('.va-table').siblings('.table-responsive').slideUp();
                   $('.va-table').slideDown();
               } else if ($(this).hasClass('montreal-btn')){
                   $('.mo-table').siblings('.table-responsive').slideUp();
                   $('.mo-table').slideDown();
               } else if ($(this).hasClass('ow-toronto-btn')){
                   $('.ow-to-table').siblings('.table-responsive').slideUp();
                   $('.ow-to-table').slideDown();
               } else if ($(this).hasClass('perth-btn')){
                   $('.pr-table').siblings('.table-responsive').slideUp();
                   $('.pr-table').slideDown();
               } else if ($(this).hasClass('melbourne-btn')){
                   $('.ml-table').siblings('.table-responsive').slideUp();
                   $('.ml-table').slideDown();
               } else if ($(this).hasClass('all-btn')){
                   $('.all-table').siblings('.table-responsive').slideUp();
                   $('.all-table').slideDown();
               }
            });
            
        });
        // if (window.location.href.indexOf('alltables') == -1) {
        //      location.reload(true);
        // }
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
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
                console.log(event.body);
                // $(element).append(event.body.getGroupInfoResponse.groupInfo.numMembers);

                // Alberta Data
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

                // Montreal Data
                $('.mo18-rfi-daily').html(event.body.mo18RFIDaily);
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

                $('.mo17-donations-daily').html(event.body.mo17DonDaily);

                // Toronto Data
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

                // Vancouver Data
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

                // Perth Data 
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

                // Melbourne Data
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

                // OneWalk Toronto
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