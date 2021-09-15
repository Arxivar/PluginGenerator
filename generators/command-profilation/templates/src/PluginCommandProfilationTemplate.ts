import { LoDashStatic } from 'lodash';

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginProfilation', <% - props.dependenciesString.join(', ') %> 'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService',
	(PluginProfilation: IPluginProfilation <%= props.dependenciesType.join(', ') %>, arxivarResourceService: IArxivarResourceService, arxivarUserServiceCreator: IArxivarUserServiceCreator, arxivarRouteService: IArxivarRouteService, arxivarDocumentsService: IArxivarDocumentsService, arxivarNotifierService: IArxivarNotifierService) => {

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

const myPlugin = new PluginProfilation(requiredSettings, customSettings, userSettings);

<%= props.explanations.pluginCommandProfilation.canRun %>
	myPlugin.canRun = (params) => {
		return params.hasOwnProperty('fields') ? Promise.resolve(params.fields.length >= 1) : Promise.resolve(false);
	};

<%= props.explanations.pluginCommandProfilation.run %>
	myPlugin.run = (params) => {
		return myPlugin.canRun(params)
			.then((canRun) => {
				if (canRun) {
					//return all fields to update
					return [];
				}
				return null;
			});
	};


return { plugin: myPlugin };
}]);

