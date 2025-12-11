import { type AfterViewInit, Component, type ElementRef, type OnInit, ViewChild } from '@angular/core';
// MomentJS for date formatting
import * as _moment from 'moment';
import type { DataService } from '../data.service';

const moment = _moment;

@Component({
	selector: 'app-alberta',
	templateUrl: './alberta.component.html',
	styleUrls: ['./alberta.component.scss'],
	standalone: false,
})
export class AlbertaComponent implements OnInit, AfterViewInit {
	@ViewChild('datePicker') datePicker: ElementRef;

	data: any = {};

	startDate = new Date(2017, 10, 20);
	minDate = new Date(2017, 10, 20);
	maxDate = new Date();

	myDate: string;
	datePickerSelected: boolean = false;

	constructor(public dataService: DataService) {}

	ngOnInit() {
		this.dataService.fetchData();
	}

	ngAfterViewInit() {}

	logValue() {
		// Date picker value logging removed
	}

	// Function for listener event in the DOM to check for change in the date picker, to format that date so it can be retrieved from the database properly.
	dateChange() {
		this.dataService.myDate = moment(this.datePicker.nativeElement.value).format('L');
		this.dataService.fetchAllData();
		this.datePickerSelected = true;
	}
}
