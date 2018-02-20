import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-melbourne',
    templateUrl: './melbourne.component.html',
    styleUrls: ['./melbourne.component.scss']
})
export class MelbourneComponent {

    data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }
}