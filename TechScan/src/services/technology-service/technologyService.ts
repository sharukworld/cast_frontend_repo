import { githubUrl } from '../../constant/http-constant';

import { Injectable } from '@angular/core';
import { MyHttpService } from "../my-http-service/http.service";

@Injectable()
export class TechnologyService {
    
    constructor(private myHttpService:MyHttpService) { }

    getLanguageCount(searchQuery:string,languageName:string){
        let url = githubUrl.repositoriesSearch + '?q='+searchQuery+'language:'+languageName;
        this.myHttpService.get(url).subscribe(res => {
            console.error(res);
        })
       
    }
}