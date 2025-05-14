const fs = require("fs");
const path = require("path");
const {
  withAndroidManifest,
  withDangerousMod,
} = require("@expo/config-plugins");

const NETWORK_CONFIG_PATH =
  "android/app/src/main/res/xml/network_security_config.xml";

function withCustomNetworkSecurity(config) {
  console.log("Custom network security plugin is running...");
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

      const content = fs.readFileSync("network-config.xml");
      console.log(content);
      fs.writeFileSync(xmlPath, content.trim());

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
