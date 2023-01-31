[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarRouteService

# Interface: IArxivarRouteService

[Interfaces](../modules/Interfaces.md).IArxivarRouteService

## Implemented by

- [`ArxivarRouteService`](../classes/ArxivarRouteService.ArxivarRouteService.md)

## Table of contents

### Properties

- [getMaskProfilation](Interfaces.IArxivarRouteService.md#getmaskprofilation)
- [getPartialURLPluginLinkExecuteCommand](Interfaces.IArxivarRouteService.md#getpartialurlpluginlinkexecutecommand)
- [getSearchURLWithParams](Interfaces.IArxivarRouteService.md#getsearchurlwithparams)
- [getURLPluginRoute](Interfaces.IArxivarRouteService.md#geturlpluginroute)
- [getURLProfilation](Interfaces.IArxivarRouteService.md#geturlprofilation)
- [getURLProfileReadonly](Interfaces.IArxivarRouteService.md#geturlprofilereadonly)
- [getURLRevisionsByDocnumber](Interfaces.IArxivarRouteService.md#geturlrevisionsbydocnumber)
- [getViewURLWithParams](Interfaces.IArxivarRouteService.md#getviewurlwithparams)

## Properties

### getMaskProfilation

• **getMaskProfilation**: (`id`: `string`, `__namedParameters?`: { `bufferId`: `string` ; `fileName`: `string`  }) => `string`

#### Type declaration

▸ (`id`, `__namedParameters?`): `string`

Retrieve the URL's mask route that contains the bufferId of the file to upload

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The mask Id.    * |
| `__namedParameters?` | `Object` | - |
| `__namedParameters.bufferId` | `string` | - |
| `__namedParameters.fileName` | `string` | - |

##### Returns

`string`

The url of mask route.

___

### getPartialURLPluginLinkExecuteCommand

• **getPartialURLPluginLinkExecuteCommand**: (`pluginId`: `string`) => `string`

#### Type declaration

▸ (`pluginId`): `string`

Retrieve the partial URL of workflow pluginLink execute command

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | The pluginId. |

##### Returns

`string`

The partial url of the plugin link execute command.

___

### getSearchURLWithParams

• **getSearchURLWithParams**: (`params`: [`IUrlSearchParams`](Interfaces.IUrlSearchParams.md)) => `string`

#### Type declaration

▸ (`params`): `string`

Retrieve the URL of search with params.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlSearchParams`](Interfaces.IUrlSearchParams.md) | The params for the search. |

##### Returns

`string`

The url of the search with params.

___

### getURLPluginRoute

• **getURLPluginRoute**: (`pluginId`: `string`) => `string`

#### Type declaration

▸ (`pluginId`): `string`

Retrieve the URL's route of pluginRoute

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginId` | `string` | The pluginId. |

##### Returns

`string`

The url of the plugin route.

___

### getURLProfilation

• **getURLProfilation**: (`__namedParameters?`: { `bufferId`: `string` ; `fileName`: `string`  }) => `string`

#### Type declaration

▸ (`__namedParameters?`): `string`

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

  *

##### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | `Object` |
| `__namedParameters.bufferId` | `string` |
| `__namedParameters.fileName` | `string` |

##### Returns

`string`

The url of profilation route.

___

### getURLProfileReadonly

• **getURLProfileReadonly**: (`docnumber`: `number`) => `string`

#### Type declaration

▸ (`docnumber`): `string`

Retrieve the URL of the profile route.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

##### Returns

`string`

The url of the profile route.

___

### getURLRevisionsByDocnumber

• **getURLRevisionsByDocnumber**: (`docnumber`: `number`) => `string`

#### Type declaration

▸ (`docnumber`): `string`

Retrieve the URL's route that contains the list of Revisions for a specific document

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

##### Returns

`string`

The url of the revisions list of the profile.

___

### getViewURLWithParams

• **getViewURLWithParams**: (`params`: [`IUrlSearchParams`](Interfaces.IUrlSearchParams.md), `viewId`: `string`) => `string`

#### Type declaration

▸ (`params`, `viewId`): `string`

Retrieve the URL of view with params.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlSearchParams`](Interfaces.IUrlSearchParams.md) | The params for the view. |
| `viewId` | `string` | The viewId. |

##### Returns

`string`

The url of the view with params.
