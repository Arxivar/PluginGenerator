[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarDocumentsService

# Interface: IArxivarDocumentsService

[Interfaces](../modules/Interfaces.md).IArxivarDocumentsService

## Table of contents

### Properties

- [downloadStream](Interfaces.IArxivarDocumentsService.md#downloadstream)
- [getDocumentByDocnumber](Interfaces.IArxivarDocumentsService.md#getdocumentbydocnumber)
- [getRevisionByID](Interfaces.IArxivarDocumentsService.md#getrevisionbyid)

## Properties

### downloadStream

• **downloadStream**: (`data`: `any`, `status`: `any`, `headers`: `any`) => `Promise`\<`any`\>

This method converts an api call response of type arraybuffer into a file.

**`Param`**

The data of the call.

**`Param`**

The status of the call.

**`Param`**

The headers of the call.

#### Type declaration

▸ (`data`, `status`, `headers`): `Promise`\<`any`\>

This method converts an api call response of type arraybuffer into a file.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data of the call. |
| `status` | `any` | The status of the call. |
| `headers` | `any` | The headers of the call. |

##### Returns

`Promise`\<`any`\>

The file download Promise.

___

### getDocumentByDocnumber

• **getDocumentByDocnumber**: (`docnumber`: `number`) => `Promise`\<`any`\>

Download the document linked to a profile.

**`Param`**

The docnumber of the profile.

#### Type declaration

▸ (`docnumber`): `Promise`\<`any`\>

Download the document linked to a profile.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

##### Returns

`Promise`\<`any`\>

The file download Promise.

___

### getRevisionByID

• **getRevisionByID**: (`revisionId`: `number`) => `Promise`\<`any`\>

Download the document linked to a profile with a specific revision.

**`Param`**

The ID of the revision.

#### Type declaration

▸ (`revisionId`): `Promise`\<`any`\>

Download the document linked to a profile with a specific revision.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revisionId` | `number` | The ID of the revision. |

##### Returns

`Promise`\<`any`\>

The file download Promise.
