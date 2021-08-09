[ARXivar Documentation](../README.md) / [Exports](../modules.md) / [Interfaces](../modules/interfaces.md) / IUserService

# Interface: IUserService

[Interfaces](../modules/interfaces.md).IUserService

## Table of contents

### Properties

- [getAoo](interfaces.iuserservice.md#getaoo)
- [getAvatar](interfaces.iuserservice.md#getavatar)
- [getDatabase](interfaces.iuserservice.md#getdatabase)
- [getDatabaseInfo](interfaces.iuserservice.md#getdatabaseinfo)
- [getDescription](interfaces.iuserservice.md#getdescription)
- [getLang](interfaces.iuserservice.md#getlang)
- [getProvider](interfaces.iuserservice.md#getprovider)
- [getRoles](interfaces.iuserservice.md#getroles)
- [getServerName](interfaces.iuserservice.md#getservername)
- [getStatus](interfaces.iuserservice.md#getstatus)
- [getUserGroup](interfaces.iuserservice.md#getusergroup)
- [getUserId](interfaces.iuserservice.md#getuserid)
- [getUserName](interfaces.iuserservice.md#getusername)
- [getUserNameComplete](interfaces.iuserservice.md#getusernamecomplete)
- [hasAvatar](interfaces.iuserservice.md#hasavatar)
- [hasRole](interfaces.iuserservice.md#hasrole)
- [isInRole](interfaces.iuserservice.md#isinrole)
- [isNotAdmin](interfaces.iuserservice.md#isnotadmin)

## Properties

### getAoo

• **getAoo**: () => *string*

Get the Aoo of the user

**`returns`** The Aoo name

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getAvatar

• **getAvatar**: () => *string*

Get the user's avatar

**`returns`** The base64 code of the user's avatar

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getDatabase

• **getDatabase**: () => *string*

Get the database name

**`returns`** The database name

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getDatabaseInfo

• **getDatabaseInfo**: () => *Promise*<[*IUserService*](interfaces.iuserservice.md)\>

DEPRECATED Use [ArxivarUserServiceCreator.create](../classes/arxivaruserservicecreator.arxivaruserservicecreator-1.md#create) instead.
Load the database information

#### Type declaration

▸ (): *Promise*<[*IUserService*](interfaces.iuserservice.md)\>

**Returns:** *Promise*<[*IUserService*](interfaces.iuserservice.md)\>

___

### getDescription

• **getDescription**: () => *string*

Get the description of the user

**`returns`** The description of the user

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getLang

• **getLang**: () => *string*

Get the language of the user

**`returns`** The language of the user

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getProvider

• **getProvider**: () => *string*

Get the database provider name

**`returns`** The database provider name

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getRoles

• **getRoles**: () => { `roleName`: *string* ; `value`: *boolean*  }[]

Get the roles of the user

**`returns`** The user roles

#### Type declaration

▸ (): { `roleName`: *string* ; `value`: *boolean*  }[]

**Returns:** { `roleName`: *string* ; `value`: *boolean*  }[]

___

### getServerName

• **getServerName**: () => *string*

Get the server name

**`returns`** The server name

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getStatus

• **getStatus**: () => *number*

Get the status of the user

**`returns`** The user id

#### Type declaration

▸ (): *number*

**Returns:** *number*

___

### getUserGroup

• **getUserGroup**: () => { `groupId`: *number* ; `isAdmin`: *boolean* ; `isProfiler`: *boolean* ; `isUser`: *boolean* ; `notSet`: *boolean*  }

Retrieve information about the group of the current user

**`returns`** The user group

#### Type declaration

▸ (): *object*

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `groupId` | *number* |
| `isAdmin` | *boolean* |
| `isProfiler` | *boolean* |
| `isUser` | *boolean* |
| `notSet` | *boolean* |

___

### getUserId

• **getUserId**: () => *string*

Get the id of the user

**`returns`** The user id

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getUserName

• **getUserName**: () => *string*

Get the name of the user

**`returns`** The username

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### getUserNameComplete

• **getUserNameComplete**: () => *string*

Get the complete name of the user

**`returns`** The complete name of the user

#### Type declaration

▸ (): *string*

**Returns:** *string*

___

### hasAvatar

• **hasAvatar**: () => *boolean*

Get the information about the user's avatar status

**`returns`** The state of the avatar

#### Type declaration

▸ (): *boolean*

**Returns:** *boolean*

___

### hasRole

• **hasRole**: (`roleName`: *any*) => *any*

DEPRECATED Use [UserService.isInRole](../classes/userservice.userservice-1.md#isinrole) instead.
Check if the currently logged user has a certain role enabled

**`param`** object containing the name of the role

**`returns`** true if the user has the selected roles, false otherwise

#### Type declaration

▸ (`roleName`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleName` | *any* |

**Returns:** *any*

___

### isInRole

• **isInRole**: (`roleName`: *string*) => *boolean*

Check if the currently logged user has a certain role enabled

**`param`** the name of the role

**`returns`** true if the user has the roles, false otherwise

#### Type declaration

▸ (`roleName`: *string*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `roleName` | *string* |

**Returns:** *boolean*

___

### isNotAdmin

• **isNotAdmin**: () => *boolean*

Check if the user currently logged is not an administrator

**`returns`** false if the user is administrator, true otherwise

#### Type declaration

▸ (): *boolean*

**Returns:** *boolean*
