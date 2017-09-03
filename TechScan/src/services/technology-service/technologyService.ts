import { githubUrl } from '../../constant/http-constant';

import { Injectable } from '@angular/core';
import { MyHttpService } from "../my-http-service/http.service";

@Injectable()
export class TechnologyService {
    clientId = '523727f01ed822e5838b';
    clientSecret = 'f7182d2ad203b70ea8aa8c3ad033e27f4d3267ef'


    constructor(private myHttpService:MyHttpService) { }

    getLanguageRepo(searchQuery:string,languageName:string,pageNumber,repoPerPage){
        if(searchQuery !== ''){
          searchQuery = searchQuery+'&';
        }
        let url = githubUrl.repositoriesSearch + '?q='+searchQuery+'language:'+languageName + '&page='+pageNumber+'&per_page='+repoPerPage + '&sort=stars&order=desc' + '&client_id='+this.clientId+'&client_secret='+this.clientSecret;
        return this.myHttpService.get(url);
       
    }
    download(url:string){
     this.myHttpService.get(url).subscribe(res => {
         window.open(res[0].zipball_url);
     })
    }
}