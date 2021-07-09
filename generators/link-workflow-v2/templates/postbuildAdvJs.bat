ECHO "Building Plugin"

SET TargetDir=%1
IF NOT EXIST "%TargetDir%\client" MKDIR "%TargetDir%\client"
XCOPY "..\scripts\src" "%TargetDir%\client" /y /s
powershell compress-archive -Path "%TargetDir%\*" -Update -DestinationPath "..\<%= props.pluginname %>"