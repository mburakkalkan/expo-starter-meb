const path = require("path");
const fs = require("fs");

const certPath = path.resolve(__dirname, "../networking/MEB_SERTIFIKASI.crt");

if (fs.existsSync(certPath)) {
	if (!global._certSet) {
		process.env.NODE_EXTRA_CA_CERTS = certPath;
		console.log(`✅ NODE_EXTRA_CA_CERTS set to ${certPath}`);
		global._certSet = true;
	}
} else {
	console.warn("⚠️ MEB cert not found at networking/MEB_SERTIFIKASI.crt");
}
