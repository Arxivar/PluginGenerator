[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [UserService](../modules/UserService.md) / UserService

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

- [getAoo](UserService.UserService-1.md#getaoo)
- [getAvatar](UserService.UserService-1.md#getavatar)
- [getDatabase](UserService.UserService-1.md#getdatabase)
- [getDatabaseInfo](UserService.UserService-1.md#getdatabaseinfo)
- [getDescription](UserService.UserService-1.md#getdescription)
- [getLang](UserService.UserService-1.md#getlang)
- [getProvider](UserService.UserService-1.md#getprovider)
- [getRoles](UserService.UserService-1.md#getroles)
- [getServerName](UserService.UserService-1.md#getservername)
- [getStatus](UserService.UserService-1.md#getstatus)
- [getUserGroup](UserService.UserService-1.md#getusergroup)
- [getUserId](UserService.UserService-1.md#getuserid)
- [getUserName](UserService.UserService-1.md#getusername)
- [getUserNameComplete](UserService.UserService-1.md#getusernamecomplete)
- [hasAvatar](UserService.UserService-1.md#hasavatar)
- [hasRole](UserService.UserService-1.md#hasrole)
- [isInRole](UserService.UserService-1.md#isinrole)
- [isNotAdmin](UserService.UserService-1.md#isnotadmin)

## Methods

### getAoo

▸ **getAoo**(): `string`

Get the Aoo of the user

#### Returns

`string`

The Aoo name

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getAoo](../interfaces/Interfaces.IUserService.md#getaoo)

___

### getAvatar

▸ **getAvatar**(): `string`

Get the user's avatar

#### Returns

`string`

The base64 code of the user's avatar

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getAvatar](../interfaces/Interfaces.IUserService.md#getavatar)

___

### getDatabase

▸ **getDatabase**(): `string`

Get the database name

#### Returns

`string`

The database name

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getDatabase](../interfaces/Interfaces.IUserService.md#getdatabase)

___

### getDatabaseInfo

▸ **getDatabaseInfo**(): `Promise`<[`UserService`](UserService.UserService-1.md)\>

DEPRECATED Use [ArxivarUserServiceCreator.create](ArxivarUserServiceCreator.ArxivarUserServiceCreator-1.md#create) instead.
Load the database information

#### Returns

`Promise`<[`UserService`](UserService.UserService-1.md)\>

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getDatabaseInfo](../interfaces/Interfaces.IUserService.md#getdatabaseinfo)

___

### getDescription

▸ **getDescription**(): `string`

Get the description of the user

#### Returns

`string`

The description of the user

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getDescription](../interfaces/Interfaces.IUserService.md#getdescription)

___

### getLang

▸ **getLang**(): `string`

Get the language of the user

#### Returns

`string`

The language of the user

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getLang](../interfaces/Interfaces.IUserService.md#getlang)

___

### getProvider

▸ **getProvider**(): `string`

Get the database provider name

#### Returns

`string`

The database provider name

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getProvider](../interfaces/Interfaces.IUserService.md#getprovider)

___

### getRoles

▸ **getRoles**(): { `roleName`: `string` ; `value`: `boolean`  }[]

Get the roles of the user

#### Returns

{ `roleName`: `string` ; `value`: `boolean`  }[]

The user roles

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getRoles](../interfaces/Interfaces.IUserService.md#getroles)

___

### getServerName

▸ **getServerName**(): `string`

Get the server name

#### Returns

`string`

The server name

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getServerName](../interfaces/Interfaces.IUserService.md#getservername)

___

### getStatus

▸ **getStatus**(): `number`

Get the status of the user

#### Returns

`number`

The user id

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getStatus](../interfaces/Interfaces.IUserService.md#getstatus)

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

[IUserService](../interfaces/Interfaces.IUserService.md).[getUserGroup](../interfaces/Interfaces.IUserService.md#getusergroup)

___

### getUserId

▸ **getUserId**(): `string`

Get the id of the user

#### Returns

`string`

The user id

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getUserId](../interfaces/Interfaces.IUserService.md#getuserid)

___

### getUserName

▸ **getUserName**(): `string`

Get the name of the user

#### Returns

`string`

The username

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getUserName](../interfaces/Interfaces.IUserService.md#getusername)

___

### getUserNameComplete

▸ **getUserNameComplete**(): `string`

Get the complete name of the user

#### Returns

`string`

The complete name of the user

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[getUserNameComplete](../interfaces/Interfaces.IUserService.md#getusernamecomplete)

___

### hasAvatar

▸ **hasAvatar**(): `boolean`

Get the information about the user's avatar status

#### Returns

`boolean`

The state of the avatar

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[hasAvatar](../interfaces/Interfaces.IUserService.md#hasavatar)

___

### hasRole

▸ **hasRole**(`roleName`): `any`

DEPRECATED Use [UserService.isInRole](UserService.UserService-1.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `any` | object containing the name of the role |

#### Returns

`any`

true if the user has the selected roles, false otherwise

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[hasRole](../interfaces/Interfaces.IUserService.md#hasrole)

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

[IUserService](../interfaces/Interfaces.IUserService.md).[isInRole](../interfaces/Interfaces.IUserService.md#isinrole)

___

### isNotAdmin

▸ **isNotAdmin**(): `boolean` \| `Promise`<`boolean`\>

Check if the user currently logged is not an administrator

#### Returns

`boolean` \| `Promise`<`boolean`\>

false if the user is administrator, true otherwise

#### Implementation of

[IUserService](../interfaces/Interfaces.IUserService.md).[isNotAdmin](../interfaces/Interfaces.IUserService.md#isnotadmin)
