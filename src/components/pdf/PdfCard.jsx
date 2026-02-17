import React from "react";

export default function PdfCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-gray-700 bg-neutral-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm hover:border-blue-500/50 group"
    >
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
      <div className="mt-4 text-sm text-blue-400 font-medium group-hover:translate-x-1 transition-transform inline-block">
        Click to preview →
      </div>
    </div>
  );
}