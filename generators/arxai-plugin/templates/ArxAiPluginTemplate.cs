using System.ComponentModel;
using Abletech.Arxivar.ArxAI.Plugins;
using Microsoft.Extensions.Logging;

namespace Abletech.Arxivar.ArxAI.Plugins.<%= props.pluginname %>;

/// <summary>
/// <%= props.description %>
/// </summary>
[ArxAiPlugin(PluginIdValue, "<%= props.label %>", "<%= props.version %>",
    Description = "<%= props.description %>",
    Icon = "<%= props.icon %>")]
public class <%= props.pluginname %>Plugin : ArxAiToolProvider, IInstructionsProvider, IInitializablePlugin, IAsyncDisposable
{
    /// <summary>
    /// Unique id of the plugin. It must be a valid <see cref="Guid"/>, and the version passed to the
    /// attribute above a valid <see cref="System.Version"/>: the host parses both while reading the
    /// attribute, so a malformed value makes the plugin unloadable.
    /// </summary>
    public const string PluginIdValue = "<%= props.id %>";

    /// <summary>Logger injected by the host, categorized with the plugin name.</summary>
    /// <remarks>
    /// <see cref="ILogger"/> is resolved by the host itself; any other injected type must be
    /// registered in the host container, and a type it cannot resolve makes the activation fail.
    /// </remarks>
    [Injected]
    public ILogger Logger { get; set; } = null;

    /// <summary>Sample configuration parameter, configured from the Arxivar management APIs.</summary>
    /// <remarks>
    /// Supported types: <see cref="string"/>, <see cref="int"/>, <see cref="long"/>,
    /// <see cref="decimal"/>, <see cref="bool"/>, <see cref="DateTime"/> and their nullable
    /// variants — use <see cref="decimal"/> for fractional numbers, because <c>double</c> and
    /// <c>float</c> are rejected when the plugin is uploaded. The property needs both a public
    /// getter and a public setter.
    /// </remarks>
    [Parameter(DisplayName = "Sample value", Description = "A configurable sample value", Required = false, Confidential = false, DisplayOrder = 1)]
    public string SampleValue { get; set; } = string.Empty;

    /// <summary>
    /// Sample confidential parameter: persisted encrypted in the secure store, write-only in the
    /// management APIs, decrypted by the host only when the plugin is instantiated.
    /// </summary>
    [Parameter(DisplayName = "Secret value", Description = "A sample secret value", Required = false, Confidential = true, DisplayOrder = 2)]
    public string SecretValue { get; set; } = string.Empty;

    /// <summary>
    /// The public parameterless constructor. It is not a convention but a necessity: the host creates
    /// the instance with <c>Activator.CreateInstance(Type)</c>, which binds to this constructor and
    /// to no other.
    /// </summary>
    /// <remarks>
    /// A parameterized constructor is never called — not even one whose parameters are all optional,
    /// because that overload does not consider them. There is no constructor selection and no
    /// constructor injection: dependencies arrive after construction, on the
    /// <see cref="InjectedAttribute"/> properties. A plugin that exposes no public parameterless
    /// constructor is rejected when uploaded, and would fail with
    /// <see cref="MissingMethodException"/> anyway.
    /// <para>
    /// Keep it trivial and leave the real setup to <see cref="InitializeAsync"/>: besides the
    /// instance that serves an activation, the host also creates a throwaway one when the plugin is
    /// uploaded to read the defaults declared as property initializers.
    /// </para>
    /// </remarks>
    public <%= props.pluginname %>Plugin()
    {
    }

    /// <summary>
    /// Optional setup hook. The host calls it once per instance — and it creates one instance per
    /// activation — right after creating it and after the <see cref="InjectedAttribute"/>
    /// dependencies and the <see cref="ParameterAttribute"/> values have been assigned, so it is
    /// safe to read them here.
    /// </summary>
    /// <remarks>
    /// Use this to acquire resources owned by the instance and released in <see cref="DisposeAsync"/>
    /// (e.g. an <c>HttpClient</c>, a connection, a temp file). Make the method <c>async</c> and
    /// <c>await</c> your setup if needed.
    /// <para>
    /// Do NOT rethrow on failure: the host would discard the whole plugin (instructions included).
    /// Prefer logging the error and degrading gracefully (e.g. leave a field null and expose a
    /// readiness check tool), so the model can react instead of losing the plugin entirely. The
    /// same discard happens when an injected service cannot be resolved or a required parameter has
    /// no value: that plugin is skipped and the conversation carries on without it.
    /// </para>
    /// </remarks>
    public Task InitializeAsync()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: initializing");

