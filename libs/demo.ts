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

/** Today as YYYY-MM-DD in this clock's time zone (the date input's minimum, in the browser). */
export const localToday = () => ymd(new Date());

/** A day of slack, so a visitor behind the server's time zone isn't refused their "today". */
const earliest = () => ymd(new Date(Date.now() - 24 * 60 * 60 * 1000));

export const demoFormSchema = z
  .object({
    institutionName: z.string().trim().min(2, "Enter your institution's name").max(160, "Keep it under 160 characters"),
    contactMethod: z.enum(DEMO_CONTACT_METHODS, { message: "Choose how we should contact you" }),
    workEmail: z.string().trim().max(254),
    mobileNumber: z.string().trim().max(32),
    preferredDate: z.string().min(1, "Choose a date").regex(/^\d{4}-\d{2}-\d{2}$/, "Choose a date"),
    notes: z.string().trim().max(1000, "Keep notes under 1,000 characters"),
  })
  .superRefine((v, ctx) => {
    if (v.contactMethod === "email" && !z.email().safeParse(v.workEmail).success) {
      ctx.addIssue({ code: "custom", path: ["workEmail"], message: v.workEmail ? "Enter a valid email address" : "Enter your work email" });
    }
    if (v.contactMethod === "call" && !/^\+?[0-9 ()-]{7,20}$/.test(v.mobileNumber)) {
      ctx.addIssue({ code: "custom", path: ["mobileNumber"], message: v.mobileNumber ? "Enter a valid mobile number" : "Enter your mobile number" });
    }
    if (/^\d{4}-\d{2}-\d{2}$/.test(v.preferredDate) && v.preferredDate < earliest()) {
      ctx.addIssue({ code: "custom", path: ["preferredDate"], message: "Choose today or a later date" });
    }
  });

export type DemoForm = z.infer<typeof demoFormSchema>;
