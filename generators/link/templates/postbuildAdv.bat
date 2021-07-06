ECHO "Building Plugin"

SET TargetDir=%1
ECHO %TargetDir%

DEL /s "%TargetDir%\*.*"

MKDIR "%TargetDir%\client"
XCOPY "..\scripts\build\" "%TargetDir%\client" /y /s

powershell compress-archive -Path "%TargetDir%\*" -Update -DestinationPath "..\<%= props.pluginname %>"
