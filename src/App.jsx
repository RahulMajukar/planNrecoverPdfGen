import React, { useState } from "react";
import PdfCard from "./components/pdf/PdfCard";
import PdfPreviewModal from "./components/pdf/PdfPreviewModal";
import {
  ClientProgramStatement, InsuraCastReport, ExerciseAfterActionReport, ManagementApprovalMaintenance,
  RiskRegister,
  Policy,
  Procedure,
  Methodology,
  BusinessContinuityPlan
} from "./components/documents";

// PDF Configurations
const pdfConfigs = [
  {
    id: "client-program",
    title: "Client Program Statement",
    description: "View and download the generated client program PDF with business continuity details.",
    component: ClientProgramStatement,
    fileName: "client-program-statement.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString()
    }
  },
  {
    id: "insuracast",
    title: "InsuraCast™ Report",
    description: "Business Continuity & Risk Posture Evidence Package with comprehensive analysis.",
    component: InsuraCastReport,
    fileName: "insuracast-report.pdf",
    props: {
      companyName: "XYZ Corporation",
      generatedDate: new Date().toLocaleDateString()
    }
  },
  {
    id: "exercise-after-action",
    title: "Exercise After-action Report",
    description: "Documents what happened during exercises, what worked, what failed, and corrective actions.",
    component: ExerciseAfterActionReport,
    fileName: "exercise-after-action-report.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString(),
      exerciseSummary: "Display summary of exercises completed – allow for click on \"Action\" icon to open full exercise report that was created on the Exercise page"
    }
  },
  {
    id: "management-approval",
    title: "Management Approval & Maintenance",
    description: "Formal management review and approval tracking for all program components with color-coded status indicators.",
    component: ManagementApprovalMaintenance,
    fileName: "management-approval-maintenance.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString()
    }
  },
  {
    id: "risk-register",
    title: "Risk Register",
    description: "Comprehensive prioritized risk listing with likelihood, impact, controls, and AI-driven loss drivers.",
    component: RiskRegister,
    fileName: "risk-register.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString()
    }
  },
  {
    id: "policy",
    title: "Policy",
    description: "Executive BCMS policy with governance, roles, minimum requirements, and standards alignment.",
    component: Policy,
    fileName: "business-continuity-policy.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString(),
      reviewCadence: "At least annually, and after major business, technology, facility, supplier, or regulatory change"
    }
  },
  {
    id: "procedure",
    title: "Procedure",
    description: "Step-by-step BCMS procedure with intent, requirements, roles, and templates for implementation.",
    component: Procedure,
    fileName: "business-continuity-procedure.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString(),
      reviewCadence: "At least annually, and after major business, technology, facility, supplier, or regulatory change"
    }
  },
  {
    id: "methodology",
    title: "Methodology",
    description: "Standardized BCMS methodology with guiding principles, lifecycle, roles, and quality assurance.",
    component: Methodology,
    fileName: "business-continuity-methodology.pdf",
    props: {
      companyName: "ABC Pvt Ltd",
      generatedDate: new Date().toLocaleDateString()
    }
  },
   {
        id: "bcp",
        title: "Business Continuity Plan",
        description: "Comprehensive BCP with first 48 hours guide, roles, recovery strategies, and maintenance procedures.",
        component: BusinessContinuityPlan,
        fileName: "business-continuity-plan.pdf",
        props: {
            companyName: "ABC Pvt Ltd",
            generatedDate: new Date().toLocaleDateString()
        }
    }
];

function App() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPdf = (config) => {
    setSelectedPdf(config);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPdf(null), 300);
  };

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Document Center</h1>
        <p className="text-gray-400 mb-8">Select a document to preview or download</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfConfigs.map((config) => (
            <PdfCard
              key={config.id}
              title={config.title}
              description={config.description}
              onClick={() => openPdf(config)}
            />
          ))}
        </div>
      </div>

      {selectedPdf && (
        <PdfPreviewModal
          open={isModalOpen}
          onClose={closeModal}
          document={selectedPdf.component}
          documentProps={selectedPdf.props}
          fileName={selectedPdf.fileName}
          title={selectedPdf.title}
        />
      )}
    </div>
  );
}

export default App;