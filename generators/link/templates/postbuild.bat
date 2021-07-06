ECHO "Building Plugin"

SET TargetDir=%1
ECHO %TargetDir%

powershell compress-archive -Path "%TargetDir%\*" -Update -DestinationPath "..\<%= props.pluginname %>"
