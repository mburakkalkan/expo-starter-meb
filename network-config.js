const fs = require("fs");
const path = require("path");
const {
  withAndroidManifest,
  withDangerousMod,
} = require("@expo/config-plugins");

const NETWORK_CONFIG_PATH =
  "android/app/src/main/res/xml/network_security_config.xml";

const content = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>  
      <base-config>  
            <trust-anchors>  
                <certificates src="system" />  
                <certificates src="user" />  
           </trust-anchors>  
      </base-config>  
 </network-security-config>`;

function withCustomNetworkSecurity(config) {
  config = withDangerousMod(config, [
    "android",
    async (config) => {
      const { projectRoot } = config.modRequest;

      const xmlDir = path.join(
        projectRoot,
        "android/app/src/main/res/xml"
      );
      const xmlPath = path.join(projectRoot, NETWORK_CONFIG_PATH);

      if (!fs.existsSync(xmlDir)) {
        fs.mkdirSync(xmlDir, { recursive: true });
      }

      fs.writeFileSync(xmlPath, content);

      return config;
    },
  ]);

  config = withAndroidManifest(config, async (config) => {
    const application = config.modResults.manifest.application?.[0];

    if (
      application &&
      !application.$["android:networkSecurityConfig"]
    ) {
      application.$["android:networkSecurityConfig"] =
        "@xml/network_security_config";
    }

    return config;
  });

  console.log("Custom network security plugin is added.");
  return config;
}

module.exports = withCustomNetworkSecurity;
