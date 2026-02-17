export default function PdfCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-gray-700 bg-neutral-900 p-6 shadow hover:shadow-lg transition max-w-sm"
    >
      <h3 className="text-lg font-semibold text-white">
        Client Program Statement
      </h3>

      <p className="mt-2 text-sm text-gray-400">
        View and download the generated client program PDF.
      </p>

      <div className="mt-4 text-sm text-blue-400">
        Click to preview →
      </div>
    </div>
  );
}
