import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "../hooks/useInView";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CONTACT_LINKS = [
  {
    icon: <MdEmail size={18} />,
    label: "Email",
    value: "prasoon.frontend@gmail.com",
    href: "mailto:prasoon.frontend@gmail.com",
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    value: "in/Prasoon-Singh",
    href: "https://www.linkedin.com/in/prasoons97/",
  },
  {
    icon: <FaGithub size={18} />,
    label: "GitHub",
    value: "github/Prasoon-Singh",
    href: "https://github.com/prasoons97/prasoons97",
  },
];

const STATUS = {
  idle: "idle",
  sending: "sending",
  success: "success",
  error: "error",
};

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(STATUS.idle);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus(STATUS.sending);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || "(no subject)",
          message: form.message,
          reply_to: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_name: form.name,
          to_email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus(STATUS.success);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(STATUS.idle), 5000);
    } catch {
      setStatus(STATUS.error);
      setTimeout(() => setStatus(STATUS.idle), 5000);
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div
          className={`${styles.header} ${inView ? styles.visible : ""}`}
          ref={ref}
        >
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind or just want to say hi? My inbox is always
            open. I'll get back to you within 24 hours.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left – Links */}
          <div className={styles.infoCol}>
            <div className={styles.availability}>
              <span className={styles.availDot} />
              <div>
                <p className={styles.availTitle}>Open to opportunities</p>
                <p className={styles.availSub}>
                  LIA/Praktik, Freelance & Full-time roles
                </p>
              </div>
            </div>

            <div className={styles.links}>
              {CONTACT_LINKS.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkCard}
                >
                  <span className={styles.linkIcon}>{icon}</span>
                  <div>
                    <span className={styles.linkLabel}>{label}</span>
                    <span className={styles.linkValue}>{value}</span>
                  </div>
                  <svg
                    className={styles.linkArrow}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right – Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <Field
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="John Doe"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="john@example.com"
              />
            </div>
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project inquiry..."
            />
            <Field
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell me about your project..."
              textarea
              rows={5}
            />

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === STATUS.sending}
            >
              {status === STATUS.sending ? (
                <>
                  <Spinner /> Sending...
                </>
              ) : status === STATUS.success ? (
                <>
                  <CheckIcon /> Message Sent!
                </>
              ) : (
                <>
                  Send Message <SendIcon />
                </>
              )}
            </button>

            {status === STATUS.error && (
              <p className={styles.errorMsg}>
                Something went wrong. Please email me directly at
                prasoon.frontend@gmail.com
              </p>
            )}
            {status === STATUS.success && (
              <p className={styles.successMsg}>
                Thanks! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  textarea,
  rows,
}) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`${styles.input} ${textarea ? styles.textarea : ""} ${error ? styles.inputError : ""}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

function Spinner() {
  return <span className={styles.spinner} />;
}

function SendIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
