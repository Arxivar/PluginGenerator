[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IUserService

# Interface: IUserService

[Interfaces](../modules/Interfaces.md).IUserService

## Implemented by

- [`UserService`](../classes/UserService.UserService-1.md)

## Table of contents

### Methods

- [getAoo](Interfaces.IUserService.md#getaoo)
- [getAvatar](Interfaces.IUserService.md#getavatar)
- [getDatabase](Interfaces.IUserService.md#getdatabase)
- [getDatabaseInfo](Interfaces.IUserService.md#getdatabaseinfo)
- [getDescription](Interfaces.IUserService.md#getdescription)
- [getLang](Interfaces.IUserService.md#getlang)
- [getProvider](Interfaces.IUserService.md#getprovider)
- [getRoles](Interfaces.IUserService.md#getroles)
- [getServerName](Interfaces.IUserService.md#getservername)
- [getStatus](Interfaces.IUserService.md#getstatus)
- [getUserGroup](Interfaces.IUserService.md#getusergroup)
- [getUserId](Interfaces.IUserService.md#getuserid)
- [getUserName](Interfaces.IUserService.md#getusername)
- [getUserNameComplete](Interfaces.IUserService.md#getusernamecomplete)
- [hasAvatar](Interfaces.IUserService.md#hasavatar)
- [hasRole](Interfaces.IUserService.md#hasrole)
- [isInRole](Interfaces.IUserService.md#isinrole)
- [isNotAdmin](Interfaces.IUserService.md#isnotadmin)

## Methods

### getAoo

▸ **getAoo**(): `string`

Get the Aoo of the user

#### Returns

`string`

The Aoo name

___

### getAvatar

▸ **getAvatar**(): `string`

Get the user's avatar

#### Returns

`string`

The base64 code of the user's avatar

___

### getDatabase

▸ **getDatabase**(): `string`

Get the database name

#### Returns

`string`

The database name

___

### getDatabaseInfo

▸ **getDatabaseInfo**(): `Promise`<[`IUserService`](Interfaces.IUserService.md)\>

DEPRECATED Use [ArxivarUserServiceCreator.create](../classes/ArxivarUserServiceCreator.ArxivarUserServiceCreator-1.md#create) instead.
Load the database information

#### Returns

`Promise`<[`IUserService`](Interfaces.IUserService.md)\>

___

### getDescription

▸ **getDescription**(): `string`

Get the description of the user

#### Returns

`string`

The description of the user

___

### getLang

▸ **getLang**(): `string`

Get the language of the user

#### Returns

`string`

The language of the user

___

### getProvider

▸ **getProvider**(): `string`

Get the database provider name

#### Returns

`string`

The database provider name

___

### getRoles

▸ **getRoles**(): { `roleName`: `string` ; `value`: `boolean`  }[]

Get the roles of the user

#### Returns

{ `roleName`: `string` ; `value`: `boolean`  }[]

The user roles

___

### getServerName

▸ **getServerName**(): `string`

Get the server name

#### Returns

`string`

The server name

___

### getStatus

▸ **getStatus**(): `number`

Get the status of the user

#### Returns

`number`

The user id

___

### getUserGroup

▸ **getUserGroup**(): `Object`

Retrieve information about the group of the current user

#### Returns

`Object`

The user group

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |
| `isAdmin` | `boolean` |
| `isProfiler` | `boolean` |
| `isUser` | `boolean` |
| `notSet` | `boolean` |

___

### getUserId

▸ **getUserId**(): `string`

Get the id of the user

#### Returns

`string`

The user id

___

### getUserName

▸ **getUserName**(): `string`

Get the name of the user

#### Returns

`string`

The username

___

### getUserNameComplete

▸ **getUserNameComplete**(): `string`

Get the complete name of the user

#### Returns

`string`

The complete name of the user

___

### hasAvatar

▸ **hasAvatar**(): `boolean`

Get the information about the user's avatar status

#### Returns

`boolean`

The state of the avatar

___

### hasRole

▸ **hasRole**(`roleName`): `any`

DEPRECATED Use [UserService.isInRole](../classes/UserService.UserService-1.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `any` | object containing the name of the role |

#### Returns

`any`

true if the user has the selected roles, false otherwise

___

### isInRole

▸ **isInRole**(`roleName`): `boolean`

Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `string` | the name of the role |

#### Returns

`boolean`

true if the user has the roles, false otherwise

___

### isNotAdmin

▸ **isNotAdmin**(): `boolean` \| `Promise`<`boolean`\>

Check if the user currently logged is not an administrator

#### Returns

`boolean` \| `Promise`<`boolean`\>

false if the user is administrator, true otherwise
