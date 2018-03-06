import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-toronto',
    templateUrl: './toronto.component.html',
    styleUrls: ['./toronto.component.scss']
})
export class TorontoComponent {

	data: any;

    constructor(private dataService: DataService) {
    	this.dataService.fetchData();
    }
}