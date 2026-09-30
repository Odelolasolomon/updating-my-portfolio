import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  multiline: true;
};

export function FormField(props: InputProps | TextareaProps) {
  const { label, error, className, id, ...rest } = props;
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");
  const fieldClassName = cn("focus-ring mt-2 w-full rounded-portfolio border border-portfolio-grey bg-white px-4 py-3 text-sm text-portfolio-charcoal placeholder:text-portfolio-slate/70", error && "border-portfolio-orange", className);

  return (
    <label htmlFor={fieldId} className="block text-sm font-medium text-portfolio-charcoal">
      {label}
      {"multiline" in props ? (
        <textarea id={fieldId} className={fieldClassName} aria-invalid={Boolean(error)} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={fieldId} className={fieldClassName} aria-invalid={Boolean(error)} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error ? <span className="mt-2 block text-sm text-portfolio-orange">{error}</span> : null}
    </label>
  );
}
