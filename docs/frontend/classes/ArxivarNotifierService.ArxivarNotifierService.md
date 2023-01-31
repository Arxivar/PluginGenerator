[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [ArxivarNotifierService](../modules/ArxivarNotifierService.md) / ArxivarNotifierService

# Class: ArxivarNotifierService

[ArxivarNotifierService](../modules/ArxivarNotifierService.md).ArxivarNotifierService

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

- [`IArxivarNotifierService`](../interfaces/Interfaces.IArxivarNotifierService.md)

## Table of contents

### Methods

- [notifyError](ArxivarNotifierService.ArxivarNotifierService.md#notifyerror)
- [notifyInfo](ArxivarNotifierService.ArxivarNotifierService.md#notifyinfo)
- [notifySuccess](ArxivarNotifierService.ArxivarNotifierService.md#notifysuccess)
- [notifyWarning](ArxivarNotifierService.ArxivarNotifierService.md#notifywarning)

## Methods

### notifyError

▸ **notifyError**(`message`): `void`

Notify error message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

#### Returns

`void`

#### Implementation of

IArxivarNotifierService.notifyError

___

### notifyInfo

▸ **notifyInfo**(`message`): `void`

Notify info message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

#### Returns

`void`

#### Implementation of

IArxivarNotifierService.notifyInfo

___

### notifySuccess

▸ **notifySuccess**(`message`): `void`

Notify success message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

#### Returns

`void`

#### Implementation of

IArxivarNotifierService.notifySuccess

___

### notifyWarning

▸ **notifyWarning**(`message`): `void`

Notify warning message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

#### Returns

`void`

#### Implementation of

IArxivarNotifierService.notifyWarning
