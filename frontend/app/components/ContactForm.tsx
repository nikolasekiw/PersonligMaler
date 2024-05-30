"use client";
import { FormEvent, useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {    
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });
            setSubmitted(true);
        } catch (e) {
            setError('An error occurred');
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Message
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </label>
            <button type="submit" disabled={submitting}>
                Submit
            </button>
            {submitted && <p>Message sent osdfijdsfoij</p>}
            {error && <p>{error}</p>}
        </form>
    );
}