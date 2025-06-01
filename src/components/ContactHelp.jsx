import React from 'react';

function ContactHelp() {
  return (
    <div className="page-container">
      <h2>Contact & Help</h2>

      <section className="contact-section">
        <h3>Contact Us</h3>
        <p>Have questions or feedback? Send us a message:</p>
        <form>
          <label>
            Name: <input type="text" name="name" required />
          </label>
          <label>
            Email: <input type="email" name="email" required />
          </label>
          <label>
            Message: <textarea name="message" rows="4" required />
          </label>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="help-section">
        <h3>Help & FAQs</h3>
        <h4>How do I sign up?</h4>
        <p>Go to the Sign In page and create an account.</p>

        <h4>How do I save favorite restaurants?</h4>
        <p>Log into your profile and choose your favorites from the list.</p>

        <h4>Need more support?</h4>
        <p>Email us directly or reach out through social media.</p>
      </section>
    </div>
  );
}

export default ContactHelp;
