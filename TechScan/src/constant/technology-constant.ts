import { Language } from "../components/language-repo-side-card/model/language-model";

export class TechnologyConstant {

    static get technologyList():Array<Language> {
        return [{ languageName: 'Java', logoAddress:'https://its.inside.tru.ca/files/2013/02/java.png' ,count:0},
        { languageName: 'Python' , logoAddress:'http://www.ammeon.com/wp-content/uploads/2015/05/python-logo.png',count:0 }, 
        { languageName: 'JavaScript' , logoAddress:'assets/image/technology/javascript.png',count:0 }, 
        { languageName: 'Php', logoAddress:'http://php.net/manual/en/images/c0d23d2d6769e53e24a1b3136c064577-php_logo.png',count:0  }
    ];
    }
}