## generator-angular-crud

generator-angular-crud is a yeoman generator based on the great John Papa's [hottowel generator](https://github.com/johnpapa/generator-hottowel). This generator generates the code using the [Angular Style Guide](https://github.com/johnpapa/angular-styleguide) written by John Papa. The generated code is based in a proven structure and conventions for developing Angular applications.

**generator-angular-crud** allows creating entities and CRUD operations very productively.

Currently, this generator is adapted for working with a Sails backend, although it's very easy to adapt it for working with whatever backend.

The generator allows creating entities automatically in a table form from where you can create, read, update and remove each database record.

## Backend with Sails

At first place, you will have to create your API with Sails. However, when you get a list of records, Sails won't give you information regarding the total records, so you can't paginate properly. For example, if I request this: http://localhost:1337/customer, I get the following information:

```
[
  {
    code: 'customer 1'
  },
  {
    code: 'customer 2'
  },
  {
    code: 'customer 3'
  }
]
```

But if I have to paginate I need information regarding the total number of records. So, I have to override the **find** blueprint. To do this, you have to copy from this project the file [sails/api/blueprints/find.js](https://raw.githubusercontent.com/jlmonteagudo/generator-hottowel-table/master/sails/api/blueprints/find.js) into your **ROOT_PROJECT/api/blueprints/find.js**. Now, if I request this: http://localhost:1337/customer, I will get the following information:

```
{
  total: 1000,
  results: [
    {
      code: 'customer 1'
    },
    {
      code: 'customer 2'
    },
    {
      code: 'customer 3'
    }
  ]
}
```

With this object we have all the information that we need to paginate.

Next steps that you have to do with Sails are:

* npm install lodash --save
* update config/models to enable the following parameter:  **migrate: 'alter'**
* update config/cors to set **allRoutes: true** and **origin: '*'**
* generate your api with **sails generate api <module-name>**

## Frontend Quickstart

You will need to install generator-angular-crud:

```
$ npm install -g generator-angular-crud
```

You have to create a new folder for your project and from this folder you will generate your application:

```
$ yo angular-crud
```

Next, you will create a new feature, a customer, for example:

```
$ yo angular-crud:feature <customer>
```

This will create an AngularJS application supporting full CRUD functionality.

This subgenerator will create an entity with two properties called 'name' and 'street'. If we want to add new properties to our entity, we weed to follow these steps:

* Add new properties to the angular-formly array properties in src/client/app/**feature-name**/services/**feature-name**.form.client.service.js
* Add new columns for the new properties in the HTML table in src/client/app/**feature-name**/views/list.html


## TODO

* Improve validation errors returned by the server
* Websockets to get realtime notifications
* Adaptors for different backends (Firebase, Backand, ...)
* Testing

## License

MIT
