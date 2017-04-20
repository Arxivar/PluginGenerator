angular.module('arxivar.plugins.directives').directive('testtaskdirective', ['testTask', 'pluginService', function(testTask, pluginService ) {
    return {
        restrict: 'E',
        scope: {
            taskDto: '=?'
        },
        templateUrl: './Scripts/plugins/testTask/testTask.html',
        link: function(scope, element, attrs, ctrls) {
            var $mainContainer = $(element).find('div.arx-' + testTask.plugin.name.toLowerCase());
            if ($mainContainer.length > 0) {
                $mainContainer.addClass(scope.instanceId);
            }


        }
    };
}]);
