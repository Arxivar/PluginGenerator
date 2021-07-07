'use strict';

var pluginId = '<%= props.id %>';
class <%= props.pluginname %> {
  constructor(<%- props.linkServicesFront.join(', ') %>) {
    this._ = _;
  }

  $onInit() {}

  $onDestroy() {}

}

angular.module('arxivar.pluginoperations').component('<%= props.id.split("-").join("").toLowerCase() %>', {
  bindings: {
    configuration: '<',
    enableSave: '&',
    saver: '<',
	viewerMode: '<',
  },
  controllerAs: 'ctrl',
  controller: [<%- props.linkServicesFrontString.join(', ') %>,<%= props.pluginname %>],
  template: `
				<div ng-include="'<%= props.id.split('-').join('').toLowerCase() %>.html'">
				</div>
		`
});
