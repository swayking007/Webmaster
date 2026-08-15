// Mock certificate database — swap with Supabase client in Phase 2
const certificates = [
  {
    id: 1,
    code: "CA/01/387",
    studentName: "Swayam Sahu",
    courseName: "Full Stack Development",
    status: "Completed",
    issueDate: "07 July 2026",
  },
  {
    id: 2,
    code: "CA/02/142",
    studentName: "Priya Sharma",
    courseName: "AI & Machine Learning",
    status: "Completed",
    issueDate: "08 July 2026",
  },
  {
    id: 3,
    code: "CA/03/519",
    studentName: "Rahul Verma",
    courseName: "Web Development",
    status: "Completed",
    issueDate: "25 June 2026",
  },
  {
    id: 4,
    code: "CA/04/203",
    studentName: "Ananya Patel",
    courseName: "Data Science",
    status: "Completed",
    issueDate: "1 August 2026",
  },
  {
    id: 5,
    code: "CA/05/871",
    studentName: "Om Mane",
    courseName: "Cybersecurity",
    status: "Completed",
    issueDate: "10 July 2026",
  },
];

/**
 * Simulates an async certificate lookup.
 * Replace this function body with a Supabase query in Phase 2.
 *
 * @param {string} code - The certificate code to verify (e.g. "CA/01/387")
 * @returns {Promise<{found: boolean, certificate?: object}>}
 */
export async function verifyCertificate(code) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

  const normalised = code.trim().toUpperCase();
  const match = certificates.find(
    (cert) => cert.code.toUpperCase() === normalised
  );

  if (match) {
    return { found: true, certificate: { ...match } };
  }
  return { found: false };
}

export default certificates;
