const { transporter } = require("../config/mail");

exports.sendOfferEmail = async (email, pdfUrl) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Your Offer Letter",
    html: `
      <h2>Congratulations 🎉</h2>
      <p>Your offer letter is attached below:</p>
      <a href="${pdfUrl}">Download Offer Letter</a>
    `,
  });
};