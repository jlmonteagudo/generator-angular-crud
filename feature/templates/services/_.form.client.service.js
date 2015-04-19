(function() {
    'use strict';

    angular
        .module('app.<%= camelizedSingularName %>')
        .factory('<%= featureSingularName %>Form', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'name',
                    type: 'input',
                    templateOptions: {
                        label: 'Name:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'address',
                    type: 'input',
                    templateOptions: {
                        label: 'Address:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
