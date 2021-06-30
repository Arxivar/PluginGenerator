enum IConfigurationDataType {
	String = 1,
	Int = 2,
	Datetime = 3,
	Bool = 4,
	Decimal = 5
}

type IConfiguration = { name: string, dataType: IConfigurationDataType, value?: string | number | boolean, defaultValue?: string | number | boolean };
class <%= props.pluginname %> {
	viewerMode: boolean;
	enableSave: ({ enable }: { enable: boolean }) => void;
	configuration: IConfiguration[];
	readonly saver: { onSave: () => IConfiguration[] };
	constructor(readonly _<%= props.dependenciesType.join(', ') %>) {
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
		},
		controllerAs: 'ctrl',
		controller: ['_', <%- props.dependenciesString.join(', ') %><%= props.pluginname %>],
		template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'"> 
				</div>
		`
	});
