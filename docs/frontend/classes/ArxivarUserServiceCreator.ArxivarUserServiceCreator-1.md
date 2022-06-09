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

- [create](ArxivarUserServiceCreator.ArxivarUserServiceCreator-1.md#create)

## Methods

### create

▸ **create**(): `Promise`<[`UserService`](UserService.UserService-1.md)\>

Create the UserService

#### Returns

`Promise`<[`UserService`](UserService.UserService-1.md)\>

#### Implementation of

[IArxivarUserServiceCreator](../interfaces/Interfaces.IArxivarUserServiceCreator.md).[create](../interfaces/Interfaces.IArxivarUserServiceCreator.md#create)
