 const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

exports.generateOfferPDF = (candidate) => {
  return new Promise((resolve, reject) => {
    try {
      const dir = path.join(__dirname, "../../uploads/offers");

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const fileName = `offer-${candidate._id}.pdf`;
      const filePath = path.join(dir, fileName);

      const doc = new PDFDocument();

      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      doc.fontSize(24).text("Offer Letter", { align: "center" });
      doc.moveDown();

      doc.fontSize(14).text(`Name: ${candidate.firstName} ${candidate.lastName}`);
      doc.text(`Role: ${candidate.role}`);
      doc.text(`Email: ${candidate.email}`);

      doc.moveDown();
      doc.text(
        "We are happy to offer you this position in our company. Congratulations!"
      );

      doc.end();

      stream.on("finish", () => resolve(filePath));
      stream.on("error", reject);
    } catch (err) {
      reject(err);
    }
  });
};