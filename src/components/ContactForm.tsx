import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const schema = {
  name: (v: string) => v.trim().length >= 2 || "Informe seu nome",
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "E-mail inválido",
  subject: (v: string) => v.trim().length >= 3 || "Assunto muito curto",
  message: (v: string) => v.trim().length >= 10 || "Mensagem muito curta",
};

type Field = keyof typeof schema;
type Status = "idle" | "sending" | "success";

export function ContactForm() {
  const [data, setData] = useState<Record<Field, string>>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = () => {
    const next: Partial<Record<Field, string>> = {};
    (Object.keys(schema) as Field[]).forEach((k) => {
      const r = schema[k](data[k]);
      if (r !== true) next[k] = r as string;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const field = (name: Field, label: string, type = "text", textarea = false) => (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground/90">{label}</label>
      {textarea ? (
        <textarea
          id={name}
          rows={5}
          value={data[name]}
          onChange={(e) => setData({ ...data, [name]: e.target.value })}
          aria-invalid={!!errors[name]}
          className="w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
        />
      ) : (
        <input
          id={name}
          type={type}
          value={data[name]}
          onChange={(e) => setData({ ...data, [name]: e.target.value })}
          aria-invalid={!!errors[name]}
          className="w-full rounded-md border border-border bg-input/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
        />
      )}
      {errors[name] && <p role="alert" className="text-xs text-destructive">{errors[name]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Nome")}
        {field("email", "E-mail", "email")}
      </div>
      {field("subject", "Assunto")}
      {field("message", "Mensagem", "text", true)}

      <button
        type="submit"
        disabled={status !== "idle"}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-70 glow"
      >
        {status === "sending" && <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</>}
        {status === "success" && <><CheckCircle2 className="h-4 w-4" /> Mensagem enviada</>}
        {status === "idle" && <><Send className="h-4 w-4" /> Enviar mensagem</>}
      </button>
    </form>
  );
}
