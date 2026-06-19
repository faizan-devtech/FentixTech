 exports.sendOfferEmail = async (email, pdfUrl) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Your Offer Letter - FentixTech",

    html: `
      <h2>Congratulations 🎉</h2>
      <p>Your offer letter is ready.</p>
      <a href="${pdfUrl}" target="_blank">Download Offer Letter</a>
    `,
  });
};