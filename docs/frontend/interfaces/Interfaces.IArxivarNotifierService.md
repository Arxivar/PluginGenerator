[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IArxivarNotifierService

# Interface: IArxivarNotifierService

[Interfaces](../modules/Interfaces.md).IArxivarNotifierService

## Implemented by

- [`ArxivarNotifierService`](../classes/ArxivarNotifierService.ArxivarNotifierService.md)

## Table of contents

### Properties

- [notifyError](Interfaces.IArxivarNotifierService.md#notifyerror)
- [notifyInfo](Interfaces.IArxivarNotifierService.md#notifyinfo)
- [notifySuccess](Interfaces.IArxivarNotifierService.md#notifysuccess)
- [notifyWarning](Interfaces.IArxivarNotifierService.md#notifywarning)

## Properties

### notifyError

• **notifyError**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Notify error message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

##### Returns

`void`

___

### notifyInfo

• **notifyInfo**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Notify info message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

##### Returns

`void`

___

### notifySuccess

• **notifySuccess**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Notify success message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

##### Returns

`void`

___

### notifyWarning

• **notifyWarning**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Notify warning message.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The docnumber of the profile. |

##### Returns

`void`
