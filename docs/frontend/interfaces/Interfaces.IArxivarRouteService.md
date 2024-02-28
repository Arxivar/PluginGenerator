[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarRouteService

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

• **getMaskProfilation**: (`id`: `string`, `__namedParameters?`: \{ `bufferId`: `string` ; `fileName`: `string`  }) => `string`

Retrieve the URL's mask route that contains the bufferId of the file to upload

**`Param`**

The mask Id.

**`Param`**

The bufferId of uploaded file.

**`Param`**

The fileName of uploaded file.

#### Type declaration

▸ (`id`, `«destructured»?`): `string`

Retrieve the URL's mask route that contains the bufferId of the file to upload

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The mask Id. |
| `«destructured»` | `Object` | - |
| › `bufferId` | `string` | - |
| › `fileName` | `string` | - |

##### Returns

`string`

The url of mask route.

___

### getPartialURLPluginLinkExecuteCommand

• **getPartialURLPluginLinkExecuteCommand**: (`pluginId`: `string`) => `string`

Retrieve the partial URL of workflow pluginLink execute command

**`Param`**

The pluginId.

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

Retrieve the URL of search with params.

**`Param`**

The params for the search.

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

Retrieve the URL's route of pluginRoute

**`Param`**

The pluginId.

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

• **getURLProfilation**: (`__namedParameters?`: \{ `bufferId`: `string` ; `fileName`: `string`  }) => `string`

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

**`Param`**

The bufferId of uploaded file.

**`Param`**

The fileName of uploaded file.

#### Type declaration

▸ (`«destructured»?`): `string`

Retrieve the URL's profilation route that contains the bufferId of the file to upload.

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bufferId` | `string` |
| › `fileName` | `string` |

##### Returns

`string`

The url of profilation route.

___

### getURLProfileReadonly

• **getURLProfileReadonly**: (`docnumber`: `number`) => `string`

Retrieve the URL of the profile route.

**`Param`**

The docnumber of the profile.

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

Retrieve the URL's route that contains the list of Revisions for a specific document

**`Param`**

The docnumber of the profile.

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

• **getViewURLWithParams**: (`params`: [`IUrlViewParams`](Interfaces.IUrlViewParams.md), `viewId`: `string`) => `string`

Retrieve the URL of view with params.

**`Param`**

The params for the view.

**`Param`**

The viewId.

#### Type declaration

▸ (`params`, `viewId`): `string`

Retrieve the URL of view with params.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`IUrlViewParams`](Interfaces.IUrlViewParams.md) | The params for the view. |
| `viewId` | `string` | The viewId. |

##### Returns

`string`

The url of the view with params.
