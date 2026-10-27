"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Icons from "./Icons";
import { DatePicker } from "./ui/DatePicker";
import { PhoneCodeSelect } from "./ui/PhoneCodeSelect";
import { demoFormSchema, firstBookableDay, type DemoForm } from "@/libs/demo";

/**
 * "Book a demo": the hero's button and the request form in a modal — the
 * default modal structure (icon tile, title, description and × in the header;
 * the form; the buttons). It posts to this site's /api/demo, which signs and
 * forwards it to the ResolveRite console.
 */

const BTN =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-[-0.005em] whitespace-nowrap transition-[background,box-shadow,transform,opacity] duration-160 ease-[ease] active:translate-y-px rounded-[10px] disabled:opacity-60 disabled:pointer-events-none";
const FIELD =
  "w-full rounded-[10px] border border-line-strong bg-surface px-3.5 py-2.5 text-[14px] text-ink outline-none transition-[border,box-shadow] placeholder:text-faint focus:border-brand focus:ring-3 focus:ring-brand/15 aria-[invalid=true]:border-danger";

export function BookDemoButton({ className }: { className: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className} aria-haspopup="dialog">
        <Icons.Chat size={16} /> Book a demo
      </button>
      {open ? <BookDemoModal onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function BookDemoModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const panel = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  // Escape closes; the page behind doesn't scroll; focus starts on the first field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("input, button")?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(12,22,38,0.45)] backdrop-blur-[2px]" onClick={onClose} aria-hidden />
      <div
        ref={panel}
        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-140 overflow-y-auto rounded-2xl border border-line bg-surface p-5 shadow-[0_30px_70px_-20px_rgba(12,22,38,0.45)] sm:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${sent ? "bg-success-soft text-success" : "bg-brand-soft text-brand-ink"}`}
            >
              {sent ? <Icons.CheckBare size={18} /> : <Icons.Chat size={18} />}
            </span>
            <div className="min-w-0">
              <h2 id={titleId} className="m-0 font-serif text-[21px] font-semibold leading-[1.3] tracking-[-0.01em] text-ink">
                {sent ? "Request received" : "Book a demo"}
              </h2>
              <p className="m-0 mt-1 text-[13px] leading-[1.5] text-muted">
                {sent
                  ? "Thank you — we'll be in touch to confirm a time."
                  : "Tell us about your institution and when suits you. We'll confirm a time the way you prefer."}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-surface-2 hover:text-ink sm:h-8 sm:w-8"
          >
            <Icons.X size={18} />
          </button>
        </div>
        {sent ? (
          <>
            <p className="m-0 mt-5 text-[14px] leading-[1.6] text-ink-2">
              Someone from our team will reach out before your chosen date. If anything changes, reply to our message or email{" "}
              <a href="mailto:support@resolverite.app" className="font-semibold text-brand-ink underline-offset-2 hover:underline">
                support@resolverite.app
              </a>
              .
            </p>
            <div className="mt-6 flex justify-end">
              <button type="button" onClick={onClose} className={`${BTN} h-10.5 bg-brand px-4.5 text-[13.5px] text-white hover:bg-brand-strong`}>
                Done
              </button>
            </div>
          </>
        ) : (
          <DemoFormBody onCancel={onClose} onSent={() => setSent(true)} />
        )}
      </div>
    </div>
  );
}

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between text-[12.5px] font-semibold text-ink-2">
        {label}
        {optional ? <span className="text-[11.5px] font-medium text-faint">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="m-0 mt-1.5 text-[12px] font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function DemoFormBody({ onCancel, onSent }: { onCancel: () => void; onSent: () => void }) {
  const ids = { institution: useId(), email: useId(), mobile: useId(), date: useId(), notes: useId() };
  const [failure, setFailure] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<DemoForm>({
    resolver: zodResolver(demoFormSchema),
    mode: "onTouched",
    defaultValues: { institutionName: "", workEmail: "", dialCode: "+1", mobileNumber: "", preferredDate: "", notes: "" },
  });
  const method = watch("contactMethod");
  const notes = watch("notes") ?? "";
  const website = useRef<HTMLInputElement>(null);

  const submit = handleSubmit(async (values) => {
    setFailure(null);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, website: website.current?.value ?? "" }),
      });
      const body = (await res.json().catch(() => null)) as { error?: string; fields?: Partial<Record<keyof DemoForm, string>> } | null;
      if (res.ok) return onSent();
      for (const [name, message] of Object.entries(body?.fields ?? {})) setError(name as keyof DemoForm, { message });
      setFailure(body?.error ?? "We couldn't send your request. Please try again.");
    } catch {
      setFailure("We couldn't reach the server. Check your connection and try again.");
    }
  });

  const invalid = (name: keyof DemoForm, id: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${id}-error` : undefined,
  });

  return (
    <form onSubmit={submit} noValidate className="mt-5 flex flex-col gap-4">
      <Field id={ids.institution} label="Institution name" error={errors.institutionName?.message}>
        <input
          id={ids.institution}
          autoComplete="organization"
          placeholder="e.g. Northridge University"
          className={FIELD}
          {...register("institutionName")}
          {...invalid("institutionName", ids.institution)}
        />
      </Field>

      <fieldset className="m-0 border-0 p-0">
        <legend className="mb-1.5 p-0 text-[12.5px] font-semibold text-ink-2">Preferred way to contact you</legend>
        <div className="grid grid-cols-2 gap-2.5" role="radiogroup" aria-describedby={errors.contactMethod ? "contact-error" : undefined}>
          {(
            [
              ["email", "Email", Icons.Mail],
              ["call", "Phone call", Icons.Phone],
            ] as const
          ).map(([value, label, Icon]) => (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-2.5 rounded-[10px] border px-3.5 py-2.75 text-[14px] font-semibold transition-colors ${
                method === value ? "border-brand bg-brand-soft text-brand-ink" : "border-line-strong bg-surface text-ink-2 hover:bg-surface-2"
              }`}
            >
              <input type="radio" value={value} className="sr-only" {...register("contactMethod")} />
              <Icon size={16} /> {label}
            </label>
          ))}
        </div>
        {errors.contactMethod ? (
          <p id="contact-error" role="alert" className="m-0 mt-1.5 text-[12px] font-medium text-danger">
            {errors.contactMethod.message}
          </p>
        ) : null}
      </fieldset>

      {/* The contact detail for the chosen method sits beside the date. */}
      <div className={`grid grid-cols-1 gap-4 ${method ? "sm:grid-cols-2" : ""}`}>
        {method === "email" ? (
          <Field id={ids.email} label="Work email" error={errors.workEmail?.message}>
            <input
              id={ids.email}
              type="email"
              autoComplete="email"
              placeholder="you@institution.edu"
              className={FIELD}
              {...register("workEmail")}
              {...invalid("workEmail", ids.email)}
            />
          </Field>
        ) : null}
        {method === "call" ? (
          <Field id={ids.mobile} label="Mobile number" error={errors.mobileNumber?.message}>
            <div
              className={`flex h-11 items-stretch rounded-[10px] border bg-surface transition-[border,box-shadow] focus-within:border-brand focus-within:ring-3 focus-within:ring-brand/15 ${
                errors.mobileNumber ? "border-danger" : "border-line-strong"
              }`}
            >
              <Controller name="dialCode" control={control} render={({ field }) => <PhoneCodeSelect value={field.value} onChange={field.onChange} />} />
              <input
                id={ids.mobile}
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                placeholder="555 010 0199"
                className="min-w-0 flex-1 rounded-r-[10px] border-0 bg-transparent px-3 text-[14px] text-ink outline-none placeholder:text-faint"
                {...register("mobileNumber")}
                {...invalid("mobileNumber", ids.mobile)}
              />
            </div>
          </Field>
        ) : null}
        <Field id={ids.date} label="Preferred date" error={errors.preferredDate?.message}>
          <Controller
            name="preferredDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                id={ids.date}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                min={firstBookableDay()}
                invalid={Boolean(errors.preferredDate)}
                describedBy={errors.preferredDate ? `${ids.date}-error` : undefined}
                className={`${FIELD} h-11`}
              />
            )}
          />
        </Field>
      </div>

      <Field id={ids.notes} label="Notes" optional error={errors.notes?.message}>
        <textarea
          id={ids.notes}
          rows={3}
          maxLength={1000}
          placeholder="Anything we should know — team size, current process, what you'd like to see."
          className={`${FIELD} resize-y`}
          {...register("notes")}
          {...invalid("notes", ids.notes)}
        />
        <p className="m-0 mt-1 text-right text-[11px] text-faint">{notes.length}/1000</p>
      </Field>

      {/* Hidden from people; bots that fill every field give themselves away. */}
      <input ref={website} type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      {failure ? (
        <p role="alert" className="m-0 rounded-[10px] bg-danger/10 px-3.5 py-2.5 text-[13px] font-medium text-danger">
          {failure}
        </p>
      ) : null}

      <div className="mt-2 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className={`${BTN} h-10.5 border border-line-strong bg-surface px-4.5 text-[13.5px] text-ink hover:bg-surface-2`}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${BTN} h-10.5 bg-brand px-4.5 text-[13.5px] text-white shadow-[0_1px_2px_rgba(20,43,73,0.18)] hover:bg-brand-strong dark:hover:bg-[#2c5388]`}
        >
          {isSubmitting ? "Sending…" : "Request demo"}
          {isSubmitting ? null : <Icons.ChevronRight size={14} />}
        </button>
      </div>
    </form>
  );
}
