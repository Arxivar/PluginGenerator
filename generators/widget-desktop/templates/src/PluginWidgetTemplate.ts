const widgetFactory = (PluginWidget: IPluginWidget) => {
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

    <%= props.explanations.customSettings.MAIN %>
	const customSettings: ICustomSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];

    <%= props.explanations.userSettings.MAIN %>
	const userSettings: IUserSettings[] = [
	//{name: '', description: '', defaultValue:'', type: 'string'},
	];
	
    const myPlugin = new PluginWidget(requiredSettings, customSettings, userSettings);
    return { plugin: myPlugin };
};

angular.module('arxivar.plugins').factory('<%= props.pluginname %>', ['PluginWidget', widgetFactory ]);

export type widgetType = ReturnType<typeof widgetFactory>
