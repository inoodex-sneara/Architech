"use client";

import { useState, type FormEvent } from "react";

const fieldClassName =
  "mt-2 min-h-12 w-full border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#30495b] focus:ring-2 focus:ring-[#30495b]/15";

export function CareerInterestForm() {
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!contactEmail) {
      setFormError(
        "Career enquiries are not connected yet. Configure NEXT_PUBLIC_CONTACT_EMAIL to enable email submissions.",
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = `Career interest: ${formData.get("discipline")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Area of interest: ${formData.get("discipline")}`,
      `Portfolio or profile: ${formData.get("portfolio") || "Not provided"}`,
      "",
      "A little about me:",
      String(formData.get("message")),
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormError("");
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Your name <span aria-hidden="true" className="text-[#bd7958]">*</span>
          <input
            autoComplete="name"
            className={fieldClassName}
            name="name"
            placeholder="Name"
            required
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email address{" "}
          <span aria-hidden="true" className="text-[#bd7958]">
            *
          </span>
          <input
            autoComplete="email"
            className={fieldClassName}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Area of interest{" "}
          <span aria-hidden="true" className="text-[#bd7958]">
            *
          </span>
          <select
            className={fieldClassName}
            defaultValue=""
            name="discipline"
            required
          >
            <option disabled value="">
              Choose an area
            </option>
            <option>Architecture</option>
            <option>Interior design</option>
            <option>Urban design</option>
            <option>Other</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Portfolio or profile link
          <input
            className={fieldClassName}
            name="portfolio"
            placeholder="https://"
            type="url"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        A little about you{" "}
        <span aria-hidden="true" className="text-[#bd7958]">
          *
        </span>
        <textarea
          className={`${fieldClassName} min-h-32 resize-y`}
          name="message"
          placeholder="What kind of work would you love to contribute to?"
          required
          rows={4}
        />
      </label>

      <div className="flex flex-col items-start gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-slate-500">
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL
            ? "Your email app will open with your message ready to send."
            : "Email submissions will be enabled once the studio contact email is configured."}
        </p>
        <button
          className="inline-flex min-h-12 w-full items-center justify-center bg-[#172f3d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#30495b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172f3d] sm:w-auto"
          type="submit"
        >
          Send your interest <span aria-hidden="true" className="ml-3">↗</span>
        </button>
      </div>
      {formError ? (
        <p className="text-sm leading-6 text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
    </form>
  );
}
