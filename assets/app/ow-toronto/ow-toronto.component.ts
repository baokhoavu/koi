import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-ow-toronto',
    templateUrl: './ow-toronto.component.html',
    styleUrls: ['./ow-toronto.component.scss']
})
export class OWTorontoComponent {

    data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }
}