'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the unreal ' + chalk.red('AngularCrud') + ' generator!\n' +
      'Generating ' + this.appname + ' Application...'
    ));


    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.appName = this.props.name;

      done();
    }.bind(this));

  },


  packageFiles: function () {
    this.copy('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_gulpfile.js', 'gulpfile.js');
    this.template('_gulp.config.js', 'gulp.config.js');
    this.template('_karma.conf.js', 'karma.conf.js');
    this.template('_README.md', 'README.md');
  },

  assets: function () {
    this.copy('gulp.png', 'gulp.png');
  },

  testRunnerFiles: function () {
    this.template('src/client/_specs.html', 'src/client/specs.html');
  },

  appFiles: function () {
    this.directory('src/client/app');
    this.directory('src/client/images');
    this.directory('src/client/styles');
    this.directory('src/client/test-helpers');

    this.template('src/client/_index.html', 'src/client/index.html');

    this.template('src/server/_app.js', 'src/server/app.js');
    this.template('src/server/_data.js', 'src/server/data.js');
    this.template('src/server/_routes.js', 'src/server/routes.js');
    this.directory('src/server/utils');
    this.copy('src/server/favicon.ico');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('jscsrc', '.jscsrc');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
  },

  install: function () {
    this.installDependencies();
  }

});
