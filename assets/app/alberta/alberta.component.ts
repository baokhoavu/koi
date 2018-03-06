import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-alberta',
    templateUrl: './alberta.component.html',
    styleUrls: ['./alberta.component.scss']
})
export class AlbertaComponent implements OnInit, AfterViewInit {
	@ViewChild('datePicker') datePicker: ElementRef;

	data: any = {};

	startDate = new Date(2017, 10, 1);

    constructor(private dataService: DataService) {
    }

    ngOnInit() { 
    	this.dataService.fetchData();
    }

    ngAfterViewInit() {
    	// this.datePicker.nativeElement.value = '11/20/2017';
	    // console.log(this.datePicker.nativeElement.value);
	}

	logValue() {
		// console.log(this.datePicker.nativeElement.value);
	}

}