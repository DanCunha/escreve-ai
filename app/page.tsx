"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import TextForm from "@/components/text-form";
import ResultCard from "@/components/result-card";
import History from "@/components/history";
import { TextType, HistoryItem } from "@/lib/types";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [viewingHistory, setViewingHistory] = useState<HistoryItem | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (
    type: TextType,
    fields: Record<string, string>
  ) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setViewingHistory(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, fields }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao gerar texto");
      }

      setResult(data.result);

      const item: HistoryItem = {
        id: Date.now().toString(),
        type,
        fields,
        result: data.result,
        timestamp: Date.now(),
      };

      setHistory((prev) => [item, ...prev].slice(0, 5));
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro inesperado. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleViewHistory = (item: HistoryItem) => {
    setViewingHistory(item);
    setResult(null);
    setError(null);
  };

  const displayResult = viewingHistory ? viewingHistory.result : result;

  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <TextForm onGenerate={handleGenerate} loading={loading} />

          <div className="space-y-8 lg:sticky lg:top-8">
            {error && (
              <div className="rounded-lg border border-red-900/50 bg-red-950/50 p-4 text-sm text-red-400">
                {error}
              </div>
            )}

            <ResultCard result={displayResult} loading={loading} />
          </div>
        </div>

        <History history={history} onView={handleViewHistory} />
      </div>
    </main>
  );
}
