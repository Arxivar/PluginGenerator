enum IConfigurationDataType {
	String = 1,
	Int = 2,
	Datetime = 3,
	Bool = 4,
	Decimal = 5
}

type IConfiguration = { name: string, dataType: IConfigurationDataType, value?: string | number | boolean | Date};
class <%= props.pluginname %> {
	viewerMode: boolean;
	enableSave: ({ enable }: { enable: boolean }) => void;
	configuration: IConfiguration[];
	readonly saver: { onSave: () => IConfiguration[] };
	// model:  IConfiguration & {defaultValue?: string | number | boolean | Date}[]
	constructor(<%= props.linkServicesFrontType.join(', ') %>) {
}

	$onInit(): void {
	}

	$onDestroy(): void {
	}
}

angular.module('arxivar.pluginoperations')
	.component('<%= props.id.split("-").join("").toLowerCase() %>', {
		bindings: {
			configuration: '<',
			enableSave: '&',
			saver: '<',
			viewerMode: '<',
		},
		controllerAs: 'ctrl',
		controller: [<%- props.linkServicesFront%>,<%= props.pluginname %>],
		template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'"> 
				</div>
		`
	});
