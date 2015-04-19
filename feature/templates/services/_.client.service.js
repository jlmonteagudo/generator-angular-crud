(function() {
    'use strict';

    angular
        .module('app.<%= camelizedSingularName %>')
        .factory('<%= featureSingularName %>', <%= featureSingularName %>);

    <%= featureSingularName %>.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function <%= featureSingularName %>($resource, API_BASE_URL) {

        var params = {
            <%= camelizedSingularName %>Id: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/<%= camelizedSingularName %>/:<%= camelizedSingularName %>Id';

        return $resource(API_URL, params, actions);

    }

})();
