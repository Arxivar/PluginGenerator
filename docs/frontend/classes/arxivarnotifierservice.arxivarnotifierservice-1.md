[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [ArxivarNotifierService](../modules/ArxivarNotifierService.md) / ArxivarNotifierService

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

- [notifyError](ArxivarNotifierService.ArxivarNotifierService-1.md#notifyerror)
- [notifyInfo](ArxivarNotifierService.ArxivarNotifierService-1.md#notifyinfo)
- [notifySuccess](ArxivarNotifierService.ArxivarNotifierService-1.md#notifysuccess)
- [notifyWarning](ArxivarNotifierService.ArxivarNotifierService-1.md#notifywarning)

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

[IArxivarNotifierService](../interfaces/Interfaces.IArxivarNotifierService.md).[notifyError](../interfaces/Interfaces.IArxivarNotifierService.md#notifyerror)

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

[IArxivarNotifierService](../interfaces/Interfaces.IArxivarNotifierService.md).[notifyInfo](../interfaces/Interfaces.IArxivarNotifierService.md#notifyinfo)

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

[IArxivarNotifierService](../interfaces/Interfaces.IArxivarNotifierService.md).[notifySuccess](../interfaces/Interfaces.IArxivarNotifierService.md#notifysuccess)

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

[IArxivarNotifierService](../interfaces/Interfaces.IArxivarNotifierService.md).[notifyWarning](../interfaces/Interfaces.IArxivarNotifierService.md#notifywarning)
