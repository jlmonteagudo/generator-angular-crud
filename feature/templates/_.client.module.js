(function () {
    'use strict';

    angular.module('app.<%= camelizedSingularName %>', []);
    angular.module('app').requires.push('app.<%= camelizedSingularName %>');

})();
