import { TechnologyConstant } from '../../constant/technology-constant';
import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../services/technology-service/technologyService";
import { Language } from "../../components/language-repo-side-card/model/language-model";

@Component({
    selector: 'cast-technology',
    templateUrl: 'technology.page.html',
    styleUrls: ['./technology.page.scss']
})
export class TechnologyPageComponent implements OnInit {

    constructor(private technologyService:TechnologyService) { }

    ngOnInit() { 
    this.languageList = TechnologyConstant.technologyList;
    this.technologyService.getLanguageCount('','java');
    }
    languageList:Array<Language> = [];


}
