import { useState } from "react";
import "./App.css";

const emptyForm = {
  name: "",
  email: "",
  country: "",
  message: "",
};

function App() {
  const [formData, setFormData] = useState(emptyForm);

  function handleChange(e) {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
  }

  function handleClear() {
    setFormData(emptyForm);
  }

  return (
    <main className="page">
      <form className="card" onSubmit={(e) => e.preventDefault()}>
        <h1>Contact Form</h1>
        <p className="subtitle">Fill this out, then try refreshing the page.</p>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </label>

        <label>
          Country
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select a country</option>
            <option value="United States of America">United States of America</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Japan">Japan</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Write something..."
          />
        </label>

        <button type="button" onClick={handleClear}>
          Clear Form
        </button>
      </form>
    </main>
  );
}

export default App;