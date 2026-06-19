 import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Tilt from "react-parallax-tilt";

const API_URL = "http://localhost:8000/api/candidates/apply";

const ApplyAsDeveloper = () => {
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const [offerUrl, setOfferUrl] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const formatPakNumber = (value) => {
    let num = value.replace(/\D/g, "");

    if (num.startsWith("92")) num = num.slice(2);
    if (num.startsWith("0")) num = num.slice(1);
    if (num.length > 10) num = num.slice(0, 10);

    return "+92" + num;
  };

  const validateFile = (file) => {
    if (!file) return "Resume required";

    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(file.type)) {
      return "Only PDF DOC DOCX allowed";
    }

    if (file.size > 5 * 1024 * 1024) {
      return "Max size 5MB";
    }

    return true;
  };

  const onSubmit = async (data) => {
    if (!resumeFile) {
      setStatus({
        loading: false,
        message: "Please upload resume",
        type: "error",
      });
      return;
    }

    setStatus({
      loading: true,
      message: "Processing your application...",
      type: "info",
    });

    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("whatsapp", data.whatsapp);
    formData.append("domain", data.domain);
    formData.append("cv", resumeFile);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setStatus({
        loading: false,
        message:
          result.message ||
          "Application submitted successfully!",
        type: "success",
      });

      setOfferUrl(result.offerLetterUrl || null);

      reset();
      setResumeFile(null);
    } catch (err) {
      setStatus({
        loading: false,
        message: err.message,
        type: "error",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h1 className="text-2xl font-bold text-gray-900">
            About Internship
          </h1>

          <p className="text-gray-600 text-md">
            FentixTech offers a dynamic and industry-focused internship
            program designed to bridge the gap between academic learning
            and real-world experience.
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            Key Features of Program
          </h1>

          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li>Hands-on experience with real-world production projects</li>
            <li>Mentorship from experienced industry professionals</li>
            <li>Exposure to modern tools, technologies, and Agile practices</li>
          </ul>

          <h1 className="text-2xl font-bold text-gray-900">
            What Interns Will Gain
          </h1>

          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
            <li>Strong technical and problem-solving skills</li>
            <li>Experience working in professional development teams</li>
            <li>Understanding of SDLC with career readiness</li>
          </ul>

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
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            <FormInput
              label="First Name"
              error={errors.firstName?.message}
              register={register("firstName", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only text allowed",
                },
              })}
            />

            <FormInput
              label="Last Name"
              error={errors.lastName?.message}
              register={register("lastName", {
                required: "Required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only text allowed",
                },
              })}
            />

            <FormInput
              label="Email"
              type="email"
              error={errors.email?.message}
              register={register("email", {
                required: "Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />

            <FormInput
              label="WhatsApp Number"
              error={errors.whatsapp?.message}
              register={register("whatsapp", {
                required: "Required",
                pattern: {
                  value: /^(\+92)?3[0-9]{9}$/,
                  message: "Invalid Pakistani number",
                },
              })}
              onChange={(e) =>
                setValue(
                  "whatsapp",
                  formatPakNumber(e.target.value)
                )
              }
            />

            <div>
              <label className="text-xs font-semibold">
                Domain Name
              </label>

              <select
                {...register("domain", {
                  required: true,
                })}
                className="w-full bg-[#F2F2F2] p-2 text-xs rounded-md"
                defaultValue="Web Development"
              >
                <option value="Web Development">
                  Web Development
                </option>
              </select>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 pt-4">
            Upload Documents
          </h3>

          <FileUpload
            onFile={(file) => {
              const check = validateFile(file);

              if (check === true) {
                setResumeFile(file);
              } else {
                setStatus({
                  loading: false,
                  message: check,
                  type: "error",
                });
              }
            }}
            file={resumeFile}
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-[#1A1160] hover:bg-[#150d4d] text-white text-sm px-4 py-2 rounded-lg font-bold"
          >
            {status.loading
              ? "Processing..."
              : "Apply Now"}
          </button>
        </form>
      </div>

      {/* TILT CARDS SECTION */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Join FentixTech Internship?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
            <div className="bg-white border rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">
                Real Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Work on real-world production level projects.
              </p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
            <div className="bg-white border rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-lg mb-2">
                Skill Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Learn modern tools and teamwork practices.
              </p>
            </div>
          </Tilt>

          <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
            <div className="bg-white border rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">
                Career Ready
              </h3>
              <p className="text-gray-600 text-sm">
                Build portfolio and prepare for real jobs.
              </p>
            </div>
          </Tilt>

        </div>
      </div>
    </div>
  );
};

const FormInput = ({
  label,
  type = "text",
  register,
  error,
  onChange,
}) => (
  <div>
    <label className="text-xs font-semibold">
      {label}
    </label>

    <input
      type={type}
      {...register}
      onChange={onChange}
      className="w-full bg-[#F2F2F2] p-2 text-xs rounded-md"
    />

    {error && (
      <p className="text-red-500 text-[10px] mt-1">
        {error}
      </p>
    )}
  </div>
);

const FileUpload = ({ onFile, file }) => (
  <div>
    <input
      type="file"
      onChange={(e) => onFile(e.target.files[0])}
      className="w-full bg-gray-200 p-2 text-xs rounded"
      accept=".pdf,.doc,.docx"
    />

    {file && (
      <p className="text-green-600 text-xs mt-1">
        {file.name}
      </p>
    )}
  </div>
);

export default ApplyAsDeveloper;