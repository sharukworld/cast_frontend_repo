import { Language } from './model/language-model';

import { Component, Input, OnInit } from '@angular/core';
import { MyHttpService } from "../../services/my-http-service/http.service";

@Component({
    selector: 'cast-card-language-count-list',
    templateUrl: 'language-repo-side-card.html'
})
export class LanguageRepoCountComponent implements OnInit {

    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() { 

    }
    @Input() languageList:Array<Language>; 

}