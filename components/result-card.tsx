"use client";

import { useState } from "react";

interface ResultCardProps {
  result: string | null;
  loading: boolean;
}

export default function ResultCard({ result, loading }: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  if (!result && !loading) return null;

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = result;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section>
      {loading ? (
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
          <div className="animate-pulse space-y-3">
            <div className="h-4 w-3/4 rounded bg-gray-800" />
            <div className="h-4 w-1/2 rounded bg-gray-800" />
            <div className="h-4 w-5/6 rounded bg-gray-800" />
          </div>
        </div>
      ) : (
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-200">
              Texto gerado
            </h2>
            <button
              onClick={handleCopy}
              className="shrink-0 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <div className="mt-4 whitespace-pre-wrap text-gray-300">
            {result}
          </div>
        </div>
      )}
    </section>
  );
}
