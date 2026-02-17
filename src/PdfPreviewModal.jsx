import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "./PdfDocument";
// import PdfDocument from "../pdf/PdfDocument";

export default function PdfPreviewModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-neutral-900 w-[90vw] h-[90vh] rounded-lg flex flex-col">

        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
          <h2 className="text-white font-medium">PDF Preview</h2>

          <div className="flex gap-3">
            <PDFDownloadLink
              document={<PdfDocument companyName="ABC Pvt Ltd" />}
              fileName="client-program-statement.pdf"
              className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm"
            >
              {({ loading }) =>
                loading ? "Preparing..." : "Download"
              }
            </PDFDownloadLink>

            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white text-sm"
            >
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 bg-neutral-800">
          <PDFViewer width="100%" height="100%">
            <PdfDocument companyName="ABC Pvt Ltd" />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}
