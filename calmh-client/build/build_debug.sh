#!/env/sh

adb="$ANDROID_HOME/platform-tools/adb"
zipalign="$ANDROID_HOME/build-tools/27.0.3/zipalign"
keystore_alias="calmh_debug"
keystore_file="build/$keystore_alias.keystore"
keystore_password="persistent"
apk_filename="app-debug.apk"
output_file="/home/luis/Projects/CALMH/platforms/android/app/build/outputs/apk/debug/$apk_filename"


ionic cordova resoruces
ionic cordova build android --debug -- --keystore=$keystore_file --storePassword=$keystore_password --alias=$keystore_alias --password=$keystore_password
$adb install -r "$output_file"

exit 0