interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
const Server = process.env.API_URL || "http://localhost:5000";

export const sendContactForm = async (data: ContactFormData) => {
  const response = await fetch(`${Server}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact form");
  }

  return response.json();
};

