angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['$q', 'PluginCommand', <%- props.dependenciesString.join(', ') %> function ($q, PluginCommand<%= props.dependencies.join(', ') %>) {
	
	<%= props.explanations.requiredSettings.MAIN %>
    var requiredSettings = {
        id: '<%= props.id %>',  <%= props.explanations.requiredSettings.id %>
        name: '<%= props.pluginname %>', <%= props.explanations.requiredSettings.pluginname %>
        label: '<%= props.label %>', <%= props.explanations.requiredSettings.label %>
        description: '<%= props.description %>', <%= props.explanations.requiredSettings.description %>
        author: '<%= props.author %>', <%= props.explanations.requiredSettings.author %>
        minVersion: '<%= props.minVersion %>', <%= props.explanations.requiredSettings.minVersion %>
		requireRefresh: <%= props.requireRefresh %> <%= props.explanations.requiredSettings.requireRefresh %>
    };
	
	<%= props.explanations.customSettings.MAIN %>
	var customSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
	<%= props.explanations.userSettings.MAIN %>
	var userSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
    var myPlugin = new PluginCommand(requiredSettings, customSettings, userSettings);
	
	<%= props.explanations.pluginCommand.canRun %>
    myPlugin.canRun = function(docnumbers) {
	    return params.hasOwnProperty('docnumbers') ? $q.when(params.docnumbers.length >= 1) : $q.resolve(false);
    };
	
	<%= props.explanations.pluginCommand.run %>
    myPlugin.run = function(docnumbers) {
		return myPlugin.canRun(docnumbers).then(function(canRun){
			if(canRun){
				alert('Hello <%= props.label %>');
			}
		});
    };


    return { plugin: myPlugin };
}]);
