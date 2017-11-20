import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-vancouver',
    templateUrl: './vancouver.component.html',
    styleUrls: ['./vancouver.component.css']
})
export class VancouverComponent {

    data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }
}