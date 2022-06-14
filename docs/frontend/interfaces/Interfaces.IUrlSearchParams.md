[ARXivar Documentation](../README.md) / [Modules](../modules.md) / [Interfaces](../modules/Interfaces.md) / IUrlSearchParams

# Interface: IUrlSearchParams

[Interfaces](../modules/Interfaces.md).IUrlSearchParams

## Table of contents

### Properties

- [fields](Interfaces.IUrlSearchParams.md#fields)
- [fromTo](Interfaces.IUrlSearchParams.md#fromto)
- [maxResults](Interfaces.IUrlSearchParams.md#maxresults)

## Properties

### fields

• **fields**: [`IUrlFilter`](Interfaces.IUrlFilter.md)[]

**`property`** Defines the fields to be set for the search.

___

### fromTo

• `Optional` **fromTo**: `number`

**`property`** Defines the search mode for from and to. 0 and 1 or. If not set, the default is that of the last search.

___

### maxResults

• `Optional` **maxResults**: `number`

**`property`** Defines the maximum number of results for the search. Set 0 for no limit. If not set,the default is that of the last search.
