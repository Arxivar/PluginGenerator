angular.module('arxivar.plugins').factory('testTask', ['PluginWidgetTask', function (PluginWidgetTask) {
    // MANDATORY settings in order for the plugin to work.
    var requiredSettings = {
        id: '90ae4e77-5c02-4614-bf98-291897a4e39b', // Unique plugin identifier (type: string)
        name: 'testTask', // Plugin name. Spaces and dots not allowed (type: string)
        label: 'testTask label', // User Interface label (type: string)
        description: 'testTask desc', // Plugin description (type: string)
        author: 'testTask author', // Plugin author (type: string)
        minVersion: '0.0.1' // Minimun portal version this plugin supports. (type: string, format example: 0.0.1)
    };

    // OPTIONAL settings. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format
	var customSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];

    // OPTIONAL settings for specific users. These objects require the following properties: name, description, defaultValue and type.
  // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format
	var userSettings = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];

    var myPlugin = new PluginWidgetTask(requiredSettings, customSettings, userSettings);
    return { plugin: myPlugin };
}]);