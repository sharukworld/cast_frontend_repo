import { Language } from '../../components/language-repo-side-card/model/language-model';
import { Repository } from './model/repository-model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TechnologyService } from "../../services/technology-service/technologyService";
import { TechnologyConstant } from "../../constant/technology-constant";
import { SharedService } from "../../services/share-service/share.servie";


@Component({
    selector: 'cast-repolisting',
    templateUrl: 'repositorylisting-page.html',
    styleUrls : ['./repositorylisting-page.scss']
})
export class RepositoryListingComponent implements OnInit {

    constructor(private route: ActivatedRoute, private technologyService: TechnologyService,  private sharedService: SharedService) { }
    private sub: any;
    languageName: string = '';
    pageNumber = 1;
    numberPerPage = 9;
    searchString = '';
    repoList = {
        total_count : 0,
        items : new Array<Repository>(),
    };

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.languageName = params['name'];
            this.getRepoList();
        });
         this.sharedService.getSearchQuery().subscribe(
        data => {this.searchString = data;
        this.getRepoList();}
      );
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getRepoList() {
        this.technologyService.getLanguageRepo(this.searchString, this.languageName, this.pageNumber, this.numberPerPage).subscribe(
            res => {
                this.repoList = res;
            }

        )
    }
    paginate(event){
        this.pageNumber = event.page+1;
        this.getRepoList();
    }
    download(url:string){
     this.technologyService.download(url);
    }
  languageList:Array<Language> = TechnologyConstant.technologyList;
}