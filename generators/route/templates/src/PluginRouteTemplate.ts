const routeFactory = (PluginRoute: IPluginRoute) => {
    // MANDATORY settings in order for the plugin to work.
	<%= props.explanations.requiredSettings.MAIN %>
    const requiredSettings: IRequiredSettings = {
        id: '<%= props.id %>', <%= props.explanations.requiredSettings.id %>
        name: '<%= props.pluginname %>', <%= props.explanations.requiredSettings.pluginname %>
        icon: '<%= props.icon %>', <%= props.explanations.requiredSettings.icon %>
        label: '<%= props.label %>', <%= props.explanations.requiredSettings.label %>
        description: '<%= props.description %>', <%= props.explanations.requiredSettings.description %>
        author: '<%= props.author %>', <%= props.explanations.requiredSettings.author %>
        minVersion: '<%= props.minVersion %>', <%= props.explanations.requiredSettings.minVersion %>
		useTypescript: <%= props.typescript %> <%= props.explanations.requiredSettings.useTypescript %>
    };

    // OPTIONAL settings. These objects require the following properties: name, description, defaultValue and type.
    // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format
    <%= props.explanations.customSettings.MAIN %>
	const customSettings: ICustomSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];

    // OPTIONAL settings for specific users. These objects require the following properties: name, description, defaultValue and type.
    // Allowed types are: string, number, boolean or date (Date type is a string UTC ISO 8601 (https://it.wikipedia.org/wiki/ISO_8601) format
	<%= props.explanations.userSettings.MAIN %>
   const userSettings: IUserSettings[] = [
        //{name: '', description: '', defaultValue:'', type: 'string'},
    ];

    const myPlugin = new PluginRoute(requiredSettings, customSettings, userSettings);
    return { plugin: myPlugin };
};

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginRoute',routeFactory ]);

export type routeType = ReturnType<typeof routeFactory>
