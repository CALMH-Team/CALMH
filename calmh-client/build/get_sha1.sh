keystore_alias="calmh_debug"
keystore_file="build/$keystore_alias.keystore"
keystore_password="persistent"

keytool -exportcert -keystore $keystore_file -list -v -storepass $keystore_password | grep 'SHA1:' |  awk '{print $2}'