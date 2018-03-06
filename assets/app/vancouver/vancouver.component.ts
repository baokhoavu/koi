import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-vancouver',
    templateUrl: './vancouver.component.html',
    styleUrls: ['./vancouver.component.scss']
})
export class VancouverComponent {

    data: any;

    constructor(private dataService: DataService) {
    	this.dataService.fetchData();
    }
}