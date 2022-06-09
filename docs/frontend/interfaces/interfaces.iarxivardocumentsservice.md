[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarDocumentsService

# Interface: IArxivarDocumentsService

[Interfaces](../modules/Interfaces.md).IArxivarDocumentsService

## Table of contents

### Methods

- [downloadStream](Interfaces.IArxivarDocumentsService.md#downloadstream)
- [getDocumentByDocnumber](Interfaces.IArxivarDocumentsService.md#getdocumentbydocnumber)
- [getRevisionByID](Interfaces.IArxivarDocumentsService.md#getrevisionbyid)

## Methods

### downloadStream

▸ **downloadStream**(`data`, `status`, `headers`): `Promise`<`any`\>

 This method converts an api call response of type arraybuffer into a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data of the call. |
| `status` | `any` | The status of the call. |
| `headers` | `any` | The headers of the call. |

#### Returns

`Promise`<`any`\>

The file download Promise.

___

### getDocumentByDocnumber

▸ **getDocumentByDocnumber**(`docnumber`): `Promise`<`any`\>

Download the document linked to a profile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `docnumber` | `number` | The docnumber of the profile. |

#### Returns

`Promise`<`any`\>

The file download Promise.

___

### getRevisionByID

▸ **getRevisionByID**(`revisionId`): `Promise`<`any`\>

Download the document linked to a profile with a specific revision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revisionId` | `number` | The ID of the revision. |

#### Returns

`Promise`<`any`\>

The file download Promise.
