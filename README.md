# Angular Material Skeleton

A complete AngularJS skeleton application using [Angular Material](https://material.angularjs.org/) library.

## Features
1. JSON API Sanitizer - I have implemented a [JSON API](http://jsonapi.org) response sanitizer to convert the returned JSON data into a more retrievable format.
2. `AbstractRepository` - A rich base repository service to extend other repositories. All CRUD functionality including pagination is implemented in the `AbstractRepository`. An `ngResource` object is injected into the resource to handle the requests.
3. Gulp - Gulp tasks to compile all the application codes, templates, styles and vendor codes.
