#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins](Abletech_Workflow_Plugins.md 'Abletech.Workflow.Plugins').[WorkflowPluginBase&lt;TContext&gt;](WorkflowPluginBase_TContext_.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;')
## WorkflowPluginBase&lt;TContext&gt;.OnValidate() Method
When overriden, returns a list of custom validation information.  
This method will be called right after the default validation of all the input parameters.  
```csharp
protected virtual System.Collections.Generic.IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> OnValidate();
```
#### Returns
[System.Collections.Generic.IEnumerable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')[System.ComponentModel.DataAnnotations.ValidationResult](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.DataAnnotations.ValidationResult 'System.ComponentModel.DataAnnotations.ValidationResult')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1 'System.Collections.Generic.IEnumerable`1')  
A collection that holds custom failed-validation information
