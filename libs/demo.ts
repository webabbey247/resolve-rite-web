import { z } from "zod";

/**
 * The "Book a demo" form. Mirrors resolve-rite-console/src/lib/validations/demo.ts,
 * which checks the same rules again when the request arrives.
 *
 * Institution, contact method and date are required. Choosing email makes the
 * work email required; choosing a call makes the mobile number required. Notes
 * are optional.
 */

export const DEMO_CONTACT_METHODS = ["email", "call"] as const;
export type DemoContactMethod = (typeof DEMO_CONTACT_METHODS)[number];

const ymd = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

/** Today as YYYY-MM-DD in this clock's time zone. */
export const localToday = () => ymd(new Date());

/** Demos are on working days: Monday to Friday. */
export const isWeekday = (iso: string) => {
  const day = new Date(`${iso}T00:00:00Z`).getUTCDay();
  return day >= 1 && day <= 5;
};

/** The first day a demo can be booked: the next weekday after today (the date picker's minimum, in the browser). */
export const firstBookableDay = () => {
  const d = new Date();
  do d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6);
  return ymd(d);
};

/** A day of slack, so a visitor behind the server's time zone isn't refused their "today". */
const earliest = () => ymd(new Date(Date.now() - 24 * 60 * 60 * 1000));

export const demoFormSchema = z
  .object({
    institutionName: z.string().trim().min(2, "Enter your institution's name").max(160, "Keep it under 160 characters"),
    contactMethod: z.enum(DEMO_CONTACT_METHODS, { message: "Choose how we should contact you" }),
    workEmail: z.string().trim().max(254),
    /** The mobile number's country code, e.g. "+234" (the dial-code picker). */
    dialCode: z.string().regex(/^\+\d{1,4}$/, "Choose a country code"),
    /** The number without its country code. */
    mobileNumber: z.string().trim().max(24),
    preferredDate: z
      .string()
      .min(1, "Choose a date")
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date"),
    notes: z.string().trim().max(1000, "Keep notes under 1,000 characters"),
  })
  .superRefine((v, ctx) => {
    if (v.contactMethod === "email" && !z.email().safeParse(v.workEmail).success) {
      ctx.addIssue({ code: "custom", path: ["workEmail"], message: v.workEmail ? "Enter a valid email address" : "Enter your work email" });
    }
    if (v.contactMethod === "call" && !/^[0-9 ()-]{5,16}$/.test(v.mobileNumber)) {
      ctx.addIssue({ code: "custom", path: ["mobileNumber"], message: v.mobileNumber ? "Enter a valid mobile number" : "Enter your mobile number" });
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(v.preferredDate)) {
      if (v.preferredDate < earliest()) ctx.addIssue({ code: "custom", path: ["preferredDate"], message: "Choose a future date" });
      else if (!isWeekday(v.preferredDate)) ctx.addIssue({ code: "custom", path: ["preferredDate"], message: "Choose a weekday — demos run Monday to Friday" });
    }
  });

export type DemoForm = z.infer<typeof demoFormSchema>;

/** The full number the console stores: country code, then the number without a leading trunk 0. */
export const fullMobile = (dialCode: string, number: string) => `${dialCode} ${number.trim().replace(/^0+/, "")}`;
