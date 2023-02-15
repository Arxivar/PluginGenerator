[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IUrlViewParams

# Interface: IUrlViewParams

[Interfaces](../modules/Interfaces.md).IUrlViewParams

## Table of contents

### Properties

- [fields](Interfaces.IUrlViewParams.md#fields)
- [fromTo](Interfaces.IUrlViewParams.md#fromto)
- [maxResults](Interfaces.IUrlViewParams.md#maxresults)
- [redirectResults](Interfaces.IUrlViewParams.md#redirectresults)

## Properties

### fields

• **fields**: [`IUrlFilter`](Interfaces.IUrlFilter.md)[]

**`Property`**

the fields to be set for the search.

___

### fromTo

• `Optional` **fromTo**: `number`

**`Property`**

the search mode for from and to. 0 and 1 or. If not set, the default is that of the last search.

___

### maxResults

• `Optional` **maxResults**: `number`

**`Property`**

the maximum number of results for the search. Set 0 for no limit. If not set,the default is that of the last search.

___

### redirectResults

• `Optional` **redirectResults**: `boolean`

**`Property`**

if the view will go to result or stay in the search page.
