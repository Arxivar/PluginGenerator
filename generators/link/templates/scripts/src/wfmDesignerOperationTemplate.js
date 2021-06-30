'use strict';

class <%= props.pluginname %> {
  constructor(_<%= props.dependencies.join(', ') %>) {
    this._ = _;
  }

  $onInit() {}

  $onDestroy() {}

}

angular.module('arxivar.pluginoperations').component('<%= props.id.split("-").join("").toLowerCase() %>', {
  bindings: {
    configuration: '<',
    enableSave: '&',
    saver: '<'
  },
  controllerAs: 'ctrl',
  controller: ['_', <%- props.dependenciesString.join(', ') %><%= props.pluginname %>],
  template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'">
				</div>
		`
});
