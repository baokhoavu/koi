import { Component } from "@angular/core";
import { DataService } from './../data.service';

import * as $ from 'jquery';


@Component({
    selector: 'app-toronto',
    templateUrl: './toronto.component.html',
    styleUrls: ['./toronto.component.css'],
    providers: [DataService]
})
export class TorontoComponent {

    constructor(private dataService: DataService) {
    }
}