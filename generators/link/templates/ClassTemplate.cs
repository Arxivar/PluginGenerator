using Abletech.Workflow.Plugins.Attributes;
using Abletech.Workflow.Plugins.Link;
using Abletech.Workflow.Plugins.Services;
using System;
using System.Threading.Tasks;

namespace <%= props.pluginname%>
{
	[Plugin("<%= props.id %>", "<%= props.label %>", "<%= props.minVersion %>", Description = "<%= props.description %>", Icon = "<%= props.icon %>")]
    public class <%= props.pluginname%> : WorkflowPluginLink
    {
		[InputParameter(DisplayName = "String", Description = "This is a string property")]
		public string InputStringProperty { get; set; }

		[InputParameter(DisplayName = "Int", Description = "This is a integer property")]
		public int InputIntProperty { get; set; }

		[InputParameter(DisplayName = "Date time", Description = "This is a date time property")]
		public DateTime InputDateTimeProperty { get; set; }

		[InputParameter(DisplayName = "Bool", Description = "This is a boolean property")]
		public bool InputBoolProperty { get; set; }

		[OutputParameter]
		public string OutputProperty { get; set; }

		[Injected]
		public IMongoDbProvider MongoDb { get; set; }

		[Injected]
		public IAuthProvider Auth { get; set; }

		public override Task ExecuteAsync(WorkflowPluginLinkContext context)
		{
			// ...qui implemento la logica del plugin
			return Task.CompletedTask;
		}
    }
}
