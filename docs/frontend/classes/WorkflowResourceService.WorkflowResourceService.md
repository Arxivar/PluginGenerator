[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [WorkflowResourceService](../modules/WorkflowResourceService.md) / WorkflowResourceService

# Class: WorkflowResourceService

[WorkflowResourceService](../modules/WorkflowResourceService.md).WorkflowResourceService

## Implements

- [`IArxivarResourceService`](../interfaces/Interfaces.IArxivarResourceService.md)

## Table of contents

### Properties

- [webApiUrl](WorkflowResourceService.WorkflowResourceService.md#webapiurl)

### Methods

- [delete](WorkflowResourceService.WorkflowResourceService.md#delete)
- [get](WorkflowResourceService.WorkflowResourceService.md#get)
- [getByteArray](WorkflowResourceService.WorkflowResourceService.md#getbytearray)
- [getPost](WorkflowResourceService.WorkflowResourceService.md#getpost)
- [getPostByteArray](WorkflowResourceService.WorkflowResourceService.md#getpostbytearray)
- [getValue](WorkflowResourceService.WorkflowResourceService.md#getvalue)
- [queryWithOptions](WorkflowResourceService.WorkflowResourceService.md#querywithoptions)
- [save](WorkflowResourceService.WorkflowResourceService.md#save)
- [update](WorkflowResourceService.WorkflowResourceService.md#update)
- [updateCollection](WorkflowResourceService.WorkflowResourceService.md#updatecollection)

## Properties

### webApiUrl

• **webApiUrl**: `string`

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[webApiUrl](../interfaces/Interfaces.IArxivarResourceService.md#webapiurl)

## Methods

### delete

▸ **delete**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Delete the selected resource from Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The identifier of the resource |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The deleted resource

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[delete](../interfaces/Interfaces.IArxivarResourceService.md#delete)

___

### get

▸ **get**(`resourceName`, `options`): `Promise`\<`any`\>

Retrieve information on a certain type of resource ofs ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resource information

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[get](../interfaces/Interfaces.IArxivarResourceService.md#get)

___

### getByteArray

▸ **getByteArray**(`resourceName`, `options`): `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The download stream for the resource

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[getByteArray](../interfaces/Interfaces.IArxivarResourceService.md#getbytearray)

___

### getPost

▸ **getPost**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Retrieve information of a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | Additional parameter of the call |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resource value

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[getPost](../interfaces/Interfaces.IArxivarResourceService.md#getpost)

___

### getPostByteArray

▸ **getPostByteArray**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | Additional parameter of the call |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The download stream for the resource

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[getPostByteArray](../interfaces/Interfaces.IArxivarResourceService.md#getpostbytearray)

___

### getValue

▸ **getValue**(`resourceName`, `options`): `Promise`\<`any`\>

Retrieve the value of a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resource value

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[getValue](../interfaces/Interfaces.IArxivarResourceService.md#getvalue)

___

### queryWithOptions

▸ **queryWithOptions**(`resourceName`, `httpOptions`, `options`): `Promise`\<`any`\>

Retrieve information on a certain type of resource of ARXivar Workflow with additional options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `httpOptions` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |
| `options` | `any` | The additional options of the call |

#### Returns

`Promise`\<`any`\>

The resource information

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[queryWithOptions](../interfaces/Interfaces.IArxivarResourceService.md#querywithoptions)

___

### save

▸ **save**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and save the selected resource on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resource

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[save](../interfaces/Interfaces.IArxivarResourceService.md#save)

___

### update

▸ **update**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and update the selected resource on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resource

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[update](../interfaces/Interfaces.IArxivarResourceService.md#update)

___

### updateCollection

▸ **updateCollection**(`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and update a collection of resources on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resources data collection |
| `options` | [`IHttpOptions`](../interfaces/Interfaces.IHttpOptions.md) | The options of the call |

#### Returns

`Promise`\<`any`\>

The resources

#### Implementation of

[IArxivarResourceService](../interfaces/Interfaces.IArxivarResourceService.md).[updateCollection](../interfaces/Interfaces.IArxivarResourceService.md#updatecollection)
