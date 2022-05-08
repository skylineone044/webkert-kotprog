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
