import { LoDashStatic } from 'lodash';

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', [
    'PluginCommand', <%- props.dependenciesString.join(', ') %>'arxivarResourceService', 'arxivarUserServiceCreator', 'arxivarRouteService', 'arxivarDocumentsService', 'arxivarNotifierService',
    ( PluginCommand: IPluginCommand<%= props.dependenciesType.join(', ') %>, arxivarResourceService: IArxivarResourceService, arxivarUserServiceCreator: IArxivarUserServiceCreator, arxivarRouteService: IArxivarRouteService, arxivarDocumentsService: IArxivarDocumentsService, arxivarNotifierService: IArxivarNotifierService) => {
	
	<%= props.explanations.requiredSettings.MAIN %>
    const requiredSettings: IRequiredSettings  = {
        id: '<%= props.id %>',  <%= props.explanations.requiredSettings.id %>
        name: '<%= props.pluginname %>', <%= props.explanations.requiredSettings.pluginname %>
        icon: '<%= props.icon %>', <%= props.explanations.requiredSettings.icon %>
        label: '<%= props.label %>', <%= props.explanations.requiredSettings.label %>
        description: '<%= props.description %>', <%= props.explanations.requiredSettings.description %>
        author: '<%= props.author %>', <%= props.explanations.requiredSettings.author %>
        minVersion: '<%= props.minVersion %>', <%= props.explanations.requiredSettings.minVersion %>
		requireRefresh: <%= props.requireRefresh %>, <%= props.explanations.requiredSettings.requireRefresh %>
		useTypescript: <%= props.typescript %> <%= props.explanations.requiredSettings.useTypescript %>
    };
	
	<%= props.explanations.customSettings.MAIN %>
	const customSettings: ICustomSettings[]  = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
	<%= props.explanations.userSettings.MAIN %>
	const userSettings: IUserSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
    const myPlugin = new PluginCommand(requiredSettings, customSettings, userSettings);
	
	<%= props.explanations.pluginCommand.canRun %>
    myPlugin.canRun = (params) => {
	    return params.hasOwnProperty('docnumbers') && params.docnumbers.length >= 1 ? Promise.resolve(true) : Promise.resolve(arxivarNotifierService.notifyWarning('Please select an item'));
    };
	
	<%= props.explanations.pluginCommand.run %>
    myPlugin.run = (params) => {
		return myPlugin.canRun(params).then((canRun) => {
			if(canRun){
				alert('Hello <%= props.label %>');
			}
		});
    };


    return { plugin: myPlugin };
}]);
