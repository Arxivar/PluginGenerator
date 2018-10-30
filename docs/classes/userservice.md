[ARXivar Documentation](../README.md) > [UserService](../classes/userservice.md)

# Class: UserService

## Hierarchy

**UserService**

## Index

### Properties

* [getAoo](userservice.md#getaoo)
* [getAvatar](userservice.md#getavatar)
* [getDatabase](userservice.md#getdatabase)
* [getDatabaseInfo](userservice.md#getdatabaseinfo)
* [getDescription](userservice.md#getdescription)
* [getLang](userservice.md#getlang)
* [getProvider](userservice.md#getprovider)
* [getRoles](userservice.md#getroles)
* [getServerName](userservice.md#getservername)
* [getStatus](userservice.md#getstatus)
* [getUserGroup](userservice.md#getusergroup)
* [getUserId](userservice.md#getuserid)
* [getUserName](userservice.md#getusername)
* [getUserNameComplete](userservice.md#getusernamecomplete)
* [hasAvatar](userservice.md#hasavatar)
* [hasRole](userservice.md#hasrole)
* [isNotAdmin](userservice.md#isnotadmin)
* [updateProfile](userservice.md#updateprofile)

---

## Properties

<a id="getaoo"></a>

###  getAoo

**● getAoo**: *`function`*

*Defined in services/externals/UserService.ts:91*

Get the Aoo of the user
*__returns__*: The Aoo name

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getavatar"></a>

###  getAvatar

**● getAvatar**: *`function`*

*Defined in services/externals/UserService.ts:76*

Get the user's avatar
*__returns__*: The base64 code of the user's avatar

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getdatabase"></a>

###  getDatabase

**● getDatabase**: *`function`*

*Defined in services/externals/UserService.ts:96*

Get the database name
*__returns__*: The database name

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getdatabaseinfo"></a>

###  getDatabaseInfo

**● getDatabaseInfo**: *`function`*

*Defined in services/externals/UserService.ts:133*

Load the database informations

#### Type declaration
▸(): [UserService](userservice.md)

**Returns:** [UserService](userservice.md)

___
<a id="getdescription"></a>

###  getDescription

**● getDescription**: *`function`*

*Defined in services/externals/UserService.ts:61*

Get the description of the user
*__returns__*: The description of the user

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getlang"></a>

###  getLang

**● getLang**: *`function`*

*Defined in services/externals/UserService.ts:71*

Get the language of the user
*__returns__*: The language of the user

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getprovider"></a>

###  getProvider

**● getProvider**: *`function`*

*Defined in services/externals/UserService.ts:106*

Get the database provider name
*__returns__*: The database provider name

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getroles"></a>

###  getRoles

**● getRoles**: *`function`*

*Defined in services/externals/UserService.ts:86*

Get the roles of the user
*__returns__*: The user roles

#### Type declaration
▸(): `Array`<`object`>

**Returns:** `Array`<`object`>

___
<a id="getservername"></a>

###  getServerName

**● getServerName**: *`function`*

*Defined in services/externals/UserService.ts:101*

Get the server name
*__returns__*: The server name

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getstatus"></a>

###  getStatus

**● getStatus**: *`function`*

*Defined in services/externals/UserService.ts:81*

Get the status of the user
*__returns__*: The user id

#### Type declaration
▸(): `number`

**Returns:** `number`

___
<a id="getusergroup"></a>

###  getUserGroup

**● getUserGroup**: *`function`*

*Defined in services/externals/UserService.ts:35*

Retrieve informations about the group of the current user
*__returns__*: The user group

#### Type declaration
▸(): `object`

**Returns:** `object`

___
<a id="getuserid"></a>

###  getUserId

**● getUserId**: *`function`*

*Defined in services/externals/UserService.ts:46*

Get the id of the user
*__returns__*: The user id

#### Type declaration
▸(): `number`

**Returns:** `number`

___
<a id="getusername"></a>

###  getUserName

**● getUserName**: *`function`*

*Defined in services/externals/UserService.ts:51*

Get the name of the user
*__returns__*: The username

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="getusernamecomplete"></a>

###  getUserNameComplete

**● getUserNameComplete**: *`function`*

*Defined in services/externals/UserService.ts:56*

Get the complete name of the user
*__returns__*: The complete name of the user

#### Type declaration
▸(): `string`

**Returns:** `string`

___
<a id="hasavatar"></a>

###  hasAvatar

**● hasAvatar**: *`function`*

*Defined in services/externals/UserService.ts:66*

Get the information about the user's avatar status
*__returns__*: The state of the avatar

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="hasrole"></a>

###  hasRole

**● hasRole**: *`function`*

*Defined in services/externals/UserService.ts:164*

Check if the currently logged user has a certain role enabled
*__param__*: object containing the name of the role

*__returns__*: true if the user has the selected roles, false otherwise

#### Type declaration
▸(__namedParameters: *`object`*): `any`

**Parameters:**

**__namedParameters: `object`**

| Name | Type |
| ------ | ------ |
| any | `any` |

**Returns:** `any`

___
<a id="isnotadmin"></a>

###  isNotAdmin

**● isNotAdmin**: *`function`*

*Defined in services/externals/UserService.ts:158*

Check if the user currently logged is not an administrator
*__returns__*: false if the user is administrator, true otherwise

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="updateprofile"></a>

###  updateProfile

**● updateProfile**: *`function`*

*Defined in services/externals/UserService.ts:129*

Update the user informations
*__param__*: The updated user profile info

#### Type declaration
▸(userProfile: *`any`*): `any`

**Parameters:**

| Name | Type |
| ------ | ------ |
| userProfile | `any` |

**Returns:** `any`

___

