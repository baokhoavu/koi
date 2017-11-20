import { Component } from "@angular/core";
import { DataService } from "./../data.service";

@Component({
    selector: 'app-perth',
    templateUrl: './perth.component.html',
    styleUrls: ['./perth.component.css']
})
export class PerthComponent {

    data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }

}