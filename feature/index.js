'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var inflections = require('underscore.inflections');


module.exports = yeoman.generators.Base.extend({

  constructor: function () {

    yeoman.generators.Base.apply(this, arguments);

    this.argument('featureName', { type: String, required: true });

    this.featureName = _.capitalize(this.featureName);
    this.featureSingularName = inflections.singularize(this.featureName);
    this.featurePluralName = inflections.pluralize(this.featureName);

    this.slugifiedName = _.kebabCase(this.featureName);

  	this.camelizedSingularName = _.camelCase(this.featureSingularName);
    this.camelizedPluralName = _.camelCase(this.featurePluralName);

  },

  prompting: function () {

    this.log(yosay(
      'Adding a new feature!'
    ));

  },


  featureFiles: function () {

    // Define file names
    var moduleFile = 'src/client/app/' + this.slugifiedName + '/' + this.slugifiedName + '.client.module.js';
    var configFile = 'src/client/app/' + this.slugifiedName + '/config/' + this.slugifiedName + '.client.routes.js';
    var controllerFile = 'src/client/app/' + this.slugifiedName + '/controllers/' + this.slugifiedName + '.client.controller.js';
    var serviceFile = 'src/client/app/' + this.slugifiedName + '/services/' + this.slugifiedName + '.client.service.js';
    var serviceFormFile = 'src/client/app/' + this.slugifiedName + '/services/' + this.slugifiedName + '.form.client.service.js';

    // Render angular module files
    this.template('_.client.module.js', moduleFile);
    this.template('config/_.client.routes.js', configFile);
    this.template('controllers/_.client.controller.js', controllerFile);
    this.template('services/_.client.service.js', serviceFile);
    this.template('services/_.form.client.service.js', serviceFormFile);

    // Render angular module views
    this.template('views/_.create.client.view.html', 'src/client/app/' + this.slugifiedName + '/views/create.html');
    this.template('views/_.edit.client.view.html', 'src/client/app/' + this.slugifiedName + '/views/edit.html');
    this.template('views/_.list.client.view.html', 'src/client/app/' + this.slugifiedName + '/views/list.html');
    this.template('views/_.view.client.view.html', 'src/client/app/' + this.slugifiedName + '/views/view.html');

  }

});
