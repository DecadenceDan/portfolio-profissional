import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm({ isDarkMode = true }: { isDarkMode?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Erro ao enviar mensagem");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const inputClasses = isDarkMode
    ? "bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:border-cyan-400"
    : "bg-white border-gray-200 text-black placeholder-gray-400 focus:border-cyan-400";

  const labelClasses = isDarkMode ? "text-white" : "text-black";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <div>
        <label htmlFor="name" className={`block text-sm font-medium ${labelClasses} mb-2`}>
          Nome
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${inputClasses}`}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className={`block text-sm font-medium ${labelClasses} mb-2`}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${inputClasses}`}
          placeholder="seu.email@exemplo.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className={`block text-sm font-medium ${labelClasses} mb-2`}>
          Assunto
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${inputClasses}`}
          placeholder="Assunto da mensagem"
        />
      </div>

      <div>
        <label htmlFor="message" className={`block text-sm font-medium ${labelClasses} mb-2`}>
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none ${inputClasses}`}
          placeholder="Sua mensagem aqui..."
        />
      </div>

      <Button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-black hover:opacity-90 font-bold py-3 rounded-lg transition-opacity"
      >
        {submitMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  );
}
