[ARXivar Documentation](../globals.md) › [ArxivarUserServiceCreator](arxivaruserservicecreator.md)

# Class: ArxivarUserServiceCreator

This module contains the essential methods to retrieve the informations of the user currently logged into ARXivar.
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

## Hierarchy

* **ArxivarUserServiceCreator**

## Index

### Methods

* [create](arxivaruserservicecreator.md#create)

## Methods

###  create

▸ **create**(): *Promise‹[UserService](userservice.md)›*

Create the UserService

**Returns:** *Promise‹[UserService](userservice.md)›*
