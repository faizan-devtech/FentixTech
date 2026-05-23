 import { useState, useMemo, useEffect } from "react";

const API = "http://localhost:8000/api/candidates";

// STATUS BADGE
const StatusBadge = ({ status }) => {
  const style = {
    pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
    accepted: "bg-green-50 text-green-700 border-green-200",
    rejected: "bg-red-50 text-red-600 border-red-200",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-full border ${style[status]}`}
    >
      {status}
    </span>
  );
};

// FILE URL HELPER
const getFileUrl = (path) => {
  if (!path) return null;
  return `http://localhost:8000/${path.replace(/\\/g, "/")}`;
};

export default function AdminDashboard() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getToken = () =>
    localStorage.getItem("token");

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin-login";
  };

  // FETCH CANDIDATES
  const fetchCandidates = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(API, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      if (!res.ok) {
        throw new Error(
          "Failed to fetch candidates"
        );
      }

      const data = await res.json();
      setApps(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // STATUS UPDATE
  const setStatus = async (id, status) => {
    try {
      const res = await fetch(
        `${API}/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Status update failed"
        );
      }

      fetchCandidates();
    } catch (err) {
      alert(err.message);
    }
  };

  // SEND OFFER
  const sendOffer = async (id) => {
    try {
      const res = await fetch(
        `${API}/${id}/send-offer`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          "Offer generation failed"
        );
      }

      alert(
        "Offer generated successfully"
      );

      fetchCandidates();
    } catch (err) {
      alert(err.message);
    }
  };

  // FILTER
  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    return apps.filter((a) => {
      const match =
        `${a.firstName} ${a.lastName} ${a.email} ${a.domain} ${a.university}`
          .toLowerCase()
          .includes(q);

      return (
        match &&
        (filter === "all" ||
          a.status === filter)
      );
    });
  }, [apps, search, filter]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center px-4">
      <div className="w-full lg:w-[85%] py-8 space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm border">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Manage applications &
              hiring pipeline
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* SEARCH + FILTER */}
        <div className="bg-white p-4 rounded-2xl border flex flex-col md:flex-row gap-3">
          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search candidates..."
            className="border px-4 py-2 rounded-lg w-full"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="border px-4 py-2 rounded-lg"
          >
            <option value="all">
              All
            </option>
            <option value="pending">
              Pending
            </option>
            <option value="accepted">
              Accepted
            </option>
            <option value="rejected">
              Rejected
            </option>
          </select>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg border">
            {error}
          </div>
        )}

        {/* LOADING */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading applications...
          </div>
        ) : (
          <div className="bg-white rounded-2xl border shadow-sm overflow-x-auto">

            <table className="w-full text-sm">
              <thead className="bg-gray-100 text-gray-600 text-xs">
                <tr>
                  <th className="p-3 text-left">
                    Applicant
                  </th>
                  <th className="p-3 text-left">
                    Email
                  </th>
                  <th className="p-3 text-left">
                    WhatsApp
                  </th>
                  <th className="p-3 text-left">
                    Domain
                  </th>
                  <th className="p-3 text-left">
                    University
                  </th>
                  <th className="p-3 text-left">
                    CV
                  </th>
                  <th className="p-3 text-left">
                    Offer
                  </th>
                  <th className="p-3 text-left">
                    Applied At
                  </th>
                  <th className="p-3 text-left">
                    Status
                  </th>
                  <th className="p-3 text-left">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((a) => (
                  <tr
                    key={a._id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium">
                      {a.firstName}{" "}
                      {a.lastName}
                    </td>

                    <td className="p-3">
                      {a.email}
                    </td>

                    <td className="p-3">
                      {a.whatsapp}
                    </td>

                    <td className="p-3">
                      {a.domain}
                    </td>

                    <td className="p-3">
                      {a.university}
                    </td>

                    {/* CV */}
                    <td className="p-3">
                      {a.resumePath ? (
                        <div className="flex gap-2">
                          <a
                            href={getFileUrl(
                              a.resumePath
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 text-xs"
                          >
                            View
                          </a>

                          <a
                            href={getFileUrl(
                              a.resumePath
                            )}
                            download
                            className="text-green-600 text-xs"
                          >
                            Download
                          </a>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-xs">
                          No CV
                        </span>
                      )}
                    </td>

                    {/* OFFER */}
                    <td className="p-3">
                      {a.offerLetterUrl ? (
                        <a
                          href={`http://localhost:8000${a.offerLetterUrl}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 text-xs"
                        >
                          View Offer
                        </a>
                      ) : (
                        <span className="text-gray-400 text-xs">
                          Not Generated
                        </span>
                      )}
                    </td>

                    {/* DATE */}
                    <td className="p-3 text-xs text-gray-600">
                      {new Date(
                        a.createdAt
                      ).toLocaleString()}
                    </td>

                    {/* STATUS */}
                    <td className="p-3">
                      <StatusBadge
                        status={a.status}
                      />
                    </td>

                    {/* ACTIONS */}
                    <td className="p-3 flex gap-2 flex-wrap">

                      <button
                        onClick={() =>
                          setStatus(
                            a._id,
                            "accepted"
                          )
                        }
                        className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded-lg"
                      >
                        Accept
                      </button>

                      <button
                        onClick={() =>
                          setStatus(
                            a._id,
                            "rejected"
                          )
                        }
                        className="text-xs px-2 py-1 bg-red-50 text-red-600 rounded-lg"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          sendOffer(a._id)
                        }
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-lg"
                      >
                        Send Offer
                      </button>

                    </td>
                  </tr>
                ))}

                {filtered.length ===
                  0 && (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center p-6 text-gray-400"
                    >
                      No candidates found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </div>
  );
}