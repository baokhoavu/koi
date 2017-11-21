import { Component } from "@angular/core";
import { DataService } from './../data.service';

@Component({
    selector: 'app-alberta',
    templateUrl: './alberta.component.html',
    styleUrls: ['./alberta.component.scss']
})
export class AlbertaComponent {
	data: any;

    constructor(private dataService: DataService) {
    	dataService.apiData$.subscribe(data => this.data = data)
    }

}