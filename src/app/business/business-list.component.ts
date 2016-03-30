import {Component, OnInit} from 'angular2/core';
import {BusinessComponent} from './business.component';

@Component({
    selector: 'business-list',
    templateUrl: './app/business/business-list.component.html',
    directives: [BusinessComponent]
})

export class BusinessListComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}