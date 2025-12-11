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
		console.log('🔄 Fetching data from /api/data...');
		this.http.get<any>('/api/data').subscribe(
			(data) => {
				console.log('✅ Data received:', data);
				console.log('🔍 Data type:', typeof data);
				console.log('📋 Data keys count:', Object.keys(data || {}).length);

				// Ensure we're setting the data object properly
				if (data && typeof data === 'object') {
					this.data = { ...data };
					console.log('📊 dataService.data set to:', this.data);
					console.log('🔍 Sample values - to20RFIDaily:', this.data.to20RFIDaily);
					console.log('🔍 Sample values - to20Donations:', this.data.to20Donations);
				} else {
					console.log('⚠️ Data is not an object:', data);
				}
			},
			(error) => {
				console.log('❌ There was an error getting the data:', error);
			}
		);
	}

	fetchAllData() {
		// Note: mLab is deprecated, consider migrating to MongoDB Atlas
		this.http.get(`${environment.apiUrl}/api/data-by-date?date=${this.myDate}`).subscribe(
			(data) => {
				this.allData = data ?? [];
				console.log(this.allData);

				const dataLength = this.allData?.length ?? 0;
				this.noData = dataLength === 0;
				this.brisbaneData = dataLength > 0 || !this.allData?.br18Riders;
			},
			(error) => {
				console.log('There was an error while getting all of the data.', error);
			}
		);
	}

	setData(data: any = null) {
		this.apiData.next(data ?? null);
		console.log('Setting data...');
	}

	toggleState() {
		this.state = this.state === 'active' ? 'inactive' : 'active';
	}
}
