 const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

const generateOfferLetter = async (candidate) => {
  const fileName = `offer-${candidate._id}.pdf`;

  const uploadDir = path.join(
    __dirname,
    "../uploads/offers"
  );

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {
      recursive: true,
    });
  }

  const filePath = path.join(
    uploadDir,
    fileName
  );

  // FULL YOUR HTML + CSS (DYNAMIC FIELDS ADDED)
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Offer Letter</title>

<link href="https://fonts.googleapis.com/css2?family=UnifrakturCook&display=swap" rel="stylesheet">

<style>
:root {
    --persian-blue: #1C39BB;
    --persian-orange: #d87326;
}

* {
    color: black;
    font-family: Arial, sans-serif;
}

body {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    width: 794px;
    height: 1123px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.inner {
    background: linear-gradient(140deg, var(--persian-blue) 9%, white 9.2%);
    border: 15px solid var(--persian-blue);
    padding: 5px;
    width: 100%;
    height: 100%;
}

.content {
    padding: 20px;
    text-align: center;
}

.logo-icon {
    width: 55px;
}

.company-name {
    color: var(--persian-blue);
    font-weight: 900;
}

.company-name span {
    color: var(--persian-orange);
}

.title {
    font-size: 28px;
    color: var(--persian-orange);
    font-weight: bold;
}

.text-small {
    font-size: 14px;
    font-weight: bold;
}

.name {
    font-size: 22px;
    color: var(--persian-blue);
    border-bottom: 1px solid #ccc;
    display: inline-block;
    text-transform: uppercase;
    margin: 10px 0;
}

.highlight {
    color: var(--persian-blue);
    font-size: 20px;
    font-weight: bold;
}

.Location {
    font-size: 14px;
    font-style: italic;
}

.section {
    text-align: left;
    margin-top: 15px;
}

ul {
    font-size: 14px;
}

.signature-section {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    margin-top: 40px;
}

.stamp img {
    width: 120px;
}
</style>
</head>

<body>

<div class="container">
<div class="inner">
<div class="content">

<header>
    <img src="https://i.imgur.com/your-logo.png" class="logo-icon" />
    <div class="company-name">FENTIX<span>TECH</span></div>
    <div class="title">INTERNSHIP OFFER LETTER</div>
</header>

<main>
    <div class="text-small">THIS LETTER CONFIRMS THE OFFER OF INTERNSHIP TO</div>

    <div class="name">
        ${candidate.firstName} ${candidate.lastName}
    </div>

    <div class="text-small">
        We are pleased to offer you the position of
    </div>

    <div class="highlight">
        ${candidate.domain}
    </div>

    <div class="Location">
        at FentixTech, Islamabad, Pakistan.
    </div>

    <div class="section">
        <strong>Internship Details:</strong>
        <ul>
            <li>Start Date: ${new Date().toLocaleDateString()}</li>
            <li>Duration: 2 Months</li>
            <li>Location: Remote</li>
        </ul>
    </div>

    <div class="section">
        <strong>Terms & Conditions:</strong>
        <ul>
            <li>Maintain professionalism and discipline.</li>
            <li>Follow company rules and policies.</li>
            <li>Confidentiality must be maintained.</li>
            <li>Performance will be evaluated.</li>
        </ul>
    </div>
</main>

<footer>
    <p>
        "We look forward to your contribution and wish you success"
    </p>

    <div class="signature-section">
        <div>
            <p><strong>Program Manager</strong></p>
        </div>

        <div>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
    </div>

    <div class="stamp">
        <img src="https://i.imgur.com/stamp.png" />
    </div>
</footer>

</div>
</div>
</div>

</body>
</html>
  `;

  const browser = await puppeteer.launch({
    headless: "new",
  });

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: filePath,
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return `/uploads/offers/${fileName}`;
};

module.exports = { generateOfferLetter };