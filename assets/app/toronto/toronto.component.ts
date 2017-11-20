import { Component } from "@angular/core";

import {
    HttpClient,
    HttpRequest,
    HttpEvent,
    HttpEventType
} from '@angular/common/http';

import * as $ from 'jquery';


@Component({
    selector: 'app-toronto',
    templateUrl: './toronto.component.html',
    styleUrls: ['./toronto.component.css']
})
export class TorontoComponent {
	data: any = {};

    constructor(private http: HttpClient) {
    	
    }

    ngOnInit(): void {
        interface UserResponse {
            to18Donations: string;
            to18RegFee: string;
            to18Crews: string;
            to18RFI: string;
            to18Riders: string;
            to17Donations: string;
            to17RegFee: string;
            to17Crews: string;
            to17RFI: string;
            to17Riders: string;
            to18DonDaily: string;
            to18RegFeeDaily: string;
            to18RFIDaily: string;
            to18CrewDaily: string;
            to18RidersDaily: string;
            to17DonDaily: string;
        }

        this.http.get<UserResponse>('/api/data')
            .subscribe(data => {
                this.data = data;
                console.log(this.data);
            })
    }
}