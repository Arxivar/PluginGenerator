[ARXivar Documentation](../globals.md) › [ArxivarNotifierService](arxivarnotifierservice.md)

# Class: ArxivarNotifierService

This module contains the methods to interface with the ARXivar Next Portal Routes
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarNotifierService',
	function(arxivarNotifierService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var docnumber = 100;
				var url = arxivarNotifierService.notifyError('Errore!');
			}
		};
	}
]);
```

## Hierarchy

* **ArxivarNotifierService**

## Index

### Methods

* [notifyError](arxivarnotifierservice.md#notifyerror)
* [notifyInfo](arxivarnotifierservice.md#notifyinfo)
* [notifySuccess](arxivarnotifierservice.md#notifysuccess)
* [notifyWarning](arxivarnotifierservice.md#notifywarning)

## Methods

###  notifyError

▸ **notifyError**(`message`: string): *void*

Notify error message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The docnumber of the profile.  |

**Returns:** *void*

___

###  notifyInfo

▸ **notifyInfo**(`message`: string): *void*

Notify info message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The docnumber of the profile.  |

**Returns:** *void*

___

###  notifySuccess

▸ **notifySuccess**(`message`: string): *void*

Notify success message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The docnumber of the profile.  |

**Returns:** *void*

___

###  notifyWarning

▸ **notifyWarning**(`message`: string): *void*

Notify warning message.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | string | The docnumber of the profile.  |

**Returns:** *void*
