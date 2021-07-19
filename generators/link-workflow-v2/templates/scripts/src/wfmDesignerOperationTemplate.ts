/* eslint-disable no-useless-constructor */
import { ConfigurationDataTypeEnum } from "../Interfaces";

const pluginId = '<%= props.id %>';
class <%= props.pluginname %> {
	viewerMode: boolean;
	enableSave: ({ enable }: { enable: boolean }) => void;
	configuration: IConfiguration[];
	diagramId: string;
	readonly saver: { onSave: () => IConfiguration[] };
	// model:  (IConfiguration & {defaultValue?: string | number | boolean | Date})[]
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
			diagramId: '<'
		},
		controllerAs: 'ctrl',
		controller: [<%- props.linkServicesFrontString%><%= props.pluginname %>],
		template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'"> 
				</div>
		`
	});
