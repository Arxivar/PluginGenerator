[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/interfaces.md) / IArxivarDocumentsService

# Interface: IArxivarDocumentsService

[Interfaces](../modules/interfaces.md).IArxivarDocumentsService

## Table of contents

### Properties

- [getDocumentByDocnumber](interfaces.iarxivardocumentsservice.md#getdocumentbydocnumber)
- [getRevisionByID](interfaces.iarxivardocumentsservice.md#getrevisionbyid)

## Properties

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
