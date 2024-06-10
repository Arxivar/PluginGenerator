[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / ITaskV2Dto

# Interface: ITaskV2Dto

[Interfaces](../modules/Interfaces.md).ITaskV2Dto

## Table of contents

### Properties

- [activationDate](Interfaces.ITaskV2Dto.md#activationdate)
- [defaultOutcome](Interfaces.ITaskV2Dto.md#defaultoutcome)
- [diagramObjectId](Interfaces.ITaskV2Dto.md#diagramobjectid)
- [executers](Interfaces.ITaskV2Dto.md#executers)
- [expirationDate](Interfaces.ITaskV2Dto.md#expirationdate)
- [externalId](Interfaces.ITaskV2Dto.md#externalid)
- [groupId](Interfaces.ITaskV2Dto.md#groupid)
- [hasAttachments](Interfaces.ITaskV2Dto.md#hasattachments)
- [hasPrimary](Interfaces.ITaskV2Dto.md#hasprimary)
- [hasSecondary](Interfaces.ITaskV2Dto.md#hassecondary)
- [id](Interfaces.ITaskV2Dto.md#id)
- [notes](Interfaces.ITaskV2Dto.md#notes)
- [passwordOnConclude](Interfaces.ITaskV2Dto.md#passwordonconclude)
- [priority](Interfaces.ITaskV2Dto.md#priority)
- [processTaskInfo](Interfaces.ITaskV2Dto.md#processtaskinfo)
- [read](Interfaces.ITaskV2Dto.md#read)
- [status](Interfaces.ITaskV2Dto.md#status)
- [takeChargeSettings](Interfaces.ITaskV2Dto.md#takechargesettings)
- [taskDescription](Interfaces.ITaskV2Dto.md#taskdescription)
- [taskName](Interfaces.ITaskV2Dto.md#taskname)
- [user](Interfaces.ITaskV2Dto.md#user)

## Properties

### activationDate

• **activationDate**: `string`

___

### defaultOutcome

• **defaultOutcome**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

___

### diagramObjectId

• **diagramObjectId**: `string`

___

### executers

• **executers**: \{ `executer`: \{ `delegaId`: `number` ; `description`: `string` ; `dmUtentiId`: `number`  } ; `status`: `number`  }[]

___

### expirationDate

• **expirationDate**: `string`

___

### externalId

• **externalId**: `string`

___

### groupId

• **groupId**: `string`

___

### hasAttachments

• **hasAttachments**: `boolean`

___

### hasPrimary

• **hasPrimary**: `boolean`

___

### hasSecondary

• **hasSecondary**: `boolean`

___

### id

• **id**: `string`

___

### notes

• **notes**: `boolean`

___

### passwordOnConclude

• **passwordOnConclude**: `boolean`

___

### priority

• **priority**: `number`

___

### processTaskInfo

• **processTaskInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `creationDateUtc` | `string` |
| `description` | `string` |
| `detail` | `string` |
| `diagramId` | `string` |
| `diagramName` | `string` |
| `diagramRevision` | `number` |
| `hasCustomDiagram` | `boolean` |
| `id` | `string` |
| `priority` | `number` |
| `startDateUtc` | `string` |

___

### read

• **read**: `boolean`

___

### status

• **status**: `number`

___

### takeChargeSettings

• **takeChargeSettings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `takeCharge` | `boolean` |
| `takeChargeDateTimeUtc` | `string` |

___

### taskDescription

• **taskDescription**: `string`

___

### taskName

• **taskName**: `string`

___

### user

• **user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delegaId` | `number` |
| `description` | `string` |
| `dmUtentiId` | `number` |
