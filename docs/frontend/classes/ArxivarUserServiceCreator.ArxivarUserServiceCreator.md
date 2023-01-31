[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [ArxivarUserServiceCreator](../modules/ArxivarUserServiceCreator.md) / ArxivarUserServiceCreator

# Class: ArxivarUserServiceCreator

[ArxivarUserServiceCreator](../modules/ArxivarUserServiceCreator.md).ArxivarUserServiceCreator

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

- [`IArxivarUserServiceCreator`](../interfaces/Interfaces.IArxivarUserServiceCreator.md)

## Table of contents

### Methods

- [create](ArxivarUserServiceCreator.ArxivarUserServiceCreator.md#create)

## Methods

### create

▸ **create**(): `Promise`<[`UserService`](UserService.UserService.md)\>

Create the UserService

#### Returns

`Promise`<[`UserService`](UserService.UserService.md)\>

#### Implementation of

IArxivarUserServiceCreator.create
