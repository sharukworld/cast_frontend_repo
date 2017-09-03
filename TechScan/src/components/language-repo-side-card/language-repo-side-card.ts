import { TechnologyService } from '../../services/technology-service/technologyService';
import { Language } from './model/language-model';

import { Component, Input, OnInit } from '@angular/core';
import { MyHttpService } from "../../services/my-http-service/http.service";

@Component({
    selector: 'cast-card-language-count-list',
    templateUrl: 'language-repo-side-card.html'
})
export class LanguageRepoCountComponent implements OnInit {

    constructor(private myHttpService:MyHttpService, private technologyService: TechnologyService) { }

    ngOnInit() { 

    }
    @Input() languageList:Array<Language> =new Array<Language>(); 
    @Input() searchString: string = '';

    ngOnChanges(changes:any){
        this.updateCount();
    }
    updateCount(){
    this.languageList.forEach(language => {
        this.technologyService.getLanguageRepo(this.searchString,language.languageName,1,1).subscribe(
            res => {
                language.count = res.total_count;
            }
        );
    });

    }
}