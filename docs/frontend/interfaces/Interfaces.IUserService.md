[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/Interfaces.md) / IUserService

# Interface: IUserService

[Interfaces](../modules/Interfaces.md).IUserService

## Implemented by

- [`UserService`](../classes/UserService.UserService.md)

## Table of contents

### Properties

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

## Properties

### getAoo

• **getAoo**: () => `string`

Get the Aoo of the user

#### Type declaration

▸ (): `string`

Get the Aoo of the user

##### Returns

`string`

The Aoo name

___

### getAvatar

• **getAvatar**: () => `string`

Get the user's avatar

#### Type declaration

▸ (): `string`

Get the user's avatar

##### Returns

`string`

The base64 code of the user's avatar

___

### getDatabase

• **getDatabase**: () => ``null``

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the database name

#### Type declaration

▸ (): ``null``

##### Returns

``null``

null

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the database name

___

### getDatabaseInfo

• **getDatabaseInfo**: () => `Promise`\<[`IUserService`](Interfaces.IUserService.md)\>

**`Deprecated`**

Use ArxivarUserServiceCreator.create instead.
Load the database information

#### Type declaration

▸ (): `Promise`\<[`IUserService`](Interfaces.IUserService.md)\>

##### Returns

`Promise`\<[`IUserService`](Interfaces.IUserService.md)\>

**`Deprecated`**

Use ArxivarUserServiceCreator.create instead.
Load the database information

___

### getDescription

• **getDescription**: () => `string`

Get the description of the user

#### Type declaration

▸ (): `string`

Get the description of the user

##### Returns

`string`

The description of the user

___

### getLang

• **getLang**: () => `string`

Get the language of the user

#### Type declaration

▸ (): `string`

Get the language of the user

##### Returns

`string`

The language of the user

___

### getProvider

• **getProvider**: () => ``null``

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the database provider name

#### Type declaration

▸ (): ``null``

##### Returns

``null``

null

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the database provider name

___

### getRoles

• **getRoles**: () => \{ `roleName`: `string` ; `value`: `boolean`  }[]

Get the roles of the user

#### Type declaration

▸ (): \{ `roleName`: `string` ; `value`: `boolean`  }[]

Get the roles of the user

##### Returns

\{ `roleName`: `string` ; `value`: `boolean`  }[]

The user roles

___

### getServerName

• **getServerName**: () => ``null``

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the server name

#### Type declaration

▸ (): ``null``

##### Returns

``null``

null

**`Deprecated`**

Return always null.
_Use GET /api/management/Database/DbInfo instead (with management scope)._
Get the server name

___

### getStatus

• **getStatus**: () => `number`

Get the status of the user

#### Type declaration

▸ (): `number`

Get the status of the user

##### Returns

`number`

The user id

___

### getUserGroup

• **getUserGroup**: () => \{ `groupId`: `number` ; `isAdmin`: `boolean` ; `isProfiler`: `boolean` ; `isUser`: `boolean` ; `notSet`: `boolean`  }

Retrieve information about the group of the current user

#### Type declaration

▸ (): `Object`

Retrieve information about the group of the current user

##### Returns

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

• **getUserId**: () => `string`

Get the id of the user

#### Type declaration

▸ (): `string`

Get the id of the user

##### Returns

`string`

The user id

___

### getUserName

• **getUserName**: () => `string`

Get the name of the user

#### Type declaration

▸ (): `string`

Get the name of the user

##### Returns

`string`

The username

___

### getUserNameComplete

• **getUserNameComplete**: () => `string`

Get the complete name of the user

#### Type declaration

▸ (): `string`

Get the complete name of the user

##### Returns

`string`

The complete name of the user

___

### hasAvatar

• **hasAvatar**: () => `boolean`

Get the information about the user's avatar status

#### Type declaration

▸ (): `boolean`

Get the information about the user's avatar status

##### Returns

`boolean`

The state of the avatar

___

### hasRole

• **hasRole**: (`roleName`: `any`) => `any`

**`Deprecated`**

Use UserService.isInRole instead.
Check if the currently logged user has a certain role enabled

**`Param`**

object containing the name of the role

#### Type declaration

▸ (`roleName`): `any`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `any` | object containing the name of the role |

##### Returns

`any`

true if the user has the selected roles, false otherwise

**`Deprecated`**

Use UserService.isInRole instead.
Check if the currently logged user has a certain role enabled

___

### isInRole

• **isInRole**: (`roleName`: `string`) => `boolean`

Check if the currently logged user has a certain role enabled

**`Param`**

the name of the role

#### Type declaration

▸ (`roleName`): `boolean`

Check if the currently logged user has a certain role enabled

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `string` | the name of the role |

##### Returns

`boolean`

true if the user has the roles, false otherwise

___

### isNotAdmin

• **isNotAdmin**: () => `boolean` \| `Promise`\<`boolean`\>

Check if the user currently logged is not an administrator

#### Type declaration

▸ (): `boolean` \| `Promise`\<`boolean`\>

Check if the user currently logged is not an administrator

##### Returns

`boolean` \| `Promise`\<`boolean`\>

false if the user is administrator, true otherwise
