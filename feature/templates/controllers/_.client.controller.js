(function () {
    'use strict';

    angular
        .module('app.<%= camelizedSingularName %>')
        .controller('<%= featureSingularName %>Controller', <%= featureSingularName %>Controller);

    <%= featureSingularName %>Controller.$inject = ['logger',
        '$stateParams',
        '$location',
        '<%= featureSingularName %>',
        'TableSettings',
        '<%= featureSingularName %>Form'];
    /* @ngInject */
    function <%= featureSingularName %>Controller(logger,
        $stateParams,
        $location,
        <%= featureSingularName %>,
        TableSettings,
        <%= featureSingularName %>Form) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(<%= featureSingularName %>);
        vm.<%= camelizedSingularName %> = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = <%= featureSingularName %>Form.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new <%= featureSingularName %> object
            var <%= camelizedSingularName %> = new <%= featureSingularName %>(vm.<%= camelizedSingularName %>);

            // Redirect after save
            <%= camelizedSingularName %>.$save(function(response) {
                logger.success('<%= featureSingularName %> created');
                $location.path('<%= slugifiedName %>/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing <%= featureSingularName %>
        vm.remove = function(<%= camelizedSingularName %>) {

            if (<%= camelizedSingularName %>) {
                <%= camelizedSingularName %> = <%= featureSingularName %>.get({<%= camelizedSingularName %>Id:<%= camelizedSingularName %>.id}, function() {
                    <%= camelizedSingularName %>.$remove(function() {
                        logger.success('<%= featureSingularName %> deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.<%= camelizedSingularName %>.$remove(function() {
                    logger.success('<%= featureSingularName %> deleted');
                    $location.path('/<%= slugifiedName %>');
                });
            }

        };

        // Update existing <%= featureSingularName %>
        vm.update = function() {
            var <%= camelizedSingularName %> = vm.<%= camelizedSingularName %>;

            <%= camelizedSingularName %>.$update(function() {
                logger.success('<%= featureSingularName %> updated');
                $location.path('<%= slugifiedName %>/' + <%= camelizedSingularName %>.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toView<%= featureSingularName %> = function() {
            vm.<%= camelizedSingularName %> = <%= featureSingularName %>.get({<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id});
            vm.setFormFields(true);
        };

        vm.toEdit<%= featureSingularName %> = function() {
            vm.<%= camelizedSingularName %> = <%= featureSingularName %>.get({<%= camelizedSingularName %>Id: $stateParams.<%= camelizedSingularName %>Id});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated <%= featureSingularName %> View');
        }
    }

})();
