#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins](Abletech_Workflow_Plugins.md 'Abletech.Workflow.Plugins')
## WorkflowPluginBase&lt;TContext&gt; Class
Defines a base class for a plugin workflow  
```csharp
public abstract class WorkflowPluginBase<TContext> :
Abletech.Workflow.Plugins.IWorkflowPlugin,
System.ComponentModel.DataAnnotations.IValidatableObject,
System.IDisposable
    where TContext : class, Abletech.Workflow.Plugins.IWorkflowPluginContext
```
#### Type parameters
<a name='Abletech_Workflow_Plugins_WorkflowPluginBase_TContext__TContext'></a>
`TContext`  
The type of the execution context
  

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; WorkflowPluginBase&lt;TContext&gt;  

Derived  
&#8627; [WorkflowPluginLink](WorkflowPluginLink.md 'Abletech.Workflow.Plugins.Link.WorkflowPluginLink')  

Implements [IWorkflowPlugin](IWorkflowPlugin.md 'Abletech.Workflow.Plugins.IWorkflowPlugin'), [System.ComponentModel.DataAnnotations.IValidatableObject](https://docs.microsoft.com/en-us/dotnet/api/System.ComponentModel.DataAnnotations.IValidatableObject 'System.ComponentModel.DataAnnotations.IValidatableObject'), [System.IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable 'System.IDisposable')  

| Properties | |
| :--- | :--- |
| [AdvancedConfiguration](WorkflowPluginBase_TContext__AdvancedConfiguration.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.AdvancedConfiguration') | Gets the advanced configuration informations<br/> |
| [Logger](WorkflowPluginBase_TContext__Logger.md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.Logger') | Gets the logger instance<br/> |

| Methods | |
| :--- | :--- |
| [Dispose()](WorkflowPluginBase_TContext__Dispose().md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.Dispose()') | Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources. |
| [ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest)](WorkflowPluginBase_TContext__ExecuteAdvancedConfigurationCommandAsync(WorkflowAdvancedConfigurationCommandRequest).md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.ExecuteAdvancedConfigurationCommandAsync(Abletech.Workflow.Plugins.Configuration.WorkflowAdvancedConfigurationCommandRequest)') | When overriden, it allows to specify some custom operations needed for the advanced configuration<br/> |
| [ExecuteAsync(TContext)](WorkflowPluginBase_TContext__ExecuteAsync(TContext).md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.ExecuteAsync(TContext)') | Executes the plugin<br/> |
| [OnDisposing()](WorkflowPluginBase_TContext__OnDisposing().md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.OnDisposing()') | When overriden, it specifies custom logic to perform on plugin's dispose.<br/>This method will be called after the end of the plugin execution and the set of the process variables mapped to the output parameters<br/> |
| [OnInitializedAsync()](WorkflowPluginBase_TContext__OnInitializedAsync().md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.OnInitializedAsync()') | When overidden, it specifies custom logic to perform on plugin's initialization.<br/>This method will be called right after the creation of the plugin instance and the initialization of the properties marked as Injected (see [InjectedAttribute](InjectedAttribute.md 'Abletech.Workflow.Plugins.Attributes.InjectedAttribute'))<br/> |
| [OnValidate()](WorkflowPluginBase_TContext__OnValidate().md 'Abletech.Workflow.Plugins.WorkflowPluginBase&lt;TContext&gt;.OnValidate()') | When overriden, returns a list of custom validation information.<br/>This method will be called right after the default validation of all the input parameters.<br/> |
