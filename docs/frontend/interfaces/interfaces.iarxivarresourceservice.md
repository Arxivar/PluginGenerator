[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/interfaces.md) / IArxivarResourceService

# Interface: IArxivarResourceService

[Interfaces](../modules/interfaces.md).IArxivarResourceService

## Implemented by

- [*ArxivarResourceService*](../classes/arxivarresourceservice.arxivarresourceservice-1.md)
- [*WorkflowResourceService*](../classes/workflowresourceservice.workflowresourceservice-1.md)

## Table of contents

### Properties

- [delete](interfaces.iarxivarresourceservice.md#delete)
- [get](interfaces.iarxivarresourceservice.md#get)
- [getByteArray](interfaces.iarxivarresourceservice.md#getbytearray)
- [getPost](interfaces.iarxivarresourceservice.md#getpost)
- [getValue](interfaces.iarxivarresourceservice.md#getvalue)
- [queryWithOptions](interfaces.iarxivarresourceservice.md#querywithoptions)
- [save](interfaces.iarxivarresourceservice.md#save)
- [update](interfaces.iarxivarresourceservice.md#update)
- [updateCollection](interfaces.iarxivarresourceservice.md#updatecollection)

## Properties

### delete

• **delete**: (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Delete the selected resource from Arxivar

**`param`** The resource name

**`param`** The identifier of the resource

**`param`** The options of the call

**`returns`** The deleted resource

#### Type declaration

▸ (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `postData` | *any* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### get

• **get**: (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Retrieve information on a certain type of resource ofs ARXivar

**`param`** The resource name

**`param`** The options of the call

**`returns`** The resource information

#### Type declaration

▸ (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### getByteArray

• **getByteArray**: (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Retrieve a download stream for a certain resource of ARXivar

**`param`** The resource name

**`param`** The options of the call

**`returns`** The download stream for the resource

#### Type declaration

▸ (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### getPost

• **getPost**: (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Retrieve information of a certain resource of ARXivar

**`param`** The resource name

**`param`** Additional parameter of the call

**`param`** The options of the call

**`returns`** The resource value

#### Type declaration

▸ (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `postData` | *any* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### getValue

• **getValue**: (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Retrieve the value of a certain resource of ARXivar

**`param`** The resource name

**`param`** The options of the call

**`returns`** The resource value

#### Type declaration

▸ (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### queryWithOptions

• **queryWithOptions**: (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md), `IHttpOptions`: *any*) => *Promise*<any\>

Retrieve information on a certain type of resource of ARXivar with additional options

**`param`** The options of the call

**`param`** The resource name

**`param`** The additional options of the call

**`returns`** The resource information

#### Type declaration

▸ (`resourceName`: *string*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md), `IHttpOptions`: *any*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |
| `IHttpOptions` | *any* |

**Returns:** *Promise*<any\>

___

### save

• **save**: (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Submit and save the selected resource on Arxivar

**`param`** The resource name

**`param`** The resource data

**`param`** The options of the call

**`returns`** The resource

#### Type declaration

▸ (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `postData` | *any* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### update

• **update**: (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Submit and update the selected resource on Arxivar

**`param`** The resource name

**`param`** The resource data

**`param`** The options of the call

**`returns`** The resource

#### Type declaration

▸ (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `postData` | *any* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>

___

### updateCollection

• **updateCollection**: (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)) => *Promise*<any\>

Submit and update a collection of resources on Arxivar

**`param`** The resource name

**`param`** The resources data collection

**`param`** The options of the call

**`returns`** The resources

#### Type declaration

▸ (`resourceName`: *string*, `postData`: *any*, `options`: [*IHttpOptions*](interfaces.ihttpoptions.md)): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceName` | *string* |
| `postData` | *any* |
| `options` | [*IHttpOptions*](interfaces.ihttpoptions.md) |

**Returns:** *Promise*<any\>
