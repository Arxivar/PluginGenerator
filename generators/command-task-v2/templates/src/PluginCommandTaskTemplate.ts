/* eslint-disable angular/di-unused */
import { LoDashStatic } from 'lodash';

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', [
	'PluginCommandTask', <%- props.dependenciesString.join(', ') %> 'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService', 'taskV2PluginService',
	(PluginCommandTask: IPluginCommand<%= props.dependenciesType.join(', ') %>, arxivarResourceService: IArxivarResourceService, arxivarUserServiceCreator: IArxivarUserServiceCreator, arxivarRouteService: IArxivarRouteService, arxivarDocumentsService: IArxivarDocumentsService, arxivarNotifierService: IArxivarNotifierService, taskV2PluginService: ITaskV2PluginService) => {

	<%= props.explanations.requiredSettings.MAIN %>
    const requiredSettings: IRequiredSettings = {
		id: '<%= props.id %>',  <%= props.explanations.requiredSettings.id %>
		name: '<%= props.pluginname %>', <%= props.explanations.requiredSettings.pluginname %>
		icon: '<%= props.icon %>', <%= props.explanations.requiredSettings.icon %>
		label: '<%= props.label %>', <%= props.explanations.requiredSettings.label %>
		description: '<%= props.description %>', <%= props.explanations.requiredSettings.description %>
		author: '<%= props.author %>', <%= props.explanations.requiredSettings.author %>
		minVersion: '<%= props.minVersion %>', <%= props.explanations.requiredSettings.minVersion %>
		useTypescript: <%= props.typescript %> <%= props.explanations.requiredSettings.useTypescript %>
    };

<%= props.explanations.customSettings.MAIN %>
	const customSettings: ICustomSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
];

<%= props.explanations.userSettings.MAIN %>
	const userSettings: IUserSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
];

const myPlugin = new PluginCommandTask(requiredSettings, customSettings, userSettings);

<%= props.explanations.pluginCommandTask.canRun %>
	myPlugin.canRun = (params) => {
		if (params.hasOwnProperty('tasks') && params.tasks.length >= 1) {
			return Promise.resolve(true);
		} else {
			arxivarNotifierService.notifyWarning('Please select an item');
			return Promise.resolve(false);
		}
	};

//To properly update the grid, this function must return `true`.
<%= props.explanations.pluginCommandTask.run %>
	myPlugin.run = (params) => {
		return myPlugin.canRun(params).then((canRun) => {
			if (canRun) {
				alert('Hello <%= props.label %>');
			}
		});
	};


return { plugin: myPlugin };
}]);
