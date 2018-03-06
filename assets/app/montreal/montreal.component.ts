import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-montreal',
    templateUrl: './montreal.component.html',
    styleUrls: ['./montreal.component.scss']
})
export class MontrealComponent {
	
	data: any;

    constructor(private dataService: DataService) {
    	this.dataService.fetchData();
    }

}