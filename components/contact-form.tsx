"use client";

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col gap-3.5 rounded-[22px] border border-border bg-surface2 p-7"
    >
      <input
        placeholder="Your name"
        className="h-12 rounded-xl border border-border bg-surface px-4 text-[15px] text-text placeholder:text-muted"
      />
      <input
        placeholder="Email"
        className="h-12 rounded-xl border border-border bg-surface px-4 text-[15px] text-text placeholder:text-muted"
      />
      <textarea
        placeholder="What's on your mind?"
        rows={5}
        className="resize-y rounded-xl border border-border bg-surface px-4 py-3.5 text-[15px] text-text placeholder:text-muted"
      />
      <button
        type="submit"
        className="h-12.5 rounded-xl bg-primary text-[15px] font-bold text-white transition-colors hover:bg-primary-ink"
      >
        Send message
      </button>
    </form>
  );
}
