"use client";

import { useState } from "react";
import { TEXT_TYPE_CONFIGS } from "@/lib/constants";
import { TextType } from "@/lib/types";

interface TextFormProps {
  onGenerate: (type: TextType, fields: Record<string, string>) => void;
  loading: boolean;
}

export default function TextForm({ onGenerate, loading }: TextFormProps) {
  const [selectedType, setSelectedType] = useState<TextType>("email");
  const [fields, setFields] = useState<Record<string, string>>({});

  const config = TEXT_TYPE_CONFIGS.find((c) => c.id === selectedType)!;

  const handleTypeChange = (type: TextType) => {
    setSelectedType(type);
    setFields({});
  };

  const handleFieldChange = (name: string, value: string) => {
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(selectedType, fields);
  };

  return (
    <section>
      <div className="mb-8">
        <label className="mb-2 block text-sm font-medium text-gray-400">
          Tipo de texto
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {TEXT_TYPE_CONFIGS.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => handleTypeChange(type.id)}
              className={`rounded-lg border p-4 text-left transition-colors ${
                selectedType === type.id
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 bg-gray-900 hover:border-gray-700"
              }`}
            >
              <div className="text-2xl">{type.icon}</div>
              <div className="mt-2 text-sm font-medium text-gray-200">
                {type.label}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {type.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {config.fields.map((field) => (
          <div key={field.name}>
            <label className="mb-1 block text-sm font-medium text-gray-400">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                value={fields[field.name] || ""}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                className="w-full rounded-lg border-gray-700 bg-gray-900 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Selecione...</option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                value={fields[field.name] || ""}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className="w-full rounded-lg border-gray-700 bg-gray-900 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            ) : (
              <input
                type="text"
                value={fields[field.name] || ""}
                onChange={(e) => handleFieldChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className="w-full rounded-lg border-gray-700 bg-gray-900 text-gray-100 focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Gerando..." : "Gerar texto"}
        </button>
      </form>
    </section>
  );
}
