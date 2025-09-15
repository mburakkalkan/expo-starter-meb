const fs = require("fs");
const path = require("path");
const {
  withAndroidManifest,
  withDangerousMod,
} = require("@expo/config-plugins");

const NETWORK_CONFIG_PATH =
  "android/app/src/main/res/xml/network_security_config.xml";

const TRUSTED_ROOTS_PATH = "android/app/src/main/res/raw/trusted_roots";

const networkConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>  
      <base-config cleartextTrafficPermitted="true">  
            <trust-anchors>  
                <certificates src="system" />  
                <certificates src="user" />
                <certificates src="@raw/trusted_roots" />  
           </trust-anchors>  
      </base-config>  
 </network-security-config>`;

const fatihCA = `-----BEGIN CERTIFICATE-----
MIIDfzCCAmegAwIBAgIQYazX7ESZkLxDARAO7Iyu2jANBgkqhkiG9w0BAQsFADBS
MRIwEAYKCZImiZPyLGQBGRYCdHIxEzARBgoJkiaJk/IsZAEZFgNnb3YxFTATBgoJ
kiaJk/IsZAEZFgVtZWJjYTEQMA4GA1UEAxMHZmF0aWhjYTAeFw0xNjAzMDkxNTM2
MjVaFw0zNjAzMDkxNTQ2MjVaMFIxEjAQBgoJkiaJk/IsZAEZFgJ0cjETMBEGCgmS
JomT8ixkARkWA2dvdjEVMBMGCgmSJomT8ixkARkWBW1lYmNhMRAwDgYDVQQDEwdm
YXRpaGNhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwV3KFFTIoP3Q
j99VEocbGVYbRfAZ7i/tVsjeC7cdNc4m5UJginq68Pwu5Mk32G2Dy1zBoOJYyXyo
nf/KWnaMrp7N/5gCBLw7rNoSS8AXhmMQCw7AECDdcJT4jNIB2xuKY6+xq0SeqhB6
ZohFM/NIP9mEk1pa1RcM3BE/X8qLPxgqnJHCqceuqaut/J/dErcNW1WYjG7REf8G
v+h9bs+IDp0QUtXOt1/117c2aaGPUshXS5Vy4y3D61nDLQBF2sW+kjnVT8nheCkQ
4v5x4Aa9tT7IZJnWAaAAdRl61dZ3c2x+Lawd/47Jzwf3xGAowSV70ctteJ3vYp4O
xkMUa7vYFQIDAQABo1EwTzALBgNVHQ8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAd
BgNVHQ4EFgQU/vlLQqALawQN3grbFGcX13fSWkowEAYJKwYBBAGCNxUBBAMCAQAw
DQYJKoZIhvcNAQELBQADggEBAIEjFGJQjxqvATP9Lhq4TkuWcc6Pa0Nnc/fKVgsC
LASiDlF5HogcktDSjapO6w+oT3bHvUnEJVsr2TwW0YrdHbuD/ZEsmZ6dYTTPxZtQ
TFPFroMr8yAOs2F+rUOc2wVCmd7GmSz4TWWCsltl5kNrlHZ9/0aGwV2EXwBfmM9z
b8c4THA24LukeCrEGRPVb2IX4ZmG/a6pF1lBuFo27kh2nz98sB4H5sJG5SozWBF/
sfiOV5hYvXQpheBG8HaiMzhjekKgL0rQLno0fgasjrZX3KMkCcxPPoiitu0AFkEB
jB12iv+M0D3N9kmIxeFN6yH7k9rtHUUuXWTSjSB99Fdv6qA=
-----END CERTIFICATE-----`;

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

      fs.writeFileSync(xmlPath, networkConfigContent);

      const rawDir = path.join(
        projectRoot,
        "android/app/src/main/res/raw"
      );
      const caPath = path.join(projectRoot, TRUSTED_ROOTS_PATH);

      if (!fs.existsSync(rawDir)) {
        fs.mkdirSync(rawDir, { recursive: true });
      }

      fs.writeFileSync(caPath, fatihCA);

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

  return config;
}

module.exports = withCustomNetworkSecurity;
