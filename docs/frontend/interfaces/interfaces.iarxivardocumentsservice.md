[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/interfaces.md) / IArxivarDocumentsService

# Interface: IArxivarDocumentsService

[Interfaces](../modules/interfaces.md).IArxivarDocumentsService

## Table of contents

### Properties

- [downloadStream](interfaces.iarxivardocumentsservice.md#downloadstream)
- [getDocumentByDocnumber](interfaces.iarxivardocumentsservice.md#getdocumentbydocnumber)
- [getRevisionByID](interfaces.iarxivardocumentsservice.md#getrevisionbyid)

## Properties

### downloadStream

• **downloadStream**: (`data`: *any*, `status`: *any*, `headers`: *any*) => *Promise*<any\>

 This method converts an api call response of type arraybuffer into a file.

**`param`** The data of the call.

**`param`** The status of the call.

**`param`** The headers of the call.

**`returns`** The file download Promise.

#### Type declaration

▸ (`data`: *any*, `status`: *any*, `headers`: *any*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | *any* |
| `status` | *any* |
| `headers` | *any* |

**Returns:** *Promise*<any\>

___

### getDocumentByDocnumber

• **getDocumentByDocnumber**: (`docnumber`: *number*) => *Promise*<any\>

Download the document linked to a profile.

**`param`** The docnumber of the profile.

**`returns`** The file download Promise.

#### Type declaration

▸ (`docnumber`: *number*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `docnumber` | *number* |

**Returns:** *Promise*<any\>

___

### getRevisionByID

• **getRevisionByID**: (`revisionId`: *number*) => *Promise*<any\>

Download the document linked to a profile with a specific revision.

**`param`** The ID of the revision.

**`returns`** The file download Promise.

#### Type declaration

▸ (`revisionId`: *number*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `revisionId` | *number* |

**Returns:** *Promise*<any\>
