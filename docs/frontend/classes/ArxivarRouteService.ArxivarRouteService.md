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

- [getMaskProfilation](ArxivarRouteService.ArxivarRouteService.md#getmaskprofilation)
- [getPartialURLPluginLinkExecuteCommand](ArxivarRouteService.ArxivarRouteService.md#getpartialurlpluginlinkexecutecommand)
- [getSearchURLWithParams](ArxivarRouteService.ArxivarRouteService.md#getsearchurlwithparams)
- [getURLPluginRoute](ArxivarRouteService.ArxivarRouteService.md#geturlpluginroute)
- [getURLProfilation](ArxivarRouteService.ArxivarRouteService.md#geturlprofilation)
- [getURLProfileReadonly](ArxivarRouteService.ArxivarRouteService.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](ArxivarRouteService.ArxivarRouteService.md#geturlrevisionsbydocnumber)
- [getViewURLWithParams](ArxivarRouteService.ArxivarRouteService.md#getviewurlwithparams)

## Methods

### getMaskProfilation

▸ **getMaskProfilation**(`id`, `__namedParameters?`): `string`

Retrieve the URL's mask route that contains the bufferId of the file to upload

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The mask Id.   * |
| `__namedParameters` | `Object` | `null` | - |
| `__namedParameters.bufferId` | `string` | `undefined` | - |
| `__namedParameters.fileName` | `string` | `undefined` | - |

#### Returns

`string`

The url of mask route.

#### Implementation of

IArxivarRouteService.getMaskProfilation

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

IArxivarRouteService.getPartialURLPluginLinkExecuteCommand

___

### getSearchURLWithParams

▸ **getSearchURLWithParams**(`params`): `string`

Retrieve the URL of search with params.

**`Remarks`**

In params, in all fields, is possible to insert a formulas with string format. 		

If the field type is different of string(number,boolean,date) the conversion could fail, and throw an error.	
	
The escape char for the formulas is $.	
		
The formula keys are:

$USERCODE$: It will be replaced with the code of the connected user.

$USER$ e $UTENTE$: It will be replaced with the string UNIT\USERNAME of the connected user.
			
$USERDESC$:It will be replaced with the string USERNAME of the connected user.
					
$NOW:FORMAT$ It will be replaced with the string in the chosen format of today's date . Eg:$NOW:ddMMyyyy$	
		
For date format check in [https://date-fns.org/v2.29.3/docs/format](https://date-fns.org/v2.29.3/docs/format)		

These formulas won't work on contact fields in advance mode().			

The formulas will work with the fifth params to true, not the forth because it could be the value2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlSearchParams`](../interfaces/Interfaces.IUrlSearchParams.md) | The params for the search. |

#### Returns

`string`

The url of the search with params.

#### Implementation of

IArxivarRouteService.getSearchURLWithParams

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

IArxivarRouteService.getURLPluginRoute

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

IArxivarRouteService.getURLProfilation

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

IArxivarRouteService.getURLProfileReadonly

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

IArxivarRouteService.getURLRevisionsByDocnumber

___

### getViewURLWithParams

▸ **getViewURLWithParams**(`params`, `viewId`): `string`

Retrieve the URL of view with params.

**`Remarks`**

In params, in all fields, is possible to insert a formulas with string format. 		

If the field type is different of string(number,boolean,date) the conversion could fail, and throw an error.	
	
The escape char for the formulas is $.	
		
The formula keys are:

$USERCODE$: It will be replaced with the code of the connected user.

$USER$ e $UTENTE$: It will be replaced with the string UNIT\USERNAME of the connected user.	
		
$USERDESC$:It will be replaced with the string USERNAME of the connected user.		
			
$NOW:FORMAT$ It will be replaced with the string in the chosen format of today's date . Eg:$NOW:ddMMyyyy$	
		
For date format check in [https://date-fns.org/v2.29.3/docs/format](https://date-fns.org/v2.29.3/docs/format)		

These formulas won't work on contact fields in advance mode().			

The formulas will work with the fifth params to true, not the forth because it could be the value2.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlViewParams`](../interfaces/Interfaces.IUrlViewParams.md) | The params for the view. |
| `viewId` | `string` | The viewId. |

#### Returns

`string`

The url of the view with params.

#### Implementation of

IArxivarRouteService.getViewURLWithParams
