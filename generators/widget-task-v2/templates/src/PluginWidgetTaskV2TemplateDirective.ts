import {widgetType} from './<%= props.pluginname %>';
import { LoDashStatic } from 'lodash';

angular.module('arxivar.plugins.directives').directive('<%= props.pluginname.toLowerCase() %>directive', [
	'pluginService', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'workflowResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'taskV2PluginService', '<%= props.pluginname %>', 
	(pluginService<%= props.dependenciesType.join(', ') %>, arxivarResourceService: IArxivarResourceService, workflowResourceService: IWorkflowResourceService, arxivarUserServiceCreator: IArxivarUserServiceCreator, arxivarRouteService: IArxivarRouteService, arxivarDocumentsService: IArxivarDocumentsService, arxivarNotifierService: IArxivarNotifierService, taskV2PluginService: ITaskV2PluginService, <%= props.pluginname %>:widgetType) => {
	return {
		restrict: 'E',
		scope: {
			instanceId: '@',
			taskDto: '=?',
			widgetSettings: '=?'
		},
		templateUrl: './Scripts/plugins/<%= props.pluginname %>/<%= props.pluginname %>.html',
		link: (scope: IScopeWidgetTask, element, attrs, ctrls) => {
			const $mainContainer = element.find('div.arx-' + <%= props.pluginname %>.plugin.name.toLowerCase());
			if ($mainContainer.length > 0) {
				$mainContainer.addClass(scope.instanceId);
			}

			
		}
	};
}]);
