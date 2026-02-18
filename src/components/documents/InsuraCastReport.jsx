import React from "react";
import { Text, View, StyleSheet, Document } from "@react-pdf/renderer";
import { PageWrapper } from "../pdf/BaseDocument";
import { sharedStyles as styles } from "../pdf/pdfTheme";

// Document-specific column widths
const col = StyleSheet.create({
    // Disruption Likelihood table
    colThreat: { width: "30%" },
    colLikelihood: { width: "10%" },
    colImpact: { width: "10%" },
    colControl: { width: "10%" },
    colRiskScore: { width: "12%" },
    colDrivers: { width: "28%" },
    // Standards Alignment table
    colReq: { width: "28%" },
    colISO: { width: "18%" },
    colDRI: { width: "16%" },
    colEvidence: { width: "38%" },
});

// Local style overrides (grayscale)
const local = StyleSheet.create({
    coverPage: {
        backgroundColor: "#ffffff",
        padding: 60,
        paddingTop: 120,
        flex: 1,
        justifyContent: "center",
    },
    coverTitle: {
        fontSize: 28,
        color: "#111111",
        fontWeight: "bold",
        marginBottom: 16,
    },
    coverSubTitle: {
        fontSize: 14,
        color: "#555555",
        marginBottom: 24,
        lineHeight: 1.5,
    },
    companyBox: {
        color: "#111111",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    dateBox: {
        color: "#777777",
        fontSize: 10,
        marginTop: 4,
    },
    tocTitle: {
        fontSize: 18,
        color: "#111111",
        fontWeight: "bold",
        marginBottom: 16,
    },
    tocItem: {
        flexDirection: "row",
        marginBottom: 6,
        alignItems: "baseline",
    },
    tocNumber: {
        width: 28,
        color: "#333333",
        fontSize: 10,
    },
    tocText: {
        flex: 1,
        color: "#333333",
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        borderBottomStyle: "dotted",
        marginRight: 4,
    },
    tocPage: {
        color: "#333333",
        fontSize: 10,
        width: 28,
        textAlign: "right",
    },
    sectionNumber: {
        fontSize: 20,
        color: "#111111",
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 10,
    },
    insightsBox: {
        backgroundColor: "#f3f4f6",
        borderLeftWidth: 3,
        borderLeftColor: "#333333",
        padding: 10,
        marginVertical: 12,
    },
    insightsTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#111111",
        marginBottom: 6,
    },
    insightsItem: {
        fontSize: 10,
        color: "#333333",
        marginBottom: 4,
        lineHeight: 1.5,
    },
});

const bulletPoint = "• ";

