import type { HttpClient } from '@angular/common/http';
import { Injectable, type OnInit } from '@angular/core';
// import { HttpClient, Http, Response, Headers, RequestOptions } from "@angular/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from './environment';

@Injectable()
export class DataService implements OnInit {
	data: any = {};
	allData: any = {};

	interval: any;

	allTable: boolean = true;
	abTable: boolean = false;
	toTable: boolean = false;
	moTable: boolean = false;
	vaTable: boolean = false;
	prTable: boolean = false;
	owtoTable: boolean = false;
	mlTable: boolean = false;
	brTable: boolean = false;

	myDate: string;
	noData: boolean = false;
	brisbaneData: boolean = false;

	public state: string = 'inactive';

	private apiData = new BehaviorSubject<any>(null);
	public apiData$ = this.apiData.asObservable();

	constructor(private http: HttpClient) {}

	ngOnInit() {
		// this.fetchData();
		// this.interval = setInterval(() => {
		//           this.fetchData();
		//       }, 1000);
	}

	// fetchData() {
	// 	return this.http.get('/api/data').map((data) => {
	// 		console.log('Fetching data...');
	// 		// console.log(data.json());
	// 		return data.json();
	// 	})
	// }

	fetchData() {
		this.http.get<any>('/api/data').subscribe(
			(data) => {
				// Ensure we're setting the data object properly
				if (data && typeof data === 'object') {
					this.data = { ...data };
				}
			},
			(error) => {
				console.error('Error fetching data:', error);
			}
		);
	}

	fetchAllData() {
		// Note: mLab is deprecated, consider migrating to MongoDB Atlas
		this.http.get(`${environment.apiUrl}/api/data-by-date?date=${this.myDate}`).subscribe(
			(data) => {
				this.allData = data ?? [];

				const dataLength = this.allData?.length ?? 0;
				this.noData = dataLength === 0;
				this.brisbaneData = dataLength > 0 || !this.allData?.br18Riders;
			},
			(error) => {
				console.error('Error fetching all data:', error);
			}
		);
	}

	setData(data: any = null) {
		this.apiData.next(data ?? null);
	}

	toggleState() {
		this.state = this.state === 'active' ? 'inactive' : 'active';
	}
}
