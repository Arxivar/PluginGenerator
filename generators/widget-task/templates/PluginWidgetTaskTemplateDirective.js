/* eslint-disable angular/di-unused */

angular.module('arxivar.plugins.directives').directive('<%= props.pluginname.toLowerCase() %>directive', [
	'pluginService', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', '<%= props.pluginname %>',
	function (pluginService<%= props.dependencies.join(', ') %>, arxivarResourceService, arxivarUserServiceCreator, arxivarRouteService, arxivarDocumentsService, arxivarNotifierService, <%= props.pluginname %>){
    return {
        restrict: 'E',
        scope: {
            taskDto: '=?'
        },
        templateUrl: './Scripts/plugins/<%= props.pluginname %>/<%= props.pluginname %>.html',
        link: function(scope, element) {
			// eslint-disable-next-line es5/no-es6-methods
            var $mainContainer = element.find('div.arx-' + <%= props.pluginname %>.plugin.name.toLowerCase());
            if ($mainContainer.length > 0) {
                $mainContainer.addClass(scope.instanceId);
            }

            
        }
    };
}]);
