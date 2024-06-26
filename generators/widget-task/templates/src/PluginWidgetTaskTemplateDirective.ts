/* eslint-disable angular/di-unused */
import {widgetType} from './<%= props.pluginname %>';
import { LoDashStatic } from 'lodash';

angular.module('arxivar.plugins.directives').directive('<%= props.pluginname.toLowerCase() %>directive', [
	'pluginService', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', '<%= props.pluginname %>', 
	(pluginService: IPluginService<%= props.dependenciesType.join(', ') %>, arxivarResourceService: IArxivarResourceService, arxivarUserServiceCreator: IArxivarUserServiceCreator, arxivarRouteService: IArxivarRouteService, arxivarDocumentsService: IArxivarDocumentsService, arxivarNotifierService: IArxivarNotifierService, <%= props.pluginname %>:widgetType) => {
	return {
		restrict: 'E',
		scope: {
			instanceId: '@',
			taskDto: '=?'
		},
		templateUrl: './Scripts/plugins/<%= props.pluginname %>/<%= props.pluginname %>.html',
		link: (scope: IScopeWidgetTask, element: JQuery) => {
			const $mainContainer = element.find('div.arx-' + <%= props.pluginname %>.plugin.name.toLowerCase());
			if ($mainContainer.length > 0) {
				$mainContainer.addClass(scope.instanceId);
			}

			
		}
	};
}]);
