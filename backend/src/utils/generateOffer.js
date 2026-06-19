 const puppeteer = require("puppeteer");
const cloudinary = require("./cloudinary");
const streamifier = require("streamifier");


const generateOfferPDFAndUpload = async (candidate) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Offer Letter</title>

<link href="https://fonts.googleapis.com/css2?family=UnifrakturCook&display=swap" rel="stylesheet">

<style>
:root {
    --persian-blue: #1C39BB;
    --persian-orange: #d87326;
}
.span1{
    color: var(--persian-orange);
}
 
*{
    color: black;
}
 
body {
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

strong{
    font-size: 21px;
}
.container {
     width: 1200px;
  min-height: 70vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* box-shadow: 0 10px 30px rgba(0,0,0,0.2); */
    margin-top: 5px;
    margin-bottom: 5px;
}

.inner {
    background: linear-gradient(140deg, var(--persian-blue) 9%, white 9.2%);
    border: 15px solid var(--persian-blue);
    padding: 5px;
    box-sizing: border-box;
}

.content {
    padding: 20px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 50px;
}

.logo-wrapper {
    margin-top: -20px;
    margin-bottom: 20px;
}

.logo-icon {
    width: 55px;
    height: 55px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
}

.company-name {
    color: var(--persian-blue);
    font-weight: 900;
    letter-spacing: 2px;
    font-size: 1rem;
}
.company-name span{
    color: var(--persian-orange);
}

.title {
    font-size: 2rem;
    color: var(--persian-orange);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    margin: 10px 0;
    text-transform: uppercase;
    font-weight: bold;
}

.text-small {
    font-size: 0.95rem;
    letter-spacing: 1px;
    font-weight: bold;
}

.Location{
    font-size: 0.95rem;
    font-style: italic;
    font-weight: bold;
}

.name {
    font-size: 1.5rem;
    color: var(--persian-blue);
    border-bottom: 1px solid #ccc;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: uppercase;
}

.highlight {
    color: var(--persian-blue);
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 10px;
}

.section {
    font-size: 0.8rem;
    text-align: left;
    margin-top: 10px;
}

ul {
    padding-left: 18px;
    width: 90%;
}
ul li{
    line-height: 1.5;
    font-size: 20px;
}
footer {
  padding: 20px 30px;
}

/* quote */
.quote {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
}

/* MAIN ROW */
.signature-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

/* shared box */
.sig-box {
  display: flex;
  flex-direction: column;
  gap:-125px;
}

/* LEFT */
.sig-box.left {
  align-items: flex-start;
   
}

.signpic {
  width: 100px;
  height:50px ;
  transform: rotate(10deg);
  position: relative;
  top: 25px;
  left: 47px;
}

 .sig-line {
  width: 180px;
  border-bottom: 2px solid rgba(0,0,0,0.3);
  margin: 5px 0 10px 0;
  position: relative;
  top: 20px;
}
/* CENTER STAMP */
.sig-box.center {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.stamp {
  width: 160px;
  height: 160px;
  margin-bottom: -40px;
}

/* RIGHT DATE */
.sig-box.right {
  align-items: flex-end;
  text-align: right;
  font-size: 20px;
}
</style>
</head>

<body>

<div class="container">
<div class="inner">
<div class="content">

<header>
    <div class="logo-wrapper">
        <img src="https://res.cloudinary.com/dwbjx56v3/image/upload/v1780832095/fentix/assets/g0qdixzcbtfw6l5ua9sa.png" class="logo-icon" />
        <div class="company-logo">
            <div class="company-name">FENTIX<span class="span-orange">TECH</span></div>
        </div>
    </div>
    <div class="title">INTERNSHIP Offer Letter</div>
</header> 

<main>
    <div class="text-small">THIS LETTER CONFIRMS THE OFFER OF INTERNSHIP TO</div>

    <div class="name">${candidate.firstName} ${candidate.lastName}</div>

    <div class="text-small">
        We are pleased to offer you the position of
    </div>

    <div class="highlight">Web Development Intern</div>

    <div class="Location">
        at FentixTech, Abbottabad, Khyber Pakhtunkhwa, Pakistan.
    </div>
<br>

    <div class="section">
        <strong>Internship Details:</strong>
        <ul>
            <li>Start Date: Ist July 2026</li>
            <li>Duration: Two  Months</li>
            <li>Location: Remote</li>
        </ul>
    </div>

    <div class="section">
        <strong>Terms & Conditions:</strong>
        <ul>
            <li>You are expected to maintain professionalism, discipline, and confidentiality at all times.</li>
            <li>You shall comply with all company policies, rules, and regulations.</li>
            <li>Any unauthorized disclosure of confidential information may result in termination.</li>
            <li>Your performance will be evaluated throughout the internship period.</li>
            <li>The company reserves the right to terminate the internship at any time based on performance or conduct.</li>
            <li>You may be required to work on real-world projects and collaborate with internal teams.</li>
        </ul>
    </div>

</main>

 <footer>

  <p class="quote">
    "We look forward to your contribution and wish you a successful learning experience with us"
  </p>

  <div class="signature-section">

    <!-- LEFT -->
    <div class="sig-box left">
      <img src="https://res.cloudinary.com/dwbjx56v3/image/upload/v1781017996/fentix/assets/rowpcjjhbm7tgvktazx8.png"
           alt="signature"
           class="signpic">

      <div class="sig-line"></div>

      <p><strong>Program Manager</strong></p>
    </div>

    <!-- CENTER -->
    <div class="sig-box center">
      <img src="https://res.cloudinary.com/dwbjx56v3/image/upload/v1781017995/fentix/assets/avgiitw2l4nh0wxcuyad.png"
           alt="stamp"
           class="stamp">
    </div>

    <!-- RIGHT -->
    <div class="sig-box right date">
      <p>
        <strong>Date:</strong>
        ${new Date(candidate.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </p>
    </div>

  </div>

</footer>

</div>
</div>
</div>

</body>
</html>
`;

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A3",
      printBackground: true,
    });

    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "fentix/offers",
          resource_type: "raw",
          public_id: `offer-${candidate._id}-${Date.now()}`,
        },
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );

      streamifier.createReadStream(pdfBuffer).pipe(uploadStream);
    });

    return {
      viewUrl: result.secure_url,
      downloadUrl: result.secure_url.replace("/upload/", "/upload/fl_attachment/"),
    };
  } finally {
    await browser.close();
  }
};

module.exports = { generateOfferPDFAndUpload };