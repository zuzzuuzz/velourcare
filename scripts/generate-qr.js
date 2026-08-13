import QRCode from "qrcode";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetUrl = "https://velourcare.com";
const publicDir = path.join(__dirname, "../public");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateQRCodes() {
  try {
    const pngPath = path.join(publicDir, "qr-code.png");
    const svgPath = path.join(publicDir, "qr-code.svg");

    // Generate PNG
    await QRCode.toFile(pngPath, targetUrl, {
      color: {
        dark: "#0f172a",
        light: "#ffffff"
      },
      width: 1024,
      margin: 2
    });
    console.log(`Generated High-Res PNG QR code at: ${pngPath}`);

    // Generate SVG
    const svgString = await QRCode.toString(targetUrl, {
      type: "svg",
      color: {
        dark: "#0f172a",
        light: "#ffffff"
      },
      margin: 2
    });
    fs.writeFileSync(svgPath, svgString);
    console.log(`Generated Scalable SVG QR code at: ${svgPath}`);

  } catch (err) {
    console.error("Error generating QR codes:", err);
    process.exit(1);
  }
}

generateQRCodes();
