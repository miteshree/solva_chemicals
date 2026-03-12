import { useMemo, useState } from "react";
import { brand } from "../../assets/js/content.js";
import useReveal from "../../assets/js/hooks/useReveal.js";
import styles from "./contact.module.css";

function toMailtoBody(fields) {
  const lines = [
    "Quote request details",
    "---------------------",
    `Name: ${fields.name || "-"}`,
    `Company: ${fields.company || "-"}`,
    `Email: ${fields.email || "-"}`,
    `Phone: ${fields.phone || "-"}`,
    "",
    `Product / Spec: ${fields.product || "-"}`,
    `Quantity: ${fields.quantity || "-"}`,
    `Destination: ${fields.destination || "-"}`,
    `Timeline: ${fields.timeline || "-"}`,
    "",
    "Notes:",
    fields.message || "-",
    "",
    fields.fileName ? `Attachment: ${fields.fileName} (please email separately)` : "",
  ].filter(Boolean);
  return lines.join("\n");
}

export default function Contact() {
  const { ref, visible } = useReveal({ threshold: 0.1 });
  const [toast, setToast] = useState("");
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    destination: "",
    timeline: "",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = `Quote Request — ${form.company || "Solva Chemicals"}`;
    const body = toMailtoBody({ ...form, fileName });
    return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`;
  }, [fileName, form]);

  const onSubmit = (e) => {
    e.preventDefault();
    setToast("Opening your email client with a pre-filled request…");
    window.location.href = mailto;
    window.setTimeout(() => setToast(""), 3500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="sectionTitle">
          <div>
            <div className="kicker">
              <span className="kickerDot" aria-hidden="true" /> Contact
            </div>
            <h2 className="h2">Tell us what you need. We’ll respond with options.</h2>
            <p className="lead">
              This is a static site; requests open your email client with a structured message. If
              you have a spec sheet, attach it to the email.
            </p>
          </div>
        </div>

        <div ref={ref} className={`${styles.grid} reveal ${visible ? "revealVisible" : ""}`}>
          <div className={`${styles.info} card`}>
            <div className={styles.infoTitle}>Direct</div>
            <div className={styles.infoRow}>
              <div className={styles.label}>Email</div>
              <a className={styles.value} href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.label}>Phone</div>
              <a className={styles.value} href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}>
                {brand.phone}
              </a>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.label}>Coverage</div>
              <div className={styles.value}>{brand.location}</div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCardTop}>What to include</div>
              <ul className={styles.ul}>
                <li>Target resin/chemical + key properties</li>
                <li>Quantity + delivery timeline</li>
                <li>Destination + Incoterms preference</li>
                <li>Documentation requirements (SDS/CoA)</li>
              </ul>
            </div>

            <a className={styles.mailto} href={mailto}>
              Open email draft →
            </a>
          </div>

          <form className={`${styles.form} card`} onSubmit={onSubmit}>
            <div className={styles.formTitle}>Request a quote</div>
            <div className={styles.fields}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Name</span>
                <input
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Company</span>
                <input
                  className={styles.input}
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  placeholder="Company / plant"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Email</span>
                <input
                  className={styles.input}
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Phone</span>
                <input
                  className={styles.input}
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  placeholder="+1 (___) ___-____"
                />
              </label>
              <label className={styles.fieldWide}>
                <span className={styles.fieldLabel}>Product / Spec</span>
                <input
                  className={styles.input}
                  value={form.product}
                  onChange={(e) => setForm((s) => ({ ...s, product: e.target.value }))}
                  placeholder="e.g., PP homopolymer, melt flow __, additive __"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Quantity</span>
                <input
                  className={styles.input}
                  value={form.quantity}
                  onChange={(e) => setForm((s) => ({ ...s, quantity: e.target.value }))}
                  placeholder="e.g., 1 FCL / 20 MT"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Destination</span>
                <input
                  className={styles.input}
                  value={form.destination}
                  onChange={(e) => setForm((s) => ({ ...s, destination: e.target.value }))}
                  placeholder="City, country"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Timeline</span>
                <input
                  className={styles.input}
                  value={form.timeline}
                  onChange={(e) => setForm((s) => ({ ...s, timeline: e.target.value }))}
                  placeholder="ASAP / date window"
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>Spec sheet (optional)</span>
                <input
                  className={styles.inputFile}
                  type="file"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
                {fileName ? <span className={styles.fileName}>{fileName}</span> : null}
              </label>
              <label className={styles.fieldWide}>
                <span className={styles.fieldLabel}>Notes</span>
                <textarea
                  className={styles.textarea}
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Any constraints, alternates, compliance notes, packaging, etc."
                  rows={4}
                />
              </label>
            </div>

            <div className={styles.formBottom}>
              <button className="btnPrimary" type="submit">
                Create email request
              </button>
              <a className="btnGhost" href={mailto}>
                Open draft
              </a>
            </div>
          </form>
        </div>

        {toast ? (
          <div className={styles.toast} role="status" aria-live="polite">
            {toast}
          </div>
        ) : null}
      </div>
    </section>
  );
}