export default function InsuraCastReport({
    companyName = "DISPLAY NAME OF COMPANY",
    generatedDate = new Date().toLocaleDateString()
}) {
    return (
        <Document>
            {/* Cover Page */}
            <PageWrapper title="InsuraCast™ Report">
                <View style={local.coverPage}>
                    <Text style={local.coverTitle}>InsuraCast™ Report</Text>
                    <Text style={local.coverSubTitle}>
                        Business Continuity &amp; Risk{"\n"}Posture Evidence Package for
                    </Text>
                    <Text style={local.companyBox}>{companyName}</Text>
                    <Text style={local.dateBox}>DATE: {generatedDate}</Text>
                </View>
            </PageWrapper>

            {/* Table of Contents */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={local.tocTitle}>Table of Contents</Text>

                {[
                    { num: "1", text: "Introduction", page: "3" },
                    { num: "1.1", text: "Plan & Recover", page: "3" },
                    { num: "1.2", text: "Purpose", page: "3" },
                    { num: "2", text: "Executive Summary", page: "4" },
                    { num: "2.1", text: "Business Profile", page: "4" },
                    { num: "2.2", text: "Program Overview", page: "4" },
                    { num: "3", text: "Evidence Package", page: "5" },
                    { num: "3.1", text: "Disruption Likelihood", page: "5" },
                    { num: "3.2", text: "Loss Size and Duration", page: "6" },
                    { num: "3.3", text: "Operational Discipline", page: "7" },
                    { num: "4", text: "Standards Alignment", page: "9" },
                ].map((item, i) => (
                    <View key={i} style={local.tocItem}>
                        <Text style={local.tocNumber}>{item.num}</Text>
                        <Text style={local.tocText}>{item.text}</Text>
                        <Text style={local.tocPage}>{item.page}</Text>
                    </View>
                ))}
            </PageWrapper>

            {/* Section 1: Introduction */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={local.sectionNumber}>1 Introduction</Text>

                <Text style={styles.subsectionTitle}>1.1 Plan &amp; Recover</Text>
                <Text style={styles.paragraph}>
                    Plan &amp; Recover is an industry-leading risk management and business continuity planning software designed to help small and medium-sized businesses build, maintain, and validate operational resilience with audit-ready evidence. The platform is aligned to ISO 22301 and the DRI 10 Professional Practices, translating international standards into practical, executable plans, exercises, and continuous improvement workflows. Plan &amp; Recover is also structured to support insurance underwriting by providing clear, evidence-based insight into preparedness, recovery capability, and risk controls that reduce loss likelihood, severity, and business interruption duration.
                </Text>

                <Text style={styles.subsectionTitle}>1.2 Purpose</Text>
                <Text style={styles.paragraph}>
                    This report supports underwriting discussions by providing documented, company-specific indicators of risk reduction activities and continuity capability across three core dimensions.
                </Text>

                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Disruption Likelihood:</Text> How likely is a disruptive event? Using outputs from the Threat and Vulnerability Assessment (scenario likelihood, exposure intensity, evidence of controls, and residual risk scoring) to estimate event probability by peril, and to flag potential loss drivers.
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Loss Size and Duration:</Text> Expected loss size and duration if a covered event happens (especially business income and extra expense), using BIA outputs, recovery strategy assumptions, and restoration time drivers to estimate severity and the period of restoration.
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Operational Discipline:</Text> Operational discipline that reduces the chance a routine incident turns into a large, long claim, using evidence of governance, training, exercises, corrective action closure, maintenance/impairment management, and crisis decision rights to demonstrate consistent execution under stress.
                    </Text>
                </View>
            </PageWrapper>

            {/* Section 2: Executive Summary */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={local.sectionNumber}>2 Executive Summary</Text>

                <Text style={styles.subsectionTitle}>2.1 Business Profile</Text>
                <Text style={styles.paragraph}>
                    <Text style={styles.bold}>Insured:</Text> Syracuse Precision Components LLC, Syracuse, NY{"\n"}
                    <Text style={styles.bold}>Profile:</Text> Single-site manufacturer, $25M annual revenue, weekday operations (250 operating days). This summary reflects illustrative outputs from Plan &amp; Recover data fields aligned to ISO 22301 and DRI Professional Practices, translated into underwriting-relevant indicators across disruption likelihood, loss size and duration, and operational discipline.
                </Text>

                <Text style={styles.subsectionTitle}>2.2 Program Overview</Text>
                <Text style={styles.paragraph}>
                    Overall, the program evidence supports a view that the insured has meaningful continuity capability for common disruptions, with the primary residual exposure concentrated in single-site operational dependency on power and plant-wide utilities, and in single-point equipment and supplier constraints. Loss severity is expected to be moderate for sub-day events, but material for multi-day outages, driven by business income loss acceleration and extra expense required to recover service levels and retain customers.
                </Text>
            </PageWrapper>

            {/* Section 3.1: Disruption Likelihood */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={local.sectionNumber}>3 Evidence Package</Text>

                <Text style={styles.subsectionTitle}>3.1 Disruption Likelihood</Text>
                <Text style={styles.paragraph}>
                    Disruption Likelihood estimates how probable a disruptive event is, by peril, based on the company's documented residual likelihood and impact ratings after controls are applied. It also highlights potential loss drivers, meaning the specific scenarios most likely to trigger a claim, or materially worsen downtime, extra expense, and the period of restoration.
                </Text>

                <Text style={styles.bold}>Threat and Vulnerability Assessment highlights</Text>
                <Text style={styles.paragraph}>
                    Scales (illustrative): Likelihood 1–5, Impact 1–5, and Control Yes &amp; No.
                </Text>
                <Text style={styles.paragraph}>
                    If a control is in place, scoring is based on residual calculations, if no control is in place, scoring is based on inherent calculations.
                </Text>

                {/* Disruption Likelihood Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={col.colThreat}><Text style={styles.tableCellBold}>Threat</Text></View>
                        <View style={col.colLikelihood}><Text style={styles.tableCellBold}>Likelihood</Text></View>
                        <View style={col.colImpact}><Text style={styles.tableCellBold}>Impact</Text></View>
                        <View style={col.colControl}><Text style={styles.tableCellBold}>Control</Text></View>
                        <View style={col.colRiskScore}><Text style={styles.tableCellBold}>Risk score</Text></View>
                        <View style={col.colDrivers}><Text style={styles.tableCellBold}>Potential loss drivers</Text></View>
                    </View>

                    {[
                        { threat: "Utility power outage (winter grid events)", likelihood: "3", impact: "5", control: "Yes", score: "60", drivers: "Single facility, no production-grade generator, compressed air dependency" },
                        { threat: "Critical machine failure (CNC, laser)", likelihood: "4", impact: "4", control: "Yes", score: "48", drivers: "Limited redundancy, long lead repair parts, single-point machines" },
                        { threat: "Key supplier disruption (specialty steel/tooling)", likelihood: "3", impact: "4", control: "No", score: "48", drivers: "Single-source components, variable lead times, limited safety stock" },
                        { threat: "Ransomware or ERP outage", likelihood: "3", impact: "5", control: "Yes", score: "45", drivers: "Scheduling, shipping, invoicing dependency, recovery complexity under stress" },
                        { threat: "Severe winter storm (access + transport)", likelihood: "4", impact: "3", control: "No", score: "36", drivers: "Workforce availability, carrier disruption, inbound material delays" }
                    ].map((row, idx) => (
                        <View key={idx} style={styles.tableRow}>
                            <View style={col.colThreat}><Text style={styles.tableCell}>{row.threat}</Text></View>
                            <View style={col.colLikelihood}><Text style={styles.tableCell}>{row.likelihood}</Text></View>
                            <View style={col.colImpact}><Text style={styles.tableCell}>{row.impact}</Text></View>
                            <View style={col.colControl}><Text style={styles.tableCell}>{row.control}</Text></View>
                            <View style={col.colRiskScore}><Text style={styles.tableCellBold}>{row.score}</Text></View>
                            <View style={col.colDrivers}><Text style={styles.tableCell}>{row.drivers}</Text></View>
                        </View>
                    ))}
                </View>

                <View style={local.insightsBox}>
                    <Text style={local.insightsTitle}>Underwriter Insights</Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}The highest residual risk concentration sits in power dependency and single-site production constraints, meaning the potential insured loss drivers are full production stoppage and delayed restoration from utility and plant-wide utility failures (especially compressed air).
                    </Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}Cyber is a credible trigger, but loss is more likely to manifest as operational disruption and shipping/billing friction rather than physical damage, because critical systems have backups and defined recovery targets.
                    </Text>
                </View>
            </PageWrapper>

            {/* Section 3.2: Loss Size and Duration */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={styles.subsectionTitle}>3.2 Loss Size and Duration</Text>
                <Text style={styles.paragraph}>
                    Loss Size and Duration estimates the expected financial severity if a covered event occurs, focusing on business income loss and extra expense over the projected period of restoration. It uses the Business Impact Analysis and recovery time assumptions to show how quickly losses accelerate as critical processes, systems, and dependencies remain unavailable.
                </Text>

                <Text style={styles.bold}>Business Impact Analysis (BIA), critical process profile</Text>
                <Text style={styles.paragraph}>
                    Assumptions for severity: $25M revenue, 250 operating days → $100k revenue/day. Contribution margin proxy 35% → $35k gross profit/day at risk.
                </Text>

                <Text style={styles.bold}>Critical processes and RTOs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Production line operations: RTO 1 day (financial and operational impact rated Critical)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Quality control and release: RTO 1 day</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Customer order management: RTO 1 day</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Shipping and logistics: RTO 2 days</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Procurement/receiving: RTO 3 days</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}General Ledger: RTO 5 days</Text>
                </View>

                <Text style={styles.bold}>Technology and data (RTO/RPO)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}ERP: RTO 8 hours, RPO 4 hours</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Microsoft 365: RTO 4 hours, RPO Immediate</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}CAD/CAM repository: RTO 1 day, RPO 8 hours</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Quality records: RTO 1 day, RPO 4 hours</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Shipping labels/carrier tools: RTO 8 hours, RPO 2 hours</Text>
                </View>

                <Text style={styles.bold}>Downtime curve for the main BI driver: Production line (RTO 1 day)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}4–8 hours: manageable backlog, limited BI exposure, modest overtime</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}1 day: meaningful BI exposure begins (approximately $35k GP at risk) plus expediting</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}2–3 days: severity accelerates from missed ship windows (approximately $70k–$105k GP at risk) and extra expense from overtime, outsourcing, and premium freight</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}5 days: elevated risk of cancellations, contractual penalties, and restart quality losses (approximately $175k GP at risk, plus material extra expense)</Text>
                </View>

                <Text style={styles.bold}>Period of restoration drivers (what extends claims)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Utility restoration time (power), plus electrical reset and safe restart sequencing</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Restoration of plant-wide utilities (compressed air) that can halt all production even if machines are intact</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Lead time for specialized machine repair parts and vendor availability</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Supplier lead times for custom inputs, which can create a second wave of interruption after the facility returns</Text>
                </View>

                <View style={local.insightsBox}>
                    <Text style={local.insightsTitle}>Underwriter Insights</Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}The insured's loss profile is best characterized as short outages are containable, but multi-day outages become claim-relevant quickly, because production, QC, and order flow all have 1-day recovery targets.
                    </Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}For covered property events, the most likely drivers of severity are extra expense (overtime, expedited freight, temporary outsourcing) and extended restoration when outages cascade from utility failure into equipment and supply constraints.
                    </Text>
                </View>
            </PageWrapper>

            {/* Section 3.3: Operational Discipline */}
            <PageWrapper title="InsuraCast™ Report">
                <Text style={styles.subsectionTitle}>3.3 Operational Discipline</Text>
                <Text style={styles.paragraph}>
                    Operational Discipline measures how consistently the organization can execute its plans under stress, and how effectively it prevents routine incidents from escalating into large, prolonged claims. It reflects evidence of governance, training, exercising, corrective action closure, and clear decision rights that support fast, coordinated action during disruption.
                </Text>

                <Text style={styles.bold}>Evidence of discipline from program artifacts</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>
                        {bulletPoint}<Text style={styles.bold}>Governance:</Text> BC policy, defined scope, documented methodology, and BC procedures provide consistent decision-making and accountability.
                    </Text>
                    <Text style={styles.bulletItem}>
                        {bulletPoint}<Text style={styles.bold}>Plans:</Text> Crisis management plan and business continuity plan exist, with defined response structure and recovery sequencing for facility, technology, people, and third-party outages.
                    </Text>
                    <Text style={styles.bulletItem}>
                        {bulletPoint}<Text style={styles.bold}>Exercising and maintenance:</Text> Tabletop scenario program with after-action reporting, corrective action tracking, and maintenance of plans at least annually, and after material changes.
                    </Text>
                    <Text style={styles.bulletItem}>
                        {bulletPoint}<Text style={styles.bold}>Crisis decision rights:</Text> Documented authority to trigger shutdown, initiate supplier diversion, approve expedited freight, and authorize IT containment actions.
                    </Text>
                </View>

                <View style={local.insightsBox}>
                    <Text style={local.insightsTitle}>Underwriter Insights</Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}The presence of defined RTO/RPO targets across core systems, plus structured exercises and corrective action closure, indicates a repeatable operating cadence, reducing the likelihood that a small incident becomes a prolonged interruption.
                    </Text>
                    <Text style={local.insightsItem}>
                        {bulletPoint}Operational discipline is strongest where the organization practices cross-functional coordination (production, QC, shipping, IT), which is critical for manufacturing claims where restoration is not only "power back on," but also "quality released and orders flowing."
                    </Text>
                </View>
            </PageWrapper>
        </Document>
    );
}