        // TODO: acquire any resources this instance needs (released in DisposeAsync).
        return Task.CompletedTask;
    }

    /// <summary>
    /// Instructions fragment that the host appends to the chatbot instructions.
    /// Return string.Empty to contribute nothing.
    /// </summary>
    /// <remarks>
    /// The origin of the execution is expressed structurally on the context: use feature detection
    /// instead of assuming one, because the same plugin can be assigned to chatbots of different
    /// kinds — and future origins will show up as new sections of the context.
    /// </remarks>
    public string GetInstructions(IArxAiPluginContext context)
    {
        if (context.WorkflowTask is { } task)
        {
            // Workflow task chatbot: no documents in scope.
            Logger.LogInformation("<%= props.pluginname %>Plugin: applying instructions for workflow task {TaskId} of process {ProcessId}",
                task.TaskId, task.ProcessId);
        }
        else if (context.WorkflowLink is { } link)
        {
            // Workflow link AI command: headless flow, no interacting user and no chat.
            Logger.LogInformation("<%= props.pluginname %>Plugin: applying instructions for workflow link {LinkId} of process {ProcessId}",
                link.LinkId, link.ProcessId);
        }
        else
        {
            // Documents chatbot: the only origin carrying documents.
            Logger.LogInformation("<%= props.pluginname %>Plugin: applying instructions for user {UserId} on {DocumentCount} document(s)",
                context.UserId?.ToString() ?? "unknown", context.Documents.Count);
        }

        // TODO: return the plugin instructions fragment.
        return string.Empty;
    }

    /// <summary>
    /// Sample tool: returns the value of the SampleValue parameter.
    /// </summary>
    /// <remarks>
    /// Public methods marked with <see cref="DescriptionAttribute"/> are exposed as tools to the AI
    /// agent: the description is what the model reads to decide when to invoke them, and method
    /// parameters can be described the same way. At least one is required — a plugin deriving from
    /// <see cref="ArxAiToolProvider"/> that exposes none is rejected when uploaded.
    /// <para>
    /// The inherited <c>Context</c> property gives a tool the same execution context handed to
    /// <see cref="GetInstructions"/>; the host assigns it before any tool method runs.
    /// </para>
    /// </remarks>
    [Description("Returns the value of the SampleValue parameter")]
    public string GetSampleValue()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: tool GetSampleValue invoked");

        // TODO: implement the tool logic.
        return SampleValue;
    }

    /// <summary>
    /// Teardown hook. The host disposes the instance when the activation that created it ends: the
    /// chat client for the chatbot origins — so the instance lives for the whole chat, not for a
    /// single response — and the single command execution for the headless workflow link origin.
    /// This is the place to release resources acquired in <see cref="InitializeAsync"/> or held in
    /// instance fields.
    /// </summary>
    /// <remarks>
    /// Scope notes:
    /// <list type="bullet">
    /// <item>Do NOT dispose injected services (the host's DI container owns them).</item>
    /// <item>Resources scoped to a single tool call belong in a <c>using</c> inside that tool
    /// method, not here.</item>
    /// <item>Resources meant to be shared across activations must NOT be tied to this disposal:
    /// manage them out-of-band (e.g. a static cache with idle reclamation).</item>
    /// </list>
    /// <c>IDisposable</c> is honoured just as well, when there is nothing to await.
    /// </remarks>
    public ValueTask DisposeAsync()
    {
        Logger.LogInformation("<%= props.pluginname %>Plugin: disposing");

        // TODO: release the resources owned by this instance.
        return ValueTask.CompletedTask;
    }
}
