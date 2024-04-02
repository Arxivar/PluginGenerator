/* eslint-disable no-useless-constructor */
'use strict';

const pluginId = '<%= props.id %>';
class <%= props.pluginname %> {
	constructor(<%- props.linkServicesFrontJs.join(', ') %>) {
	<% for (var i = 0; i < props.linkServicesFrontJs.length; i++) { %>
		this.<%- props.linkServicesFrontJs[i] %> = <%- props.linkServicesFrontJs[i] %>;
		<% } %>	
  }

$onInit() { }

$onDestroy() { }

}

angular.module('arxivar.pluginoperations').component('<%= props.id.split("-").join("").toLowerCase() %>', {
	bindings: {
		configuration: '<',
		enableSave: '&',
		saver: '<',
		viewerMode: '<',
		diagramId: '<'
	},
	controllerAs: 'ctrl',
	controller: [<%- props.linkServicesFrontString.join(', ') %><%= props.pluginname %>],
	template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'">
				</div>
		`
});
