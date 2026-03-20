'use client';

import { useMemo, useState } from 'react';

function encode(value) {
  return encodeURIComponent(value).replace(/%20/g, '+');
}

export default function ContactForm() {
  const emailTo = 'you@example.com'; // TODO: replace with your email later

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio inquiry from ${name || 'someone'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    return `mailto:${emailTo}?subject=${encode(subject)}&body=${encode(body)}`;
  }, [email, message, name]);

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          type="email"
          required
        />
      </div>

      <div className="field-full">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A quick note about the internship / role you're interested in..."
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          Send message
        </button>
      </div>
    </form>
  );
}

