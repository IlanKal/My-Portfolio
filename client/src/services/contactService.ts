interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
const Server = import.meta.env.VITE_API_URL;

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

