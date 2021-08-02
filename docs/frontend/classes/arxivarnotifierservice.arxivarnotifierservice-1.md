[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarNotifierService](../modules/arxivarnotifierservice.md) / ArxivarNotifierService

# Class: ArxivarNotifierService

[ArxivarNotifierService](../modules/arxivarnotifierservice.md).ArxivarNotifierService

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

## Implements

- [*IArxivarNotifierService*](../interfaces/interfaces.iarxivarnotifierservice.md)

## Table of contents

### Methods

- [notifyError](arxivarnotifierservice.arxivarnotifierservice-1.md#notifyerror)
- [notifyInfo](arxivarnotifierservice.arxivarnotifierservice-1.md#notifyinfo)
- [notifySuccess](arxivarnotifierservice.arxivarnotifierservice-1.md#notifysuccess)
- [notifyWarning](arxivarnotifierservice.arxivarnotifierservice-1.md#notifywarning)

## Methods

### notifyError

▸ **notifyError**(`message`: *string*): *void*

Notify error message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | *string* | The docnumber of the profile. |

**Returns:** *void*

Implementation of: IArxivarNotifierService.notifyError

___

### notifyInfo

▸ **notifyInfo**(`message`: *string*): *void*

Notify info message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | *string* | The docnumber of the profile. |

**Returns:** *void*

Implementation of: IArxivarNotifierService.notifyInfo

___

### notifySuccess

▸ **notifySuccess**(`message`: *string*): *void*

Notify success message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | *string* | The docnumber of the profile. |

**Returns:** *void*

Implementation of: IArxivarNotifierService.notifySuccess

___

### notifyWarning

▸ **notifyWarning**(`message`: *string*): *void*

Notify warning message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | *string* | The docnumber of the profile. |

**Returns:** *void*

Implementation of: IArxivarNotifierService.notifyWarning
