import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for your input!");
    console.log(form); // Later: send to backend
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
      <input name="name" required placeholder="Your Name"
        value={form.name} onChange={handleChange} />
      <input name="email" type="email" required placeholder="Your Email"
        value={form.email} onChange={handleChange} />
      <textarea name="message" required placeholder="Your Comments/Suggestions"
        value={form.message} onChange={handleChange} rows={5} />
      <button type="submit">Send Feedback</button>
    </form>
  );
}

export default ContactForm;
