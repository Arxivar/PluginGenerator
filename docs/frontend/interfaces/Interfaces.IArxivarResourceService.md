[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarResourceService

# Interface: IArxivarResourceService

[Interfaces](../modules/Interfaces.md).IArxivarResourceService

## Implemented by

- [`ArxivarResourceService`](../classes/ArxivarResourceService.ArxivarResourceService.md)
- [`WorkflowResourceService`](../classes/WorkflowResourceService.WorkflowResourceService.md)

## Table of contents

### Properties

- [delete](Interfaces.IArxivarResourceService.md#delete)
- [get](Interfaces.IArxivarResourceService.md#get)
- [getByteArray](Interfaces.IArxivarResourceService.md#getbytearray)
- [getPost](Interfaces.IArxivarResourceService.md#getpost)
- [getPostByteArray](Interfaces.IArxivarResourceService.md#getpostbytearray)
- [getValue](Interfaces.IArxivarResourceService.md#getvalue)
- [queryWithOptions](Interfaces.IArxivarResourceService.md#querywithoptions)
- [save](Interfaces.IArxivarResourceService.md#save)
- [update](Interfaces.IArxivarResourceService.md#update)
- [updateCollection](Interfaces.IArxivarResourceService.md#updatecollection)
- [webApiUrl](Interfaces.IArxivarResourceService.md#webapiurl)

## Properties

### delete

• **delete**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Delete the selected resource from Arxivar

**`Param`**

The resource name

**`Param`**

The identifier of the resource

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Delete the selected resource from Arxivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The identifier of the resource |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The deleted resource

___

### get

• **get**: (`resourceName`: `string`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Retrieve information on a certain type of resource ofs ARXivar

**`Param`**

The resource name

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `options`): `Promise`\<`any`\>

Retrieve information on a certain type of resource ofs ARXivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resource information

___

### getByteArray

• **getByteArray**: (`resourceName`: `string`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar

**`Param`**

The resource name

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `options`): `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The download stream for the resource

___

### getPost

• **getPost**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Retrieve information of a certain resource of ARXivar

**`Param`**

The resource name

**`Param`**

Additional parameter of the call

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Retrieve information of a certain resource of ARXivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | Additional parameter of the call |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resource value

___

### getPostByteArray

• **getPostByteArray**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar

**`Param`**

The resource name

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Retrieve a download stream for a certain resource of ARXivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | - |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The download stream for the resource

___

### getValue

• **getValue**: (`resourceName`: `string`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Retrieve the value of a certain resource of ARXivar

**`Param`**

The resource name

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `options`): `Promise`\<`any`\>

Retrieve the value of a certain resource of ARXivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resource value

___

### queryWithOptions

• **queryWithOptions**: (`resourceName`: `string`, `httpOptions`: [`IHttpOptions`](Interfaces.IHttpOptions.md), `options`: `any`) => `Promise`\<`any`\>

Retrieve information on a certain type of resource of ARXivar with additional options

**`Param`**

The resource name

**`Param`**

The options of the call

**`Param`**

The additional options of the call

#### Type declaration

▸ (`resourceName`, `httpOptions`, `options`): `Promise`\<`any`\>

Retrieve information on a certain type of resource of ARXivar with additional options

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `httpOptions` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |
| `options` | `any` | The additional options of the call |

##### Returns

`Promise`\<`any`\>

The resource information

___

### save

• **save**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Submit and save the selected resource on Arxivar

**`Param`**

The resource name

**`Param`**

The resource data

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and save the selected resource on Arxivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resource

___

### update

• **update**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Submit and update the selected resource on Arxivar

**`Param`**

The resource name

**`Param`**

The resource data

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and update the selected resource on Arxivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resource data |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resource

___

### updateCollection

• **updateCollection**: (`resourceName`: `string`, `postData`: `any`, `options`: [`IHttpOptions`](Interfaces.IHttpOptions.md)) => `Promise`\<`any`\>

Submit and update a collection of resources on Arxivar

**`Param`**

The resource name

**`Param`**

The resources data collection

**`Param`**

The options of the call

#### Type declaration

▸ (`resourceName`, `postData`, `options`): `Promise`\<`any`\>

Submit and update a collection of resources on Arxivar

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | `string` | The resource name |
| `postData` | `any` | The resources data collection |
| `options` | [`IHttpOptions`](Interfaces.IHttpOptions.md) | The options of the call |

##### Returns

`Promise`\<`any`\>

The resources

___

### webApiUrl

• **webApiUrl**: `string`
