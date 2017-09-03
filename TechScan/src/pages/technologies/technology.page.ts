import { TechnologyConstant } from '../../constant/technology-constant';
import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../services/technology-service/technologyService";
import { Language } from "../../components/language-repo-side-card/model/language-model";
import { SharedService } from "../../services/share-service/share.servie";

@Component({
    selector: 'cast-technology',
    templateUrl: 'technology.page.html',
    styleUrls: ['./technology.page.scss']
})
export class TechnologyPageComponent implements OnInit {

    constructor(private technologyService:TechnologyService, private sharedService: SharedService) { }
    searchString:string ='';
    ngOnInit() { 
    this.languageList = TechnologyConstant.technologyList;
    this.sharedService.getSearchQuery().subscribe(
        data => {this.searchString = data},
        err => console.log(err),
        () => console.log('finished')
      );
    }
    languageList:Array<Language> = [];


}
