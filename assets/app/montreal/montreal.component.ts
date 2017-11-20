import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-montreal',
    templateUrl: './montreal.component.html',
    styleUrls: ['./montreal.component.css']
})
export class MontrealComponent {
	
	data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }

}