import {Component} from 'angular2/core';
import {SearchComponent} from './search/search.component';
import {BusinessListComponent} from './business/business-list.component';
@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    directives: [SearchComponent, BusinessListComponent]
})
export class AppComponent { }