[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [ArxivarResourceService](../modules/ArxivarResourceService.md) / ArxivarResourceService

# Class: ArxivarResourceService

[ArxivarResourceService](../modules/ArxivarResourceService.md).ArxivarResourceService

This module contains the essential method for an AngularJS application to consume the ARXivar api calls.
The methods exposed permits to create,read,edit and update resources from ARXivar.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarResourceService',
	function(arxivarResourceService) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				arxivarResourceService.get('masks').then(function(masks) {
					scope.masks = masks;
				});
			}
		};
	}
]);
```

## Implements

- [`IArxivarResourceService`](../interfaces/Interfaces.IArxivarResourceService.md)

## Table of contents

### Properties

- [webApiUrl](ArxivarResourceService.ArxivarResourceService.md#webapiurl)

### Methods

- [delete](ArxivarResourceService.ArxivarResourceService.md#delete)
- [get](ArxivarResourceService.ArxivarResourceService.md#get)
- [getByteArray](ArxivarResourceService.ArxivarResourceService.md#getbytearray)
- [getPost](ArxivarResourceService.ArxivarResourceService.md#getpost)
- [getPostByteArray](ArxivarResourceService.ArxivarResourceService.md#getpostbytearray)
- [getValue](ArxivarResourceService.ArxivarResourceService.md#getvalue)
- [queryWithOptions](ArxivarResourceService.ArxivarResourceService.md#querywithoptions)
- [save](ArxivarResourceService.ArxivarResourceService.md#save)
- [update](ArxivarResourceService.ArxivarResourceService.md#update)
- [updateCollection](ArxivarResourceService.ArxivarResourceService.md#updatecollection)

## Properties

### webApiUrl

• **webApiUrl**: `string`

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[webApiUrl](../interfaces/Interfaces.IArxivarResourceService.md#webapiurl)

## Methods

### delete

▸ **delete**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Delete the selected resource from Arxivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The identifier of the resource |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The deleted resource

#### Implementation of

IArxivarResourceService.delete

___

### get

▸ **get**(`resourceName`, `options`): `Promise`<`any`\>

Retrieve information on a certain type of resource ofs ARXivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resource information

#### Implementation of

IArxivarResourceService.get

___

### getByteArray

▸ **getByteArray**(`resourceName`, `options`): `Promise`<`any`\>

Retrieve a download stream for a certain resource of ARXivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The download stream for the resource

#### Implementation of

IArxivarResourceService.getByteArray

___

### getPost

▸ **getPost**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Retrieve information of a certain resource of ARXivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | Additional parameter of the call |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resource value

#### Implementation of

IArxivarResourceService.getPost

___

### getPostByteArray

▸ **getPostByteArray**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Retrieve a download stream for a certain resource of ARXivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | Additional parameter of the call |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The download stream for the resource

#### Implementation of

IArxivarResourceService.getPostByteArray

___

### getValue

▸ **getValue**(`resourceName`, `options`): `Promise`<`any`\>

Retrieve the value of a certain resource of ARXivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resource value

#### Implementation of

IArxivarResourceService.getValue

___

### queryWithOptions

▸ **queryWithOptions**(`resourceName`, `httpOptions`, `options`): `Promise`<`any`\>

Retrieve information on a certain type of resource of ARXivar with additional options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `httpOptions` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |
| `options` | `any` | The additional options of the call |

#### Returns

`Promise`<`any`\>

The resource information

#### Implementation of

IArxivarResourceService.queryWithOptions

___

### save

▸ **save**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Submit and save the selected resource on Arxivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resource

#### Implementation of

IArxivarResourceService.save

___

### update

▸ **update**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Submit and update the selected resource on Arxivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resource

#### Implementation of

IArxivarResourceService.update

___

### updateCollection

▸ **updateCollection**(`resourceName`, `postData`, `options`): `Promise`<`any`\>

Submit and update a collection of resources on Arxivar

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resources data collection |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`<`any`\>

The resources

#### Implementation of

IArxivarResourceService.updateCollection
