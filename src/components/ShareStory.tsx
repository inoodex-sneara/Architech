"use client";

import { useState } from "react";

type ShareStoryProps = {
  title: string;
  summary: string;
};

function copyWithDocument(url: string) {
  const field = document.createElement("textarea");
  field.value = url;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();

  try {
    if (!document.execCommand("copy")) {
      throw new Error("The browser could not copy the story link.");
    }
  } finally {
    field.remove();
  }
}

export function ShareStory({ title, summary }: ShareStoryProps) {
  const [message, setMessage] = useState("");

  async function shareStory() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: summary, url });
        setMessage("Story shared.");
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }

    try {
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        copyWithDocument(url);
      }
      setMessage("Story link copied.");
    } catch {
      setMessage("Could not copy the link. Copy the page address from your browser.");
    }
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <button
        className="text-sm font-medium text-black underline underline-offset-4"
        onClick={shareStory}
        type="button"
      >
        Share this story
      </button>
      <span aria-live="polite" className="text-xs text-slate-600">
        {message}
      </span>
    </div>
  );
}
