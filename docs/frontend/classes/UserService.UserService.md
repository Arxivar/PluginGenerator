[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [UserService](../modules/UserService.md) / UserService

# Class: UserService

[UserService](../modules/UserService.md).UserService

This module contains the essential methods to access the information of the user currently logged into ARXivar.
An instance of this module must be generated using the arxivarUserServiceCreator module.
```javascript
angular
.module('arxivar.plugins.directives')
.directive('widgetdesktopplugindirective', [
	'arxivarUserServiceCreator',
	function(arxivarUserServiceCreator) {
		return {
			restrict: 'E',
			scope: {
				instanceId: '@',
				desktopId: '=?'
			},
			templateUrl: 'WidgetDesktopPlugin.html',
			link: function(scope) {
				arxivarUserServiceCreator.create().then((userService) => {
					scope.userId = userService.getUserId();
				});
			}
		};
	}
]);
```

## Implements

- [`IUserService`](../interfaces/Interfaces.IUserService.md)

## Table of contents

### Methods

- [getAoo](UserService.UserService.md#getaoo)
- [getAvatar](UserService.UserService.md#getavatar)
- [getDatabase](UserService.UserService.md#getdatabase)
- [getDatabaseInfo](UserService.UserService.md#getdatabaseinfo)
- [getDescription](UserService.UserService.md#getdescription)
- [getLang](UserService.UserService.md#getlang)
- [getProvider](UserService.UserService.md#getprovider)
- [getRoles](UserService.UserService.md#getroles)
- [getServerName](UserService.UserService.md#getservername)
- [getStatus](UserService.UserService.md#getstatus)
- [getUserGroup](UserService.UserService.md#getusergroup)
- [getUserId](UserService.UserService.md#getuserid)
- [getUserName](UserService.UserService.md#getusername)
- [getUserNameComplete](UserService.UserService.md#getusernamecomplete)
- [hasAvatar](UserService.UserService.md#hasavatar)
- [hasRole](UserService.UserService.md#hasrole)
- [isInRole](UserService.UserService.md#isinrole)
- [isNotAdmin](UserService.UserService.md#isnotadmin)

## Methods

### getAoo

▸ **getAoo**(): `string`

Get the Aoo of the user

#### Returns

`string`

The Aoo name

#### Implementation of

IUserService.getAoo

___

### getAvatar

▸ **getAvatar**(): `string`

Get the user's avatar

#### Returns

`string`

The base64 code of the user's avatar

#### Implementation of

IUserService.getAvatar

___

### getDatabase

▸ **getDatabase**(): ``null``

**`Deprecated`**

Return always null. 
Use GET /api/management/Database/DbInfo instead (with management scope).

Get the database name

#### Returns

``null``

always null

#### Implementation of

IUserService.getDatabase

___

### getDatabaseInfo

▸ **getDatabaseInfo**(): `Promise`<[`UserService`](UserService.UserService.md)\>

**`Deprecated`**

Use ArxivarUserServiceCreator.create instead.
Load the database information

#### Returns

`Promise`<[`UserService`](UserService.UserService.md)\>

#### Implementation of

IUserService.getDatabaseInfo

___

### getDescription

▸ **getDescription**(): `string`

Get the description of the user

#### Returns

`string`

The description of the user

#### Implementation of

IUserService.getDescription

___

### getLang

▸ **getLang**(): `string`

Get the language of the user

#### Returns

`string`

The language of the user

#### Implementation of

IUserService.getLang

___

### getProvider

▸ **getProvider**(): ``null``

*

**`Deprecated`**

Return always null. 
Use GET /api/management/Database/DbInfo instead (with management scope).
Get the database provider name

#### Returns

``null``

null

#### Implementation of

IUserService.getProvider

___

### getRoles

▸ **getRoles**(): { `roleName`: `string` ; `value`: `boolean`  }[]

Get the roles of the user

#### Returns

{ `roleName`: `string` ; `value`: `boolean`  }[]

The user roles

#### Implementation of

IUserService.getRoles

___

### getServerName

▸ **getServerName**(): ``null``

*

**`Deprecated`**

Return always null. 
Use GET /api/management/Database/DbInfo instead (with management scope).
Get the server name

#### Returns

``null``

null

#### Implementation of

IUserService.getServerName

___

### getStatus

▸ **getStatus**(): `number`

Get the status of the user

#### Returns

`number`

The user id

#### Implementation of

IUserService.getStatus

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

#### Implementation of

IUserService.getUserGroup

___

### getUserId

▸ **getUserId**(): `string`

Get the id of the user

#### Returns

`string`

The user id

#### Implementation of

IUserService.getUserId

___

### getUserName

▸ **getUserName**(): `string`

Get the name of the user

#### Returns

`string`

The username

#### Implementation of

IUserService.getUserName

___

### getUserNameComplete

▸ **getUserNameComplete**(): `string`

Get the complete name of the user

#### Returns

`string`

The complete name of the user

#### Implementation of

IUserService.getUserNameComplete

___

### hasAvatar

▸ **hasAvatar**(): `boolean`

Get the information about the user's avatar status

#### Returns

`boolean`

The state of the avatar

#### Implementation of

IUserService.hasAvatar

___

### hasRole

▸ **hasRole**(`roleName`): `any`

**`Deprecated`**

Use [isInRole](UserService.UserService.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `any` | object containing the name of the role |

#### Returns

`any`

true if the user has the selected roles, false otherwise

#### Implementation of

IUserService.hasRole

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

#### Implementation of

IUserService.isInRole

___

### isNotAdmin

▸ **isNotAdmin**(): `boolean` \| `Promise`<`boolean`\>

Check if the user currently logged is not an administrator

#### Returns

`boolean` \| `Promise`<`boolean`\>

false if the user is administrator, true otherwise

#### Implementation of

IUserService.isNotAdmin
