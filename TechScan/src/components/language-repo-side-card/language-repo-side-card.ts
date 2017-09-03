import { ActivatedRoute } from '@angular/router';
import { TechnologyService } from '../../services/technology-service/technologyService';
import { Language } from './model/language-model';

import { Component, Input, OnInit } from '@angular/core';
import { MyHttpService } from "../../services/my-http-service/http.service";

@Component({
    selector: 'cast-card-language-count-list',
    templateUrl: 'language-repo-side-card.html',
    styleUrls: ['./language-model-side-card.scss']
})
export class LanguageRepoCountComponent implements OnInit {

    constructor(private myHttpService:MyHttpService, private technologyService: TechnologyService, private route: ActivatedRoute,) { }
  sub:any;
    ngOnInit() { 
        this.sub = this.route.params.subscribe(params => {
            this.selectedLanguage = params['name'];
        });

    }
    selectedLanguage : string = '';
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