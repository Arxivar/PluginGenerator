angular.module('arxivar.plugins.directives').directive('<%= props.pluginname.toLowerCase() %>directive', ['<%= props.pluginname %>', 'pluginService', <%- props.dependenciesString.join(', ') %>function(<%= props.pluginname %>, pluginService <%= props.dependencies.join(', ') %>) {
    return {
        restrict: 'E',
        scope: {
            instanceId: '@',
            desktopId: '=?'
        },
        templateUrl: './Scripts/plugins/<%= props.pluginname %>/<%= props.pluginname %>.html',
        link: function(scope, element, attrs, ctrls) {
            var $mainContainer = $(element).find('div.arx-' + <%= props.pluginname %>.plugin.name.toLowerCase());
            if ($mainContainer.length > 0) {
                $mainContainer.addClass(scope.instanceId);
            }


        }
    };
}]);
