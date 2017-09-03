import { BehaviorSubject } from 'rxjs/Rx';
import {Injectable} from "@angular/core";
import { Subject } from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SharedService{
    private searchQuerySubject = new BehaviorSubject<string>('');

    getSearchQuery(){
        return this.searchQuerySubject.asObservable();
    }

    setSearchQuery(value: string){
        this.searchQuerySubject.next(value);
    }
}