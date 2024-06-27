import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";



@Injectable({
    providedIn: 'root'
})

export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>('en')
    currentLanguageSubject$ = this.currentLanguageSubject.asObservable();

    constructor(private translate: TranslateService) {
        this.translate.addLangs(['en', 'es']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    changeLanguage(event: Event): void {
        const target = event.target as HTMLSelectElement;
        const language = target.value;
        this.translate.use(language);
        this.currentLanguageSubject.next(language);
    }
}