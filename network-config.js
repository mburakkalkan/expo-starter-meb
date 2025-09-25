const fs = require("fs");
const path = require("path");
const { withAndroidManifest, withDangerousMod } = require("@expo/config-plugins");

const NETWORKING_DIR = path.join(__dirname, "networking");
const NETWORK_CONFIG_XML = path.join(NETWORKING_DIR, "network_security_config.xml");
const CERT_PATH = path.join(NETWORKING_DIR, "MEB_SERTIFIKASI.crt");

const ANDROID_XML_PATH = "android/app/src/main/res/xml/network_security_config.xml";
const ANDROID_RAW_PATH = "android/app/src/main/res/raw/trusted_roots";

function ensureDirExists(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function copyFile(src, dest) {
	fs.copyFileSync(src, dest);
}

function withCustomNetworkSecurity(config) {
	config = withDangerousMod(config, [
		"android",
		async (config) => {
			const { projectRoot } = config.modRequest;

			const xmlDir = path.join(projectRoot, "android/app/src/main/res/xml");
			const xmlPath = path.join(projectRoot, ANDROID_XML_PATH);
			ensureDirExists(xmlDir);
			copyFile(NETWORK_CONFIG_XML, xmlPath);

			const rawDir = path.join(projectRoot, "android/app/src/main/res/raw");
			const caPath = path.join(projectRoot, ANDROID_RAW_PATH);
			ensureDirExists(rawDir);
			copyFile(CERT_PATH, caPath);

			return config;
		},
	]);

	config = withAndroidManifest(config, async (config) => {
		const application = config.modResults.manifest.application?.[0];
		if (application && !application.$["android:networkSecurityConfig"]) {
			application.$["android:networkSecurityConfig"] = "@xml/network_security_config";
		}
		return config;
	});

	return config;
}

module.exports = withCustomNetworkSecurity;
