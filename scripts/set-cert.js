const path = require("path");
const fs = require("fs");

const certPath = path.resolve(__dirname, "../networking/MEB_SERTIFIKASI.crt");

if (fs.existsSync(certPath)) {
	if (!global._certSet) {
		process.env.NODE_EXTRA_CA_CERTS = certPath;
		global._certSet = true;
	}
} else {
	console.warn("⚠️ MEB_SERTIFIKASI.crt not found at", certPath);
}
