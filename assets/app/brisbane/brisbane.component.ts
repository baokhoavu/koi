import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-brisbane',
    templateUrl: './brisbane.component.html',
    styleUrls: ['./brisbane.component.scss']
})
export class BrisbaneComponent {

    data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }
}
