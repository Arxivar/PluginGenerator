#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins.Attributes](Abletech_Workflow_Plugins_Attributes.md 'Abletech.Workflow.Plugins.Attributes').[PluginAttribute](PluginAttribute.md 'Abletech.Workflow.Plugins.Attributes.PluginAttribute')
## PluginAttribute.PluginAttribute(string, string, string) Constructor
Construct the attribute's instance  
```csharp
public PluginAttribute(string pluginId, string displayName, string version);
```
#### Parameters
<a name='Abletech_Workflow_Plugins_Attributes_PluginAttribute_PluginAttribute(string_string_string)_pluginId'></a>
`pluginId` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The plugin's id
  
<a name='Abletech_Workflow_Plugins_Attributes_PluginAttribute_PluginAttribute(string_string_string)_displayName'></a>
`displayName` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The plugin's name
  
<a name='Abletech_Workflow_Plugins_Attributes_PluginAttribute_PluginAttribute(string_string_string)_version'></a>
`version` [System.String](https://docs.microsoft.com/en-us/dotnet/api/System.String 'System.String')  
The plugin's version
  
#### Exceptions
[System.ArgumentException](https://docs.microsoft.com/en-us/dotnet/api/System.ArgumentException 'System.ArgumentException')  
Throw when the plugin id is an invalid [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid') value, the display name is empty (null or whitespace) or the version is not in a valid [System.Version](https://docs.microsoft.com/en-us/dotnet/api/System.Version 'System.Version') format
