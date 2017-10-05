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
        
//        var divTest = document.getElementsByClassName('to-rider-td');
//        var toRiders = document.getElementsByClassName('to-riders')[0].innerText;
//        divTest.appendChild(toRiders);
        
//        const convioUrl = 'https://secure2.convio.net/cfrca/site/SRGroupAPI?';
//        const getGroupInfo = 'method=getGroupInfo&api_key=cfrca&login_name=apiadmin&login_password=welcome&v=1.0&response_format=json&group_id=225791';
//        this.getData(convioUrl + getGroupInfo, '.testing');
        $(window).on('load', function(){
            $('.testing').append($('.to-riders'));
            $('.to-riders').css('display', 'block');
        });
        if (window.location.href.indexOf('reload')==-1) {
             window.location.replace(window.location.href+'?reload');
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