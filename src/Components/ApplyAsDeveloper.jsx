 import React, { useState } from "react";

const API_URL = "http://localhost:8000/api/candidates/apply";

const ApplyAsDeveloper = () => {
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const [offerUrl, setOfferUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      message: "Processing your application...",
      type: "info",
    });

    setOfferUrl(null);

    const formData = new FormData();

    formData.append("firstName", e.target.firstName.value);
    formData.append("lastName", e.target.lastName.value);
    formData.append("email", e.target.email.value);
    formData.append("whatsapp", e.target.whatsapp.value);
    formData.append("domain", e.target.domain.value);
    formData.append("university", e.target.university.value);

    const resumeFile = e.target.resume.files[0];

    if (!resumeFile) {
      setStatus({
        loading: false,
        message: "Please upload your resume.",
        type: "error",
      });
      return;
    }

    formData.append("resume", resumeFile);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error("Server returned invalid response");
      }

      if (!response.ok) {
        throw new Error(result?.message || "Submission failed");
      }

      setStatus({
        loading: false,
        message:
          result.message ||
          "Application submitted successfully! You will receive an email shortly.",
        type: "success",
      });

      setOfferUrl(
        result?.candidate?.offerLetterUrl || result?.offerLetterUrl || null
      );

      e.target.reset();
    } catch (err) {
      setStatus({
        loading: false,
        message: err.message.includes("fetch")
          ? "Cannot connect to server. Please check backend."
          : err.message,
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building a <br /> remarkable Team
            </h1>
            <p className="text-gray-600 text-lg">
              Fill out the form and let us see if you can be a part of FentixTech.
            </p>
          </div>

          {status.message && (
            <div
              className={`px-4 py-3 rounded-lg font-medium ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : status.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {status.message}
            </div>
          )}

          {offerUrl && (
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <p className="text-blue-800 font-bold mb-2">
                Offer Letter Generated!
              </p>
              <a
                href={offerUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#1C39BB] text-white px-6 py-2 rounded-full"
              >
                View / Download Offer Letter
              </a>
            </div>
          )}
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormInput name="firstName" label="First Name" required />
            <FormInput name="lastName" label="Last Name" required />
            <FormInput name="email" label="Email" type="email" required />
            <FormInput name="whatsapp" label="WhatsApp Number" required />
            <FormInput name="domain" label="Domain Name" required />
            <FormInput name="university" label="University" required />
          </div>

          <div className="space-y-5 pt-4">
            <h3 className="text-2xl font-bold text-gray-800">
              Upload your Documents
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FileUpload
                name="resume"
                label="Upload Resume (PDF) *"
                required
              />
            </div>
          </div>

          {/* UPDATED BUTTON (40% SMALLER) */}
          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-[#1A1160] hover:bg-[#150d4d] text-white text-sm  px-4 py-2 rounded-lg font-bold text-sm"
          >
            {status.loading ? "Processing..." : "Apply Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

/* ─── INPUT COMPONENT ─── */
const FormInput = ({ label, name, type = "text", required }) => (
  <div>
    <label className="text-xs font-semibold">{label}</label>

    <input
      name={name}
      type={type}
      required={required}
      className="w-full bg-[#F2F2F2] p-2 text-xs rounded-md"
    />
  </div>
);

/* ─── FILE UPLOAD ─── */
const FileUpload = ({ name, label, required }) => {
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div>
      <label className="text-xs font-semibold">{label}</label>

      <input
        type="file"
        name={name}
        required={required}
        className="hidden"
        id={name}
        onChange={(e) =>
          setFileName(e.target.files?.[0]?.name || "No file chosen")
        }
      />

      <label
        htmlFor={name}
        className="block bg-gray-200 p-2 text-xs cursor-pointer rounded"
      >
        Choose File
      </label>

      <p className="text-[10px] text-gray-500 mt-1">{fileName}</p>
    </div>
  );
};

export default ApplyAsDeveloper;
