"use client";

import { HistoryItem } from "@/lib/types";
import { TEXT_TYPE_CONFIGS } from "@/lib/constants";

interface HistoryProps {
  history: HistoryItem[];
  onView: (item: HistoryItem) => void;
}

export default function History({ history, onView }: HistoryProps) {
  if (history.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-lg font-semibold text-gray-200">Hist&oacute;rico</h2>
      <p className="mt-1 text-sm text-gray-500">
        &Uacute;ltimos textos gerados
      </p>
      <div className="mt-4 space-y-3">
        {history.map((item) => {
          const config = TEXT_TYPE_CONFIGS.find((c) => c.id === item.type);
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onView(item)}
              className="w-full rounded-lg border border-gray-800 bg-gray-900 p-4 text-left transition-colors hover:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{config?.icon}</span>
                <span className="text-sm font-medium text-gray-200">
                  {config?.label}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(item.timestamp).toLocaleString("pt-BR")}
                </span>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                {item.result}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
