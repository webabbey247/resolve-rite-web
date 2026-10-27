"use client";

import { useEffect, useState } from "react";
import { SearchableSelect } from "./SearchableSelect";

/**
 * Country dialling-code picker, as in resolve-rite-console's onboarding
 * (components/onboarding/phone-code-select.tsx + hooks/use-countries.ts):
 * search by country, ISO code or dial code. Options are keyed by country
 * because several share a code (+1); the form receives just the dial code.
 */

type Country = { name: string; iso2: string; dialCode: string };

const FALLBACK: Country[] = [
  { name: "Australia", iso2: "AU", dialCode: "+61" },
  { name: "Canada", iso2: "CA", dialCode: "+1" },
  { name: "Germany", iso2: "DE", dialCode: "+49" },
  { name: "Ghana", iso2: "GH", dialCode: "+233" },
  { name: "India", iso2: "IN", dialCode: "+91" },
  { name: "Kenya", iso2: "KE", dialCode: "+254" },
  { name: "Nigeria", iso2: "NG", dialCode: "+234" },
  { name: "South Africa", iso2: "ZA", dialCode: "+27" },
  { name: "United Kingdom", iso2: "GB", dialCode: "+44" },
  { name: "United States", iso2: "US", dialCode: "+1" },
];

const flagOf = (iso2: string) =>
  /^[A-Za-z]{2}$/.test(iso2) ? String.fromCodePoint(...[...iso2.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)) : "🏳️";

// Loaded once per page and shared by every picker.
let loaded: Promise<Country[]> | null = null;
function loadCountries(): Promise<Country[]> {
  loaded ??= fetch("https://countriesnow.space/api/v0.1/countries/codes")
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((json: { data?: { name?: string; code?: string; dial_code?: string }[] }) => {
      const list = (json.data ?? [])
        .map((c) => ({
          name: (c.name ?? "").trim(),
          iso2: /^[A-Za-z]{2}$/.test(c.code ?? "") ? c.code!.toUpperCase() : "",
          dialCode: (c.dial_code ?? "").trim(),
        }))
        .filter((c) => c.name && c.iso2 && /^\+\d{1,4}$/.test(c.dialCode))
        .sort((a, b) => a.name.localeCompare(b.name));
      return list.length ? list : FALLBACK;
    })
    .catch(() => FALLBACK);
  return loaded;
}

export function PhoneCodeSelect({ value, onChange }: { value: string; onChange: (dialCode: string) => void }) {
  const [countries, setCountries] = useState<Country[]>(FALLBACK);
  // Which country was picked: +1 alone defaults to the US rather than the first +1 country.
  const [pickedIso, setPickedIso] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    void loadCountries().then((list) => live && setCountries(list));
    return () => {
      live = false;
    };
  }, []);

  const iso2 =
    (pickedIso && countries.find((c) => c.iso2 === pickedIso && c.dialCode === value)?.iso2) ??
    (value === "+1" ? "US" : (countries.find((c) => c.dialCode === value)?.iso2 ?? "US"));

  return (
    <SearchableSelect
      label="Country dialling code"
      searchPlaceholder="Search country or code"
      value={iso2}
      onChange={(next) => {
        const dial = countries.find((c) => c.iso2 === next)?.dialCode;
        if (!dial) return;
        setPickedIso(next);
        onChange(dial);
      }}
      options={countries.map((c) => ({ value: c.iso2, label: c.name, leading: flagOf(c.iso2), trailing: c.dialCode, keywords: c.iso2 }))}
      renderValue={() => (
        <span className="whitespace-nowrap text-[14px] text-ink">
          {flagOf(iso2)} {value}
        </span>
      )}
      triggerClassName="flex h-full items-center gap-1.5 rounded-l-[10px] border-0 border-r border-line-strong bg-transparent px-3 outline-none transition-colors hover:bg-surface-2 focus-visible:bg-surface-2"
    />
  );
}
