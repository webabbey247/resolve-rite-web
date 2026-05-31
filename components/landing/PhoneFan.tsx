import { Phone } from "./Phone";

// ── Three overlapping device mocks fanned out behind a soft brand glow.
export function PhoneFan() {
  const cat = "/assets/flow-category.png";
  const q = "/assets/flow-question.png";
  const sub = "/assets/flow-subquestions.png";
  return (
    <div className="relative flex h-150 w-140 max-w-full items-center justify-center">
      {/* soft glow behind */}
      <div className="absolute h-110 w-110 rounded-full bg-[radial-gradient(circle,var(--rr-brand-soft)_0%,transparent_70%)] blur-sm" />
      {/* left phone — pick a category, rotated back */}
      <div className="absolute left-1.5 top-19.5 z-1 -rotate-9">
        <Phone w={196} img={cat} alt="Student app — choose a complaint category" />
      </div>
      {/* right phone — sub-questions, rotated forward */}
      <div className="absolute right-1.5 top-19.5 z-1 rotate-9">
        <Phone w={196} img={sub} alt="Student app — branching follow-up questions" />
      </div>
      {/* center phone — pick a question, forward */}
      <div className="relative z-3 -translate-y-2.5">
        <Phone w={238} img={q} alt="Student app — pick a question" />
      </div>
    </div>
  );
}

export default PhoneFan;
