#### [Abletech.Workflow.Plugins](index.md 'index')
### [Abletech.Workflow.Plugins.Context](Abletech_Workflow_Plugins_Context.md 'Abletech.Workflow.Plugins.Context').[OperationContext](OperationContext.md 'Abletech.Workflow.Plugins.Context.OperationContext')
## OperationContext.OperationContext(Guid, Guid, DateTime, int, Nullable&lt;DateTime&gt;) Constructor
Construct the operation object  
```csharp
public OperationContext(System.Guid id, System.Guid diagramOperationId, System.DateTime creationDateUtc, int retryCount, System.Nullable<System.DateTime> lastExecutionDateUtc);
```
#### Parameters
<a name='Abletech_Workflow_Plugins_Context_OperationContext_OperationContext(System_Guid_System_Guid_System_DateTime_int_System_Nullable_System_DateTime_)_id'></a>
`id` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The operation's id
  
<a name='Abletech_Workflow_Plugins_Context_OperationContext_OperationContext(System_Guid_System_Guid_System_DateTime_int_System_Nullable_System_DateTime_)_diagramOperationId'></a>
`diagramOperationId` [System.Guid](https://docs.microsoft.com/en-us/dotnet/api/System.Guid 'System.Guid')  
The diagram operation id
  
<a name='Abletech_Workflow_Plugins_Context_OperationContext_OperationContext(System_Guid_System_Guid_System_DateTime_int_System_Nullable_System_DateTime_)_creationDateUtc'></a>
`creationDateUtc` [System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')  
The operation's creation date in UTC format
  
<a name='Abletech_Workflow_Plugins_Context_OperationContext_OperationContext(System_Guid_System_Guid_System_DateTime_int_System_Nullable_System_DateTime_)_retryCount'></a>
`retryCount` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
The number of retries of the operation
  
<a name='Abletech_Workflow_Plugins_Context_OperationContext_OperationContext(System_Guid_System_Guid_System_DateTime_int_System_Nullable_System_DateTime_)_lastExecutionDateUtc'></a>
`lastExecutionDateUtc` [System.Nullable&lt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')[System.DateTime](https://docs.microsoft.com/en-us/dotnet/api/System.DateTime 'System.DateTime')[&gt;](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1 'System.Nullable`1')  
The operation's last execution date in UTC format
  
