import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
// import { HttpClient, Http, Response, Headers, RequestOptions } from "@angular/http";
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
	data: any = {};

	interval: any;

	private apiData = new BehaviorSubject<any>(null);
	public apiData$ = this.apiData.asObservable();

	constructor(private http: HttpClient) {
	}

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
		this.http.get('/api/data')
			.subscribe(
				(data) => {
				console.log('Fetching data...');
				// console.log(data.json());
				this.data = data;
				// console.log(this.data);
			}, (error) => {
				console.log('There was an error getting the data.')
			});
	}

	setData(data) {
		this.apiData.next(data);
		console.log('Setting data...')
	}

}
