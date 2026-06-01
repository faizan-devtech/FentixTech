 const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

const generateOfferLetter = async (candidate) => {
  let browser;

  try {
    const fileName = `offer-${candidate._id}.pdf`;

    // ✅ REAL PATH -> backend/uploads/offers
    const uploadDir = path.join(
      process.cwd(),
      "uploads",
      "offers"
    );

    const filePath = path.join(uploadDir, fileName);

    // create folder if missing
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    console.log("Offer folder:", uploadDir);
    console.log("Saving PDF:", filePath);

    const today = new Date();

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<title>Offer Letter</title>

<style>
body{
  font-family:Arial,sans-serif;
  margin:0;
  padding:0;
  background:#fff;
}

.container{
  width:800px;
  margin:auto;
  padding:40px;
  border:10px solid #1C39BB;
  box-sizing:border-box;
}

.header{
  text-align:center;
  margin-bottom:30px;
}

.company{
  font-size:28px;
  font-weight:bold;
  color:#1C39BB;
}

.title{
  font-size:20px;
  color:#d87326;
  margin-top:10px;
}

.name{
  font-size:22px;
  font-weight:bold;
  color:#1C39BB;
  text-transform:uppercase;
  margin:20px 0;
  text-align:center;
}

.content{
  font-size:14px;
  line-height:1.7;
}

.highlight{
  font-weight:bold;
  color:#1C39BB;
}

ul{
  margin-top:10px;
}

.footer{
  margin-top:40px;
  display:flex;
  justify-content:space-between;
}

.stamp{
  text-align:right;
  margin-top:30px;
  font-weight:bold;
}
</style>
</head>

<body>
<div class="container">

<div class="header">
<div class="company">FENTIX TECH</div>
<div class="title">INTERNSHIP OFFER LETTER</div>
</div>

<div class="content">

<p>Dear Candidate,</p>

<p>
We are pleased to offer you the internship position at
<span class="highlight">FentixTech</span>.
</p>

<div class="name">
${candidate.firstName} ${candidate.lastName}
</div>

<p>
Position:
<span class="highlight">${candidate.domain}</span>
</p>

<p>
Location: Remote (Pakistan)
</p>

<h3>Internship Details</h3>

<ul>
<li>Start Date: ${today.toDateString()}</li>
<li>Duration: 2 Months</li>
<li>Type: Remote Internship</li>
</ul>

<h3>Terms & Conditions</h3>

<ul>
<li>Maintain discipline and professionalism</li>
<li>Follow company policies</li>
<li>Performance evaluation required</li>
<li>Confidentiality must be maintained</li>
</ul>

<p>
We are excited to welcome you to our team.
</p>

<div class="footer">
<div>
<p><strong>Program Manager</strong></p>
</div>

<div>
<p><strong>Date:</strong> ${today.toLocaleString()}</p>
</div>
</div>

<div class="stamp">
FENTIX TECH OFFICIAL
</div>

</div>
</div>
</body>
</html>
`;

    // ✅ Safe Puppeteer
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
      ],
    });

    const page = await browser.newPage();

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    await page.pdf({
      path: filePath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20px",
        bottom: "20px",
        left: "20px",
        right: "20px",
      },
    });

    // close browser
    await browser.close();

    // verify file
    if (!fs.existsSync(filePath)) {
      throw new Error("PDF generation failed");
    }

    console.log("Offer created:", filePath);

    // public URL
     return `/uploads/offers/${fileName}`;

  } catch (error) {
    console.error(
      "Offer Letter Error:",
      error.message
    );

    if (browser) {
      await browser.close();
    }

    throw error;
  }
};

module.exports = {
  generateOfferLetter,
};