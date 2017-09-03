export class Repository {
    name: string = '';
    owner: Owner = new Owner();
    description : string = '';
    stargazers_count:number;
    full_name:string ='';
    tags_url:string = '';
}
class Owner {
id : number =0;
avatar_url: string = '';
url: string = '';

}