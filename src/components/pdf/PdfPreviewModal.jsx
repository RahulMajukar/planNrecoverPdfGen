import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

export default function PdfPreviewModal({ 
  open, 
  onClose, 
  document: PdfDocument, 
  documentProps = {},
  fileName = "document.pdf",
  title = "PDF Preview"
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-neutral-900 w-[95vw] h-[95vh] max-w-7xl rounded-xl flex flex-col shadow-2xl border border-gray-800">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-neutral-800/50 rounded-t-xl">
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          
          <div className="flex gap-3">
            <PDFDownloadLink
              document={<PdfDocument {...documentProps} />}
              fileName={fileName}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg"
            >
              {({ loading }) => (
                loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Preparing...
                  </span>
                ) : (
                  "Download PDF"
                )
              )}
            </PDFDownloadLink>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-neutral-800 rounded-b-xl overflow-hidden">
          <PDFViewer width="100%" height="100%" className="w-full h-full">
            <PdfDocument {...documentProps} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
}