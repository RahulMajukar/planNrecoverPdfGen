import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";
import { sharedStyles as styles } from "../pdf/pdfTheme";

// Column widths specific to this document
const col = StyleSheet.create({
    col1: { width: "25%" },
    col2: { width: "18%" },
    col3: { width: "18%" },
    col4: { width: "39%" },
});

const bulletPoint = "• ";

export default function ClientProgramStatement({
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString()
}) {
    return (
        <BaseDocument title="Client Program Statement">
            <View style={styles.infoBlock}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Company:</Text>
                    <Text>{companyName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Date:</Text>
                    <Text>{generatedDate}</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Plan & Recover</Text>
            <Text style={styles.paragraph}>
                Plan & Recover is an industry-leading risk management and business
                continuity planning software designed to help small and medium-sized
                businesses build, maintain, and validate operational resilience with
                audit-ready evidence. The platform is aligned to ISO 22301 and the DRI
                10 Professional Practices, translating international standards into
                practical, executable plans, exercises, and continuous improvement
                workflows. For more information, please visit{" "}
                <Text style={styles.link}>www.planandrecover.com</Text>.
            </Text>

            <Text style={styles.sectionTitle}>Purpose</Text>
            <Text style={styles.paragraph}>
                Provide assurance that the organization has established and tested a
                risk management and business continuity program aligned to recognized
                standards, with defined responsibilities, validated procedures, and a
                demonstrable readiness to respond to disruption.
            </Text>

            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.paragraph}>
                A formal business continuity, crisis management, threat & vulnerability risk analysis, and emergency response program is in place and is considered well-controlled and generally compliant with the core expectations reflected in ISO 22301 and the DRI 10 Professional Practices. A complete analysis of critical processes has been completed, with documented business impacts and Recovery Time Objectives (RTOs) for each critical process, enabling disciplined recovery triage and an understanding of impact escalation across varying outage durations. The development of governance, risk assessment, and recovery strategies indicate a program that is positioned to reduce disruption severity, shorten recovery time, and improve operational reliability for customers and other stakeholders.
            </Text>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Program Overview</Text>

            <Text style={styles.subsectionTitle}>Governance and accountability</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Governance establishes the authority, ownership, and operating rhythm required to keep continuity and crisis capabilities current, usable, and enforceable. A mature governance structure reduces plan drift, ensures that decision rights and escalation pathways are clear under stress, and supports consistent execution across incidents. Document control, approvals, and management review routines preserve the integrity of program artifacts and provide traceable accountability.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Centralized governance framework for continuity, crisis management, and emergency response program structure.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Role assignment capability for accountable owners, and decision authorities, including escalation pathways.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Built-in document control patterns, including versioning, and approval history.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Management review support through recurring review workflows, action capture, and status tracking of governance outcomes.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Audit-ready activity trails supporting evidence of approvals, updates, and periodic review completion.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Critical process analysis and BIA quality</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Business Impact Analysis (BIA) establishes the operational priorities that drive recovery decisions, resource allocation, and recovery sequencing. A complete critical process inventory, paired with documented impacts, and time-based tolerance thresholds, reduces the probability of mis prioritization during disruption. Documented RTOs support disciplined triage and provide a measurable target for recovery strategy design. For loss reduction, high-quality BIA outputs directly support faster stabilization, reduced downtime, and reduced secondary impacts by clarifying which services must be restored first and what consequences escalate over time.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Structured capture of critical process inventories with consistent fields to support completeness and comparability.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Impact documentation across operational, financial, compliance or regulatory, health and safety, and reputational dimensions.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}RTO definition per process, supporting prioritization tiers and recovery sequencing logic.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Technology and data recovery alignment through RTO and RPO capture where applicable, supporting IT recovery coordination.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Risk assessment and treatment planning</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Risk assessment identifies credible disruption scenarios and enables targeted control selection to reduce event frequency and severity. Risk treatment planning converts identified risks into owned mitigation actions with defined timelines and measurable closure. A disciplined methodology improves consistency of risk evaluation across business units and over time, supporting defensible prioritization.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Configurable risk methodology structures supporting consistent likelihood and impact criteria across the organization.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk register capability spanning operational, technology, cyber, physical security, natural catastrophe, and weather-related scenarios.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Treatment planning workflows connecting risks to actions, owners, due dates, and status reporting.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Residual risk capture and monitoring support, enabling ongoing review as controls mature or exposures change.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Traceable action history supporting confirmation that mitigation activities were implemented and maintained over time.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Continuity strategies and recoverability</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Continuity strategies convert recovery objectives into practical methods for restoring operations within required timeframes. Strategy maturity is demonstrated by coverage across critical processes, feasibility against known constraints, and documented workarounds where automation or facilities may be unavailable. Dependencies, including people, facilities, technology, and third parties, must be explicitly addressed to reduce strategy failure risk. Validated recovery strategies shorten outage duration and reduce revenue loss by ensuring that recovery resources and procedures are preplanned, accessible, and executable.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy libraries and recovery playbooks aligned to critical processes and required recovery timelines.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Documentation support for manual workarounds, alternate procedures, and minimum viable operations definitions.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Dependency mapping support for key suppliers, service providers, and internal enabling functions.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Contact lists and recovery resources captured in a structured format for rapid access during disruption.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Alignment between BIA targets and strategy design, supporting recoverability against stated RTO requirements.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Crisis management execution</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Crisis management capabilities govern coordinated decision-making during high-impact events where operational disruption intersects with safety, reputational exposure, and stakeholder scrutiny. Defined incident classification levels, escalation thresholds, and a documented command structure reduce delays and prevent fragmented response. Tactical actions for life safety events and operational response improve early-stage performance, when outcomes are most sensitive to speed and coordination. Effective crisis execution reduces escalation likelihood, contains loss severity, and supports faster transition from response to stabilized recovery.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Crisis management and emergency management plan structures supporting defined command roles, alternates, and decision authorities.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Escalation trigger documentation enabling consistent incident classification and activation criteria.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Coordination documentation for first responders, landlords or property management, and critical vendors.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Integration with exercise outputs to capture lessons learned and strengthen execution readiness over time.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Communications and stakeholder management</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Stakeholder communications is a core driver of operational stability and reputational protection during disruption. Defined ownership, preapproved templates, and clear approval workflows reduce message delays and prevent inconsistent or inaccurate communications. Internal notification structures support employee safety, workforce coordination, and operational continuity. Customer and vendor communications reduce churn risk and contractual friction by setting expectations, prioritizing critical services, and improving recovery coordination. Strong communications capabilities reduce secondary losses and support faster normalization of operations.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Crisis communications plan (included within the Crisis management plan) structures with role ownership and defined approval pathways.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Template libraries supporting consistent messaging to employees, customers, regulators, and media inquiries.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Contact list management supporting rapid outreach to internal teams and external stakeholders.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Prioritization support aligned to critical services, contractual obligations, and dependency relationships.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Documentation support for communication events and updates, enabling traceability and post-incident review.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Exercising, validation, and after-action tracking</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Exercises validate that documented plans are executable and that teams can perform critical actions under time pressure. Scenario-based testing identifies gaps in procedures, role clarity, communications pathways, and recovery feasibility before real incidents occur. After-action reporting and corrective action closure convert exercise findings into measurable improvements, reducing the probability of execution failure during an actual loss event. A consistent exercise and remediation cycle demonstrates continuous improvement and sustained readiness, both of which support reduced interruption duration and reduced loss severity.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise planning workflows supporting scenario selection and coverage across major disruption risks.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Participation tracking enabling accountability for team readiness and role-based performance expectations.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}After-action reporting structures supporting objective capture, performance assessment, and improvement planning.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective action tracking through closure, including ownership, due dates, and documentation of remediation.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plan update linkage enabling changes to be tied directly to lessons learned from exercises or real incidents.</Text>
            </View>

            <Text style={styles.subsectionTitle}>Maintenance, auditability, and continual improvement</Text>
            <Text style={styles.subsubsectionTitle}>General description</Text>
            <Text style={styles.paragraph}>
                Maintenance ensures that continuity, crisis, and emergency response capabilities remain current and usable as operations, staffing, vendors, and threats evolve. A disciplined review cadence prevents outdated contacts, obsolete procedures, and untested assumptions from undermining recovery. Auditability, including version history and traceable updates, supports assurance that controls operate over time, not only at the point of creation. Continual improvement uses performance evaluation, reviews, and corrective actions to strengthen resilience, reduce interruption duration, and demonstrate program integrity for underwriting review.
            </Text>

            <Text style={styles.subsubsectionTitle}>How Plan & Recover supports this section</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Recurring review workflows supporting scheduled updates for plans, contacts, dependencies, and vendors.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Version control and controlled updates supporting document integrity and defensible history of changes.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}KPI and program status visibility supporting readiness tracking, exercise outcomes monitoring, and risk reporting.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Management review enablement through consolidated status reporting and improvement action oversight.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Evidence organization supporting rapid retrieval of artifacts and activity trails during audits or underwriting evaluation.</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Program Alignment to Standards</Text>

            {/* Table Header */}
            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <View style={[styles.col1, styles.tableCellBold]}>
                        <Text>Requirement</Text>
                    </View>
                    <View style={[styles.col2, styles.tableCellBold]}>
                        <Text>ISO 22301 reference</Text>
                    </View>
                    <View style={[styles.col3, styles.tableCellBold]}>
                        <Text>DRI Professional Practice</Text>
                    </View>
                    <View style={[styles.col4, styles.tableCellBold]}>
                        <Text>Evidence: Program Components</Text>
                    </View>
                </View>

                {/* Row 1 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Program initiation and governance</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clauses 4–6</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP1</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Policy</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Procedure</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Methodology</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Scope</Text>
                    </View>
                </View>

                {/* Row 2 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Risk assessment</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8.2.3</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP2</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Threat and Vulnerability Assessment</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Inherent and Residual Controls</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Risk Mitigation Plans</Text>
                    </View>
                </View>

                {/* Row 3 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Business impact analysis</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8.2.2</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP3</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Business Impact Analysis</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Recovery Time Objectives</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Recovery point Objectives</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Critical Technology and Data</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Critical Equipment and Tools</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Critical Third Parties / Suppliers</Text>
                    </View>
                </View>

                {/* Row 4 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Strategies</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8.3</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP4</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Recovery Strategies for Outage Types: Facility, Technology, People, Third-party</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Manual Workaround Procedures</Text>
                    </View>
                </View>

                {/* Row 5 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Incident response</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8.4.2</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP5</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Crisis Management Plan</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}Roles & Responsibilities</Text>
                    </View>
                </View>

                {/* Row 6 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Plan development</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8.4</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP6</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Business Continuity Plan</Text>
                    </View>
                </View>

                {/* Row 7 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Awareness and training</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clauses 7.2–7.3</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP7</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Awareness & Training Materials</Text>
                    </View>
                </View>

                {/* Row 8 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Exercising and maintenance</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clauses 8.5–8.6, 10</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP8</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Tabletop Scenario Creation Tool</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}After-action Report</Text>
                    </View>
                </View>

                {/* Row 9 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>Crisis communications</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 7.4 and 8.4.3</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP9</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Crisis Communications Plan (included within the Crisis Management Plan)</Text>
                    </View>
                </View>

                {/* Row 10 */}
                <View style={styles.tableRow}>
                    <View style={col.col1}>
                        <Text style={styles.tableCellBold}>External coordination</Text>
                    </View>
                    <View style={col.col2}>
                        <Text style={styles.tableCell}>Clause 8</Text>
                    </View>
                    <View style={col.col3}>
                        <Text style={styles.tableCell}>PP10</Text>
                    </View>
                    <View style={col.col4}>
                        <Text style={styles.smallBullet}>{bulletPoint}Identification of Emergency Services</Text>
                        <Text style={styles.smallBullet}>{bulletPoint}External Coordination Plan (included within the Crisis Management Plan)</Text>
                    </View>
                </View>
            </View>

        </BaseDocument>
    );
}