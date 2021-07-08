[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarUserServiceCreator](../modules/arxivaruserservicecreator.md) / ArxivarUserServiceCreator

# Class: ArxivarUserServiceCreator

[ArxivarUserServiceCreator](../modules/arxivaruserservicecreator.md).ArxivarUserServiceCreator

This module contains the essential methods to retrieve the information of the user currently logged into ARXivar.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarUserServiceCreator',
	function(arxivarUserServiceCreator) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				arxivarUserServiceCreator.create().then((userService) => {
					scope.userId = userService.getUserId();
				});
			}
		};
	}
]);
```

## Implements

- [*IArxivarUserServiceCreator*](../interfaces/interfaces.iarxivaruserservicecreator.md)

## Table of contents

### Methods

- [create](arxivaruserservicecreator.arxivaruserservicecreator-1.md#create)

## Methods

### create

▸ **create**(): *Promise*<[*UserService*](userservice.userservice-1.md)\>

Create the UserService

**Returns:** *Promise*<[*UserService*](userservice.userservice-1.md)\>

Implementation of: IArxivarUserServiceCreator.create
