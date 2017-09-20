# Lerna Angular-CLI Monorepo

Demonstrates using Angular CLI within a Lerna monorepo. Includes routing
to components in projects built as Angular libraries using
[`ng-packagr`](https://github.com/dherges/ng-packagr).

## Install and Run

- Install [lerna](https://lernajs.io/).
- Install dependencies
```
lerna bootstrap
```
- Build the Angular component library packages (using `ng-packagr`)
```
lerna run packagr
```
- Run the application
```
lerna run start --scope demo-app-main
```
