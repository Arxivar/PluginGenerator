#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins](Abletech_Workflow_Plugins.md 'Abletech.Workflow.Plugins').[WorkflowPluginBase&lt;TContext&gt;](WorkflowPluginBase_TContext_.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;')
## WorkflowPluginBase&lt;TContext&gt;.OnInitializedAsync() Method
When overidden, it specifies custom logic to perform on plugin's initialization.  
This method will be called right after the creation of the plugin instance and the initialization of the properties marked as Injected (see [InjectedAttribute](InjectedAttribute.md 'Abletech.Workflow.Plugins.Attributes.InjectedAttribute'))  
```csharp
protected virtual System.Threading.Tasks.Task OnInitializedAsync();
```
#### Returns
[System.Threading.Tasks.Task](https://docs.microsoft.com/en-us/dotnet/api/System.Threading.Tasks.Task 'System.Threading.Tasks.Task')  
