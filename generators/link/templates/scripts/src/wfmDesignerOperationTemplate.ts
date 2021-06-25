type IConfiguration = {name:string, type:string|number|boolean, value:string|number|boolean}; //any;
class <%= props.pluginname %> {
	viewerMode: boolean;                 
	enableSave: ({ enable }: { enable: boolean }) => void;
	configuration: IConfiguration;
	readonly saver: { onSave: () => {} };
	constructor(readonly _<%= props.dependenciesType.join(', ') %>) {
	}

	$onInit(): void {
	}

	$onDestroy(): void {
	}
}

angular.module('arxivar.pluginoperations')
	.component('<%= props.pluginname %>', {
		bindings: {
			configuration: '<',
			enableSave: '&',
			saver: '<',
		},
		controllerAs: 'ctrl',
		controller: ['_', <%- props.dependenciesString.join(', ') %><%= props.pluginname %>],
		template: `
				<div ng-include="<%= props.guid %>.html">
				</div>
		`
	});
