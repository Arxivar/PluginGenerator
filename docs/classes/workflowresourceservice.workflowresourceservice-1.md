[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [WorkflowResourceService](../modules/workflowresourceservice.md) / WorkflowResourceService

# Class: WorkflowResourceService

[WorkflowResourceService](../modules/workflowresourceservice.md).WorkflowResourceService

## Implements

- [*IArxivarResourceService*](../interfaces/interfaces.iarxivarresourceservice.md)

## Table of contents

### Methods

- [delete](workflowresourceservice.workflowresourceservice-1.md#delete)
- [get](workflowresourceservice.workflowresourceservice-1.md#get)
- [getByteArray](workflowresourceservice.workflowresourceservice-1.md#getbytearray)
- [getPost](workflowresourceservice.workflowresourceservice-1.md#getpost)
- [getValue](workflowresourceservice.workflowresourceservice-1.md#getvalue)
- [queryWithOptions](workflowresourceservice.workflowresourceservice-1.md#querywithoptions)
- [save](workflowresourceservice.workflowresourceservice-1.md#save)
- [update](workflowresourceservice.workflowresourceservice-1.md#update)
- [updateCollection](workflowresourceservice.workflowresourceservice-1.md#updatecollection)

## Methods

### delete

▸ **delete**(`resourceName`: *string*, `postData`: *any*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Delete the selected resource from Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `postData` | *any* | The identifier of the resource |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The deleted resource

Implementation of: IArxivarResourceService.delete

___

### get

▸ **get**(`resourceName`: *string*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Retrieve information on a certain type of resource ofs ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resource information

Implementation of: IArxivarResourceService.get

___

### getByteArray

▸ **getByteArray**(`resourceName`: *string*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Retrieve a download stream for a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The download stream for the resource

Implementation of: IArxivarResourceService.getByteArray

___

### getPost

▸ **getPost**(`resourceName`: *string*, `postData`: *any*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Retrieve information of a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `postData` | *any* | Additional parameter of the call |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resource value

Implementation of: IArxivarResourceService.getPost

___

### getValue

▸ **getValue**(`resourceName`: *string*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Retrieve the value of a certain resource of ARXivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resource value

Implementation of: IArxivarResourceService.getValue

___

### queryWithOptions

▸ **queryWithOptions**(`resourceName`: *string*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md), `httpOptions`: *any*): *Promise*<any\>

Retrieve information on a certain type of resource of ARXivar Workflow with additional options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |
| `httpOptions` | *any* | The additional options of the call |

**Returns:** *Promise*<any\>

The resource information

Implementation of: IArxivarResourceService.queryWithOptions

___

### save

▸ **save**(`resourceName`: *string*, `postData`: *any*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Submit and save the selected resource on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `postData` | *any* | The resource data |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resource

Implementation of: IArxivarResourceService.save

___

### update

▸ **update**(`resourceName`: *string*, `postData`: *any*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Submit and update the selected resource on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `postData` | *any* | The resource data |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resource

Implementation of: IArxivarResourceService.update

___

### updateCollection

▸ **updateCollection**(`resourceName`: *string*, `postData`: *any*, `options`: [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md)): *Promise*<any\>

Submit and update a collection of resources on Arxivar Workflow

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resourceName` | *string* | The resource name |
| `postData` | *any* | The resources data collection |
| `options` | [*HttpOptions*](../interfaces/dtos_httpoptions.httpoptions.md) | The options of the call |

**Returns:** *Promise*<any\>

The resources

Implementation of: IArxivarResourceService.updateCollection
