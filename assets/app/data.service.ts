import { Component, OnInit } from "@angular/core";
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {
    HttpClient,
    HttpRequest,
    HttpEvent,
    HttpEventType
} from '@angular/common/http';

@Injectable()
export class DataService implements OnInit {
	private apiData = new BehaviorSubject<any>(null);
	public apiData$ = this.apiData.asObservable();

	constructor(private http: Http) {
		// interface UserResponse {
  //           to18Donations: string;
  //           to18RegFee: string;
  //           to18Crews: string;
  //           to18RFI: string;
  //           to18Riders: string;
  //           mo18Donations: string;
  //           mo18RegFee: string;
  //           mo18Crews: string;
  //           mo18RFI: string;
  //           mo18Riders: string;
  //           ab18Donations: string;
  //           ab18RegFee: string;
  //           ab18Crews: string;
  //           ab18RFI: string;
  //           ab18Riders: string;
  //           va18Donations: string;
  //           va18RegFee: string;
  //           va18Crews: string;
  //           va18RFI: string;
  //           va18Riders: string;
  //           to17Donations: string;
  //           to17RegFee: string;
  //           to17Crews: string;
  //           to17RFI: string;
  //           to17Riders: string;
  //           mo17Donations: string;
  //           mo17RegFee: string;
  //           mo17Crews: string;
  //           mo17RFI: string;
  //           mo17Riders: string;
  //           ab17Donations: string;
  //           ab17RegFee: string;
  //           ab17Crews: string;
  //           ab17RFI: string;
  //           ab17Riders: string;
  //           va17Donations: string;
  //           va17RegFee: string;
  //           va17Crews: string;
  //           va17RFI: string;
  //           va17Riders: string;
  //           owTo18Donations: string;
  //           owTo18RegFee: string;
  //           owTo18Crews: string;
  //           owTo18Walkers: string;
  //           owTo18NightWalkers: string;
  //           owTo182day: string;
  //           owTo1815kmWalkers: string;
  //           owTo1825kmWalkers: string;
  //           owTo1840kmWalkers: string;
  //           owTo18RFI: string;
  //           owTo17Donations: string;
  //           owTo17RegFee: string;
  //           owTo17Crews: string;
  //           owTo17Walkers: string;
  //           owTo1715kmWalkers: string;
  //           owTo1725kmWalkers: string;
  //           owTo1740kmWalkers: string;
  //           owTo17RFI: string;
  //           pr18Donations: string;
  //           pr18RegFee: string;
  //           pr18Crews: string;
  //           pr18RFI: string;
  //           pr18Riders: string;
  //           pr17Donations: string;
  //           pr17RegFee: string;
  //           pr17Crews: string;
  //           pr17RFI:string;
  //           pr17Riders: string;
  //           ml18Donations: string;
  //           ml18RegFee: string;
  //           ml18Walkers: string;
  //           ml18Riders: string;
  //           ml17Donations: string;
  //           ml17RegFee: string;
  //           ml17Walkers: string;
  //           ml17Riders: string;
  //           to18DonDaily: string;
  //           to18RegFeeDaily: string;
  //           to18RFIDaily: string;
  //           to18CrewDaily: string;
  //           to18RidersDaily: string;
  //           to17DonDaily: string;
  //           pr18DonDaily: string;
  //           pr18RegFeeDaily: string;
  //           pr18RFIDaily: string;
  //           pr18CrewDaily: string;
  //           pr18RidersDaily: string;
  //           pr17DonDaily: string;
  //           mo18DonDaily: string;
  //           mo17DonDaily: string;
  //           mo18CrewDaily: string;
  //           mo18RidersDaily: string;
  //           mo18RegFeeDaily: string;
  //           mo18RFIDaily: string;
  //           ab18DonDaily: string;
  //           ab17DonDaily: string;
  //           ab18RegFeeDaily: string;
  //           ab18RFIDaily: string;
  //           ab18CrewDaily: string;
  //           ab18RidersDaily: string;
  //           va18DonDaily: string;
  //           va18CrewDaily: string;
  //           va18RidersDaily: string;
  //           va17DonDaily: string;
  //           va18RegFeeDaily: string;
  //           va18RFIDaily: string;
  //           owto18DonDaily: string;
  //           owto17DonDaily: string;
  //           owto18RegDaily: string;
  //           owto18RFIDaily: string;
  //           owto18WalkersDaily: string;
  //           owto18CrewsDaily: string;
  //           ml18DonDaily: string;
  //           ml17DonDaily: string;
  //           ml18RegDaily: string;
  //           ml18RidersDaily: string;
  //       }

  //       this.http.get<UserResponse>('/api/data')
  //           .subscribe(data => {
  //               this.apiData = data;
  //               // console.log(this.apiData);
  //           })
	}

	fetchData() {
		return this.http.get('/api/data').map((data) => {
			console.log('Fetching data...');
			console.log(data.json());
			return data.json();
		})
	}

	setData(data) {
		this.apiData.next(data);
		console.log('Setting data...')
	}

	ngOnInit(): void {
        
    }
}