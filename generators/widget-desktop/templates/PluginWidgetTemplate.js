angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginWidget', function (PluginWidget) {
    <%= props.explanations.requiredSettings.MAIN %>
    var requiredSettings = {
        id: '<%= props.id %>', <%= props.explanations.requiredSettings.id %>
        name: '<%= props.pluginname %>', <%= props.explanations.requiredSettings.pluginname %>
        icon: '<%= props.icon %>', <%= props.explanations.requiredSettings.icon %>
        label: '<%= props.label %>', <%= props.explanations.requiredSettings.label %>
        description: '<%= props.description %>', <%= props.explanations.requiredSettings.description %>
        author: '<%= props.author %>', <%= props.explanations.requiredSettings.author %>
        minVersion: '<%= props.minVersion %>', <%= props.explanations.requiredSettings.minVersion %>
		useTypescript: <%= props.typescript %> <%= props.explanations.requiredSettings.useTypescript %>
    };

    <%= props.explanations.customSettings.MAIN %>
	var customSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];

    <%= props.explanations.userSettings.MAIN %>
	var userSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
    var myPlugin = new PluginWidget(requiredSettings, customSettings, userSettings);
    return { plugin: myPlugin };
}]);
