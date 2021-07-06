ECHO "Building webpack"

SET TargetDir=%1
DEL /q "%TargetDir%\*.*"
npm run build
