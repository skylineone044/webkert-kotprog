# SkylineForms

## Ha a következő hiba lép fel:

```
Error: node_modules/@firebase/auth/dist/auth-public.d.ts:3137:22 - error TS2304: Cannot find name 'PhoneOrOauthTokenResponse'.

3137     _tokenResponse?: PhoneOrOauthTokenResponse;
                          ~~~~~~~~~~~~~~~~~~~~~~~~~


Error: node_modules/@firebase/auth/dist/auth-public.d.ts:3429:11 - error TS2304: Cannot find name 'UserInternal'.

3429     user: UserInternal;
               ~~~~~~~~~~~~




** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✖ Failed to compile.
```

Akor a `node_modules/@firebase/auth/dist/auth-public.d.ts` filet cseréld ki a `./hotfix/auth-public.d.ts` filera

## Ha futtatni szeretnéd,
akkor az én adatbázisomhoz való csatlakozáshoz szügséges fileok a `./firebase_creds/` mappában megtalálod.

## Lehet
regisztrálni, bejelentkezni, formot kitölteni, Kijelentkezni

A form adatokat nem lehet az alkalmazásból megtekinteni

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## pontozás

### Adatmodell definiálása (legalább 4 TypeScript interfész vagy class formájában (ugyanennyi kollekció))

`./src/app/shared/models/` mappában

### Legalább 2 különböző attribútum direktíva használata

nincs

### Legalább 2 különböző strukturális direktíva használata

ngFor: `./src/app/pages/questionnaires/fill-form/fill-form.component.html:12`

ngIf: `./src/app/pages/questionnaires/fill-form/fill-form.component.html:15`

### Adatátadás szülő és gyermek komponensek között (legalább 1 @Input és 1 @Output)

Input: `./src/app/shared/menu/menu.component.ts:10`

Output: `./src/app/shared/menu/menu.component.ts:12`


### Legalább 10 különböző Material elem helyes használata.

`./src/app/pages/questionnaires/fill-form/fill-form.component.html`

`./src/app/pages/login/login.component.html`

`./src/app/shared/menu/menu.component.html`

### Adatbevitel Angular form-ok segítségével megvalósítva (legalább 2)

`./src/app/pages/login/login.component.html`

`./src/app/pages/signup/signup.component.html`

`./src/app/pages/questionnaires/fill-form/fill-form.component.html`

### Legalább 1 saját Pipe osztály írása és használata

`./src/app/shared/pipes/date-format.pipe.ts`


### Legalább 2 különböző Lifecycle Hook használata a teljes projektben (értelmes tartalommal, nem üresen)

csak ngOnInit van
`./src/app/pages/questionnaires/fill-form/fill-form.component.html`

### CRUD műveletek mindegyike megvalósult (Promise, Observable használattal)

`./src/app/pages/questionnaires/fill-form/fill-form.component.ts`

`./src/app/shared/services/questionnaire.service.ts`

`./src/app/shared/services/user.service.ts`

### CRUD műveletek service-ekbe vannak kiszervezve és megfelelő módon injektálva lettek

`./src/app/shared/services/questionnaire.service.ts`

`./src/app/shared/services/user.service.ts`

### Firestore adatbázis használata az adatokhoz (integráció, környezeti változók használata helyes legyen)

`./src/app/app.module.ts`

`./src/app/shared/services/questionnaire.service.ts`

`./src/app/shared/services/user.service.ts`

### Legalább 2 komplex Firestore lekérdezés megvalósítása (ide tartoznak: where feltétel, rendezés, léptetés, limitálás)

`./src/app/shared/services/questionnaire.service.ts`

### Legalább 4 különböző route a különböző oldalak eléréséhez

`./src/app/app-routing.module.ts`: main, fill-form, contact, not-found, login, signup

### Legalább 2 route levédése azonosítással (AuthGuard) (ahol ennek értelme van, pl.: egy fórum témakör megtekinthető bárki számára, de a regisztrált felhasználó adatai nem)

`./src/app/app-routing.module.ts`: main, fill-form

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
