[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [ArxivarRouteService](../modules/ArxivarRouteService.md) / ArxivarRouteService

# Class: ArxivarRouteService

[ArxivarRouteService](../modules/ArxivarRouteService.md).ArxivarRouteService

This module contains the methods to interface with the ARXivar Next Portal Routes
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarRouteService',
	function(arxivarRouteService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				var docnumber = 100;
				var url = arxivarRouteService.getURLProfileReadonly(docnumber);
			}
		};
	}
]);
```

## Implements

- [`IArxivarRouteService`](../interfaces/Interfaces.IArxivarRouteService.md)

## Table of contents

### Methods

- [getMaskProfilation](ArxivarRouteService.ArxivarRouteService-1.md#getmaskprofilation)
- [getPartialURLPluginLinkExecuteCommand](ArxivarRouteService.ArxivarRouteService-1.md#getpartialurlpluginlinkexecutecommand)
- [getSearchURLWithParams](ArxivarRouteService.ArxivarRouteService-1.md#getsearchurlwithparams)
- [getURLPluginRoute](ArxivarRouteService.ArxivarRouteService-1.md#geturlpluginroute)
- [getURLProfilation](ArxivarRouteService.ArxivarRouteService-1.md#geturlprofilation)
- [getURLProfileReadonly](ArxivarRouteService.ArxivarRouteService-1.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](ArxivarRouteService.ArxivarRouteService-1.md#geturlrevisionsbydocnumber)
- [getViewURLWithParams](ArxivarRouteService.ArxivarRouteService-1.md#getviewurlwithparams)

## Methods

### getMaskProfilation

▸ **getMaskProfilation**(`id`, `__namedParameters?`): `string`

Retrieve the URL's mask route that contains the bufferId of the file to upload

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The mask Id. |
| `__namedParameters` | `Object` | `null` | - |
| `__namedParameters.bufferId` | `string` | `undefined` | - |
| `__namedParameters.fileName` | `string` | `undefined` | - |

#### Returns

`string`

The url of mask route.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getMaskProfilation](../interfaces/Interfaces.IArxivarRouteService.md#getmaskprofilation)

___

### getPartialURLPluginLinkExecuteCommand

▸ **getPartialURLPluginLinkExecuteCommand**(`pluginId`): `string`

Retrieve the URL of workflow pluginLink execute command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | The pluginId. |

#### Returns

`string`

The partial url of the plugin link execute command.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getPartialURLPluginLinkExecuteCommand](../interfaces/Interfaces.IArxivarRouteService.md#getpartialurlpluginlinkexecutecommand)

___

### getSearchURLWithParams

▸ **getSearchURLWithParams**(`params`): `string`

 Retrieve the URL of search with params.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlFilter`](../modules/Interfaces.md#iurlfilter)[] | The params for the search. |

#### Returns

`string`

The url of the search with params.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getSearchURLWithParams](../interfaces/Interfaces.IArxivarRouteService.md#getsearchurlwithparams)

___

### getURLPluginRoute

▸ **getURLPluginRoute**(`pluginId`): `string`

Retrieve the URL's route of pluginRoute

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | The pluginId. |

#### Returns

`string`

The url of the plugin route.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getURLPluginRoute](../interfaces/Interfaces.IArxivarRouteService.md#geturlpluginroute)

___

### getURLProfilation

▸ **getURLProfilation**(`__namedParameters?`): `string`

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | `Object` | `null` |
| `__namedParameters.bufferId` | `string` | `undefined` |
| `__namedParameters.fileName` | `string` | `undefined` |

#### Returns

`string`

The url of profilation route.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getURLProfilation](../interfaces/Interfaces.IArxivarRouteService.md#geturlprofilation)

___

### getURLProfileReadonly

▸ **getURLProfileReadonly**(`docnumber`): `string`

Retrieve the URL of the profile route.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

#### Returns

`string`

The url of the profile route.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getURLProfileReadonly](../interfaces/Interfaces.IArxivarRouteService.md#geturlprofilereadonly)

___

### getURLRevisionsByDocnumber

▸ **getURLRevisionsByDocnumber**(`docnumber`): `string`

Retrieve the URL's route that contains the list of Revisions for a specific document

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

#### Returns

`string`

The url of the revisions list of the profile.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getURLRevisionsByDocnumber](../interfaces/Interfaces.IArxivarRouteService.md#geturlrevisionsbydocnumber)

___

### getViewURLWithParams

▸ **getViewURLWithParams**(`params`, `viewId`): `string`

 Retrieve the URL of view with params.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlFilter`](../modules/Interfaces.md#iurlfilter)[] | The params for the view. |
| `viewId` | `string` | The viewId. |

#### Returns

`string`

The url of the view with params.

#### Implementation of

[IArxivarRouteService](../interfaces/Interfaces.IArxivarRouteService.md).[getViewURLWithParams](../interfaces/Interfaces.IArxivarRouteService.md#getviewurlwithparams)
