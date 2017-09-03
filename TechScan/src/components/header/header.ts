import { SharedService } from '../../services/share-service/share.servie';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cast-header',
    templateUrl: 'header.html',
     styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private sharedService: SharedService) { }
    searchString:string = ''
    ngOnInit() { 
    }
searchQueryUpdate(){
this.sharedService.setSearchQuery(this.searchString);
}
}