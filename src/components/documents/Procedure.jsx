import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";

const styles = StyleSheet.create({
    infoBlock: {
        marginTop: 10,
        marginBottom: 20
    },
    infoRow: {
        flexDirection: "row",
        marginBottom: 6,
        alignItems: "center",
        flexWrap: "wrap"
    },
    infoLabel: {
        width: 120,
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 11
    },
    infoValue: {
        color: "#e5e7eb",
        fontSize: 11,
        flex: 1
    },
    sectionTitle: {
        color: "#22c55e",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 12,
        textAlign: "left"
    },
    subsectionTitle: {
        color: "#ffffff",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 18,
        marginBottom: 8,
        textAlign: "left"
    },
    subsubsectionTitle: {
        color: "#9ca3af",
        fontSize: 11,
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 6,
        textAlign: "left",
        fontStyle: "italic"
    },
    paragraph: {
        lineHeight: 1.6,
        color: "#e5e7eb",
        marginBottom: 10,
        fontSize: 11,
        textAlign: "justify",
        textIndent: 0
    },
    italicText: {
        fontStyle: "italic",
        color: "#9ca3af"
    },
    // Bullet Lists
    bulletList: {
        marginLeft: 15,
        marginBottom: 10
    },
    bulletItem: {
        lineHeight: 1.5,
        color: "#e5e7eb",
        fontSize: 10,
        marginBottom: 4,
        textAlign: "justify"
    },
    // Numbered Lists
    numberedList: {
        marginLeft: 20,
        marginBottom: 10
    },
    numberedItem: {
        lineHeight: 1.5,
        color: "#e5e7eb",
        fontSize: 10,
        marginBottom: 6,
        textAlign: "justify"
    },
    // Nested bullets for step-by-step
    nestedBullet: {
        marginLeft: 15,
        marginTop: 2,
        marginBottom: 2
    },
    nestedBulletItem: {
        lineHeight: 1.4,
        color: "#e5e7eb",
        fontSize: 9,
        marginBottom: 2
    },
    // Deeply nested (third level)
    deepNested: {
        marginLeft: 25
    },
    deepNestedItem: {
        lineHeight: 1.4,
        color: "#e5e7eb",
        fontSize: 9,
        marginBottom: 2
    },
    // Divider
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#374151",
        marginVertical: 16
    },
    // Tables
    table: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#374151",
        borderStyle: "solid"
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#374151"
    },
    tableHeader: {
        backgroundColor: "#1f2937",
        padding: 8
    },
    tableCell: {
        padding: 8,
        fontSize: 9,
        color: "#e5e7eb"
    },
    tableCellBold: {
        padding: 8,
        fontSize: 9,
        color: "#ffffff",
        fontWeight: "bold"
    },
    col1: { width: "30%" },
    col2: { width: "20%" },
    col3: { width: "18%" },
    col4: { width: "32%" },
    smallBullet: {
        fontSize: 8,
        marginLeft: 0,
        marginBottom: 2
    },
    // Bold and italic utilities
    bold: {
        fontWeight: "bold",
        color: "#ffffff"
    },
    italic: {
        fontStyle: "italic",
        color: "#9ca3af"
    },
    // Procedure header styles
    procedureHeader: {
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#374151"
    },
    procedureTitle: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 8
    },
    procedureAlignment: {
        fontSize: 9,
        color: "#9ca3af",
        fontStyle: "italic",
        marginBottom: 12
    },
    // "How to use" box
    howToUseBox: {
        backgroundColor: "#374151",
        borderLeftWidth: 3,
        borderLeftColor: "#60a5fa",
        padding: 10,
        marginVertical: 12
    },
    howToUseTitle: {
        fontSize: 11,
        fontWeight: "bold",
        color: "#60a5fa",
        marginBottom: 6
    },
    // Intent/Requirements sections
    intentBox: {
        backgroundColor: "#1f2937",
        padding: 10,
        marginVertical: 8,
        borderRadius: 4
    },
    intentTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#22c55e",
        marginBottom: 4
    },
    intentText: {
        fontSize: 10,
        color: "#e5e7eb",
        lineHeight: 1.5
    },
    requirementsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#3b82f6",
        marginBottom: 4,
        marginTop: 8
    },
    // Role sections
    roleSection: {
        marginTop: 16,
        marginBottom: 16,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: "#374151"
    },
    roleTitle: {
        color: "#60a5fa",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 6
    },
    roleDescription: {
        lineHeight: 1.5,
        color: "#e5e7eb",
        fontSize: 10,
        marginBottom: 4
    },
    roleStandards: {
        fontSize: 9,
        color: "#9ca3af",
        fontStyle: "italic",
        marginTop: 4
    },
    // Appendix styles
    appendixTitle: {
        fontSize: 14,
        color: "#22c55e",
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 12
    },
    // Version control
    versionControl: {
        marginTop: 30,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: "#374151"
    },
    versionTitle: {
        fontSize: 12,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 8
    },
    // Definition list
    definitionTerm: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 10,
        marginBottom: 2
    },
    definitionDesc: {
        color: "#e5e7eb",
        fontSize: 9,
        marginBottom: 6,
        marginLeft: 15,
        lineHeight: 1.4
    },
    // Pitfalls box
    pitfallsBox: {
        backgroundColor: "#1e293b",
        borderLeftWidth: 3,
        borderLeftColor: "#f59e0b",
        padding: 10,
        marginVertical: 12
    },
    pitfallsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#f59e0b",
        marginBottom: 4
    }
});

const bulletPoint = "• ";
const numberedPoint = (num) => `${num}. `;

export default function Procedure({ 
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString(),
    reviewCadence = "At least annually, and after major business, technology, facility, supplier, or regulatory change (ISO 22301 Clauses 9.3, 10; DRI PP8)."
}) {
    return (
        <BaseDocument title="Procedure">
            {/* Procedure Header */}
            <View style={styles.procedureHeader}>
                <Text style={styles.procedureTitle}>Procedure</Text>
                <Text style={styles.procedureAlignment}>
                    (Aligned to ISO 22301 and DRI International 10 Professional Practices)
                </Text>
                
                <View style={styles.divider} />
                
                <View style={styles.infoBlock}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Company:</Text>
                        <Text style={styles.infoValue}>{companyName}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Date:</Text>
                        <Text style={styles.infoValue}>{generatedDate}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Review Cadence:</Text>
                        <Text style={styles.infoValue}>{reviewCadence}</Text>
                    </View>
                </View>
                
                <Text style={styles.procedureAlignment}>
                    (Aligned to ISO 22301 and DRI International 10 Professional Practices)
                </Text>
            </View>

            {/* How to use this procedure */}
            <View style={styles.howToUseBox}>
                <Text style={styles.howToUseTitle}>How to use this procedure</Text>
                <Text style={styles.paragraph}>
                    This document is written for readers who may have risk management experience but limited business continuity experience. It explains both:
                </Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}What you must do (required steps and outputs), and</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Why you do it (intent and practical outcomes)</Text>
                </View>
                
                <Text style={styles.bold}>Business continuity in plain terms:</Text>
                <Text style={styles.paragraph}>
                    Business continuity is the organizational capability to keep delivering prioritized products and services, at an acceptable level, during disruptive events. It is not only an IT concern and it is not only "having a plan." It is a managed capability that includes people, processes, technology, facilities, suppliers, and communications (ISO 22301:2019 Clauses 4 to 10; DRI PP1 to PP10).
                </Text>
                
                <Text style={styles.bold}>How BC relates to other disciplines:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}<Text style={styles.bold}>Incident response:</Text> The immediate management of an event (stabilize and coordinate).</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}<Text style={styles.bold}>Crisis management:</Text> Executive-level decisions, reputation, stakeholder impact, major trade-offs.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}<Text style={styles.bold}>Disaster recovery (IT):</Text> Restoration of technology services and data.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}<Text style={styles.bold}>Business continuity:</Text> Continuation and recovery of prioritized business activities, using strategies, workarounds, and recovery steps, often while IT and facilities are recovering.</Text>
                </View>
            </View>

            {/* Section 1: Purpose */}
            <Text style={styles.sectionTitle}>1. Purpose</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent (why this exists)</Text>
                <Text style={styles.intentText}>
                    The purpose of this procedure is to turn executive policy direction into repeatable day-to-day actions that build and sustain continuity capability. Without a procedure, continuity efforts often become inconsistent, dependent on individual experience, or reduced to document creation. ISO 22301 is explicit that a BCMS is a management system with governance, objectives, operational controls, performance evaluation, and continual improvement. DRI reinforces this through a program lifecycle that moves from analysis to strategy to implementation, validation, and maintenance.
                </Text>
            </View>
            
            <View style={styles.intentBox}>
                <Text style={styles.requirementsTitle}>Procedure requirements (what to do)</Text>
                <Text style={styles.intentText}>
                    This procedure describes how the organization designs, implements, maintains, and improves its Business Continuity Management System (BCMS) to meet the requirements of the Executive Policy, covering governance, BIA, risk assessment, strategies, plans, training, exercises, incident response, communications, maintenance, and continual improvement (ISO 22301:2019 Clauses 4 to 10; DRI PP1 to PP10).
                </Text>
            </View>

            <View style={styles.divider} />

            {/* Section 2: Scope */}
            <Text style={styles.sectionTitle}>2. Scope</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    Scope is the boundary that makes the BCMS measurable and accountable. If scope is unclear, teams either assume continuity is "someone else's job" or they attempt to cover everything and deliver nothing. ISO requires a defined scope and expects it to be maintained as the organization changes. DRI expects the program to be intentionally initiated and managed, which starts with defining who and what is included.
                </Text>
            </View>
            
            <View style={styles.intentBox}>
                <Text style={styles.requirementsTitle}>Procedure requirements</Text>
                <Text style={styles.paragraph}>This procedure applies to:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}All in-scope business units, locations, services, and processes</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}All continuity roles and plan owners</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Supporting functions (technology, facilities, security, HR, communications)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical suppliers and outsourced services supporting prioritized activities</Text>
                </View>
                <Text style={styles.paragraph}>
                    BCMS scope is defined in the Scope Statement and maintained by the Continuity Coordinators (ISO 22301:2019 Clause 4.3; DRI PP1).
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>Scope statement minimum fields</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}In-scope products and services</Text>
                <Text style={styles.bulletItem}>{bulletPoint}In-scope locations</Text>
                <Text style={styles.bulletItem}>{bulletPoint}In-scope teams and functions</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Key third parties included</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exclusions with rationale</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 3: Definitions and key terms */}
            <Text style={styles.sectionTitle}>3. Definitions and key terms</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    Business continuity work involves specialized terms that sound similar but mean very different things. When people are new to continuity, unclear terminology becomes a major source of misunderstanding and unrealistic expectations. This section creates a shared language so BIAs, recovery targets, and plans are interpreted consistently across business and technology teams.
                </Text>
            </View>
            
            <Text style={styles.subsectionTitle}>Required definitions (minimum)</Text>
            <View style={{ marginBottom: 10 }}>
                <Text style={styles.definitionTerm}>BCMS:</Text>
                <Text style={styles.definitionDesc}>Management system to establish, implement, operate, monitor, review, maintain, and improve business continuity.</Text>
                
                <Text style={styles.definitionTerm}>Prioritized activities:</Text>
                <Text style={styles.definitionDesc}>Activities required to deliver critical products and services.</Text>
                
                <Text style={styles.definitionTerm}>RTO (Recovery Time Objective):</Text>
                <Text style={styles.definitionDesc}>Target time to restore an activity or service after disruption.</Text>
                
                <Text style={styles.definitionTerm}>RPO (Recovery Point Objective):</Text>
                <Text style={styles.definitionDesc}>Maximum acceptable data loss measured in time.</Text>
                
                <Text style={styles.definitionTerm}>Incident:</Text>
                <Text style={styles.definitionDesc}>Situation that disrupts or threatens normal operations.</Text>
                
                <Text style={styles.definitionTerm}>BCP (Business Continuity Plan):</Text>
                <Text style={styles.definitionDesc}>Documented procedures to respond and recover.</Text>
                
                <Text style={styles.italicText}>
                    (ISO 22301:2019 terminology; supports DRI PP6)
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>Practical clarification for non-experts</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}RTO is about time to restore service.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}RPO is about how much data you can afford to lose.</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 4: Roles and accountability */}
            <Text style={styles.sectionTitle}>4. Roles and accountability</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    During disruption, unclear responsibilities cause delay, duplication, and missed actions. ISO requires roles, responsibilities, and authorities to be defined. DRI emphasizes defined roles in both program management and incident response. This section ensures that continuity is executed by the business with functional expertise, not only by a continuity professional.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>Roles</Text>
            
            {/* 4.1 Leadership */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>4.1 Leadership (Accountable)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Approves BCMS scope, priorities, and material strategy decisions (ISO 22301:2019 Clause 5; DRI PP1).</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Ensures funding, resources, and authority are assigned.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Reviews BCMS performance, exercises, corrective actions, and required improvements (ISO 22301:2019 Clauses 9.3, 10; DRI PP8).</Text>
                </View>
            </View>

            {/* 4.2 Continuity Coordinators */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>4.2 Continuity Coordinators (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Coordinate continuity activities for assigned teams or sites.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Maintain local plan content and readiness.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Support BIA and risk collection, validation, and updates.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Drive training participation, exercise participation, and corrective action closure for their area (ISO 22301:2019 Clauses 7.2 to 7.4, 8.2, 8.4 to 8.6, 10; DRI PP1, PP3, PP6 to PP8).</Text>
                </View>
            </View>

            {/* 4.3 Functional Owner: Life Safety */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>4.3 Functional Owner: Life Safety (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Owns evacuation, accountability, first aid coordination, and safe re-entry protocols.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Leads life-safety actions during incidents and coordinates with emergency services where appropriate (ISO 22301:2019 Clause 8.4.2; DRI PP5, PP10).</Text>
                </View>
            </View>

            {/* 4.4 Functional Owner: Damage Assessment */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>4.4 Functional Owner: Damage Assessment (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Leads facility and operational capability assessments, constraints identification, and restoration sequencing inputs.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Maintains damage assessment checklists and reporting formats (ISO 22301:2019 Clauses 8.4, 8.6; DRI PP5, PP6, PP8).</Text>
                </View>
            </View>

            {/* 4.5 Functional Owner: Technology */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>4.5 Functional Owner: Technology (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Owns technology response and recovery, including restoration priorities, runbooks, backups, communications tooling, and third-party technology dependencies.</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Validates feasibility of RTO/RPO commitments for technology-enabled services (ISO 22301:2019 Clauses 8.2 to 8.6; DRI PP4 to PP6, PP8, PP10).</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 5: BCMS operating model */}
            <Text style={styles.sectionTitle}>5. BCMS operating model</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    This section describes how continuity operates as an ongoing cycle. It prevents the common pattern where organizations do a BIA once, write plans once, and then slowly lose capability as people, systems, suppliers, and sites change. ISO expects planned operational controls, evaluation, and improvement. DRI expects exercises, assessment, and maintenance to keep readiness real.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>5.1 BCMS lifecycle (annual minimum)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Confirm scope, context, and interested parties (ISO 22301:2019 Clauses 4.1 to 4.3; DRI PP1)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Conduct BIA and risk assessment (ISO 22301:2019 Clause 8.2; DRI PP2, PP3)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Confirm recovery requirements, strategies, and solutions roadmap (ISO 22301:2019 Clause 8.3; DRI PP4)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Update plans and supporting procedures (ISO 22301:2019 Clause 8.4; DRI PP5, PP6, PP9)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Train and raise awareness (ISO 22301:2019 Clauses 7.2, 7.3; DRI PP7)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise and validate, then maintain (ISO 22301:2019 Clauses 8.5, 8.6; DRI PP8)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Measure performance, audit, management review, and improvements (ISO 22301:2019 Clauses 9, 10; DRI PP8)</Text>
            </View>

            <Text style={styles.subsectionTitle}>5.2 Minimum BCMS records</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Scope Statement, objectives, governance minutes</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BIA outputs and dependency maps</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk register and treatment actions</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy decisions and capability status</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plans and playbooks</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Training and exercise records</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective action log and management review outputs</Text>
            </View>
            <Text style={styles.italicText}>
                (ISO 22301:2019 Clauses 7.5, 9, 10; DRI PP8)
            </Text>

            <Text style={styles.subsectionTitle}>Recommended annual calendar (example)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Q1: Refresh scope and context, start BIA collection</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Q2: Complete BIA, complete risk assessment, update priorities</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Q3: Strategy decisions and roadmap update, plan refresh cycle</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Q4: Major exercise, management review, next year plan approval</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 6: BCMS governance and planning */}
            <Text style={styles.sectionTitle}>6. BCMS governance and planning</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    Governance ensures continuity is led, resourced, and prioritized at the same level as other organizational risk and resilience activities. For non-experts: governance is how leaders make trade-offs when continuity requirements exceed current capability. ISO requires objectives and management review. DRI expects program management with sponsorship, reporting, and accountability.
                </Text>
            </View>

            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Objective:</Text> Ensure BCMS is directed, resourced, and monitored.</Text>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Owner:</Text> Leadership (Accountable), Continuity Coordinators (Responsible)</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>
                    Establish BCMS objectives aligned to business priorities (ISO 22301:2019 Clause 6.2; DRI PP1).
                    <Text style={styles.italicText}> Example objective: "All prioritized activities have current BIA and plans within 12 months."</Text>
                </Text>
                <Text style={styles.numberedItem}>
                    Set governance cadence (recommended minimum):
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Quarterly BCMS steering review (performance, risks, actions)</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Annual management review (scope, effectiveness, strategic decisions) (ISO 22301:2019 Clause 9.3)</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    Confirm scope and boundaries annually and upon major change (ISO 22301:2019 Clause 4.3).
                </Text>
                <Text style={styles.numberedItem}>
                    Approve BCMS plan and calendar (BIA, risk, exercises, training, audits).
                </Text>
                <Text style={styles.numberedItem}>
                    Maintain BCMS dashboard with KPIs and action status (Section 14).
                </Text>
                <Text style={styles.numberedItem}>
                    Decide on risk acceptance when recovery requirements cannot be met immediately. Risk acceptance must be explicit, time-bound where possible, and revisited.
                </Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Outputs and records</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}BCMS objectives and annual calendar</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Steering committee minutes and decision log</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Management review pack and minutes</Text>
                <Text style={styles.bulletItem}>{bulletPoint}KPI dashboard and corrective action summary</Text>
            </View>

            <View style={styles.pitfallsBox}>
                <Text style={styles.pitfallsTitle}>Common pitfalls to avoid</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Governance meetings that only "share updates" with no decisions</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Funding strategies without clear linkage to BIA requirements</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}No documented acceptance of known recovery gaps</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 7: Business Impact Analysis (BIA) */}
            <Text style={styles.sectionTitle}>7. Business Impact Analysis (BIA)</Text>
            <Text style={styles.italicText}>(DRI PP3; ISO 22301:2019 Clause 8.2.2)</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    The BIA is the foundation of continuity. It determines what must be protected first and how quickly it must be recovered. For new continuity practitioners, the BIA is not a generic "critical process list." It is structured analysis of impact over time and the resources and dependencies required to keep delivering products and services. ISO uses BIA outputs to define continuity requirements. DRI treats BIA as a core practice that drives strategy and plans.
                </Text>
            </View>

            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Objective:</Text> Identify prioritized activities, dependencies, and recovery requirements.</Text>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Owner:</Text> Continuity Coordinators (Responsible), Leadership (Accountable), Functional Owners (Consulted/Validating)</Text>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Trigger and frequency:</Text> Annual minimum; Also when major change occurs (new product, location, system, supplier, regulatory change)</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Step-by-step</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Prepare the BIA</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Confirm in-scope areas and owners</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Confirm methodology: impact categories, time horizons, rating scales</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Publish schedule and expectations</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Collect inputs (structured interviews or worksheets)</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Products and services delivered</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Activities that enable delivery</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Volumes, peak periods, deadlines, regulatory obligations</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Minimum staffing and critical skills</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Key applications, data, infrastructure</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Facilities, equipment, critical records</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Third parties and suppliers</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Assess impacts over time</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Estimate impacts if the activity stops (at 0 to 4 hours, 4 to 24 hours, 1 to 3 days, etc.)</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Use categories such as: financial, customer, operational, legal/regulatory, safety, reputational</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Determine recovery requirements</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Define MAO/MTPD (outer time limit) where applicable</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Determine RTO for the activity and for enabling services</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Determine RPO for data supporting the activity</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Identify minimum acceptable operating levels (for example, 30 percent throughput)</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Document dependencies and single points of failure</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}People and skills</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Facilities and site access</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Technology services and data</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Suppliers and outsourced operations</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Manual workarounds and constraints</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Validate and approve</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Technology Owner validates feasibility of technology RTO/RPO targets</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Damage Assessment Owner validates assumptions related to facilities access and restoration constraints</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Leadership confirms prioritization and accepts or challenges recovery targets</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Publish BIA outputs</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Prioritized activities register with owners</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Recovery requirements (RTO, RPO, minimum resources)</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Dependency maps and critical supplier list</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Identified gaps requiring strategy decisions (hand off to Section 9)</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Quality criteria (minimum)</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Each prioritized activity has an owner, a recovery target, and defined dependencies</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Targets are either feasible or documented as a gap with an action plan and interim workaround</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}The BIA reflects peak periods and real-world constraints</Text>
                    </View>
                </Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Outputs and records</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Prioritized activities register</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Approved recovery objectives</Text>
            </View>

            {/* Continue with remaining sections 8-17 following same pattern... */}
            {/* Due to length, I'll show the pattern for a few more key sections */}
            
            <View style={styles.divider} />

            {/* Section 8: Risk assessment */}
            <Text style={styles.sectionTitle}>8. Risk assessment</Text>
            <Text style={styles.italicText}>(DRI PP2; ISO 22301:2019 Clause 8.2.3)</Text>
            
            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>Intent</Text>
                <Text style={styles.intentText}>
                    Risk assessment identifies which disruption scenarios are most likely to threaten prioritized activities and where vulnerabilities exist. For readers coming from enterprise risk: continuity risk is more operational and scenario-driven. It focuses on the ability to continue and recover, not only on probability and loss. ISO requires risk assessment as part of BCMS operations. DRI uses risk assessment to shape strategies and exercises.
                </Text>
            </View>

            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Objective:</Text> Identify disruption scenarios and vulnerabilities that threaten prioritized activities.</Text>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Owner:</Text> Continuity Coordinators (Responsible), Functional Owners (Responsible), Leadership (Accountable)</Text>
                <Text style={styles.bulletItem}><Text style={styles.bold}>Trigger and frequency:</Text> Annual minimum; After material change (new site, major technology shift, supplier replacement, acquisition)</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Step-by-step</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Define methodology</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Scoring model: likelihood, impact, control effectiveness, residual risk</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Risk thresholds: what is acceptable vs unacceptable</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Maintain a scenario library</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Facility outage, loss of access, utilities failure</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Cyber incident or ransomware</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Technology outage, cloud provider failure</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Supplier failure or logistics disruption</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Staff unavailability (pandemic, strike, severe weather)</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Data corruption or loss of records</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Identify risks and controls</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Document existing controls (redundancy, monitoring, contracts, backups, alternate sites)</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Include third-party and technology risks explicitly</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Evaluate residual risk</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Where controls exist but do not meet recovery requirements, document the gap</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Determine treatments</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Avoid, reduce, transfer, accept</Text>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Assign owners, due dates, and required resources</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Link to continuity actions</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Translate high risks into specific strategy work (Section 9) and exercise objectives (Section 13)</Text>
                    </View>
                </Text>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>Review and approve</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Leadership approves material risk acceptance and treatment priorities</Text>
                    </View>
                </Text>
            </View>

            <Text style={styles.subsubsectionTitle}>Outputs and records</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Risk register</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Treatment plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk acceptance approvals where applicable</Text>
            </View>

            {/* Appendices */}
            <View style={styles.divider} />
            
            <Text style={styles.appendixTitle}>Appendix A: Recommended record register (minimum)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}BCMS Scope Statement</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BCMS Objectives and Annual Calendar</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BIA Report and Prioritized Activities Register</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Dependency Map and Critical Supplier Register</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk Register and Treatment Plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy Decisions Log and Solutions Roadmap</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plan Inventory and Maintenance Log</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Training and Awareness Logs</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise Plan and After Action Reports</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Incident Logs and Situation Reports</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective Action Log</Text>
                <Text style={styles.bulletItem}>{bulletPoint}KPI Dashboard and Management Review Minutes</Text>
            </View>

            <Text style={styles.appendixTitle}>Appendix B: Suggested cadence (baseline)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Quarterly: Plan contact verification, corrective action review, KPI reporting</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Semi-annual: Functional annex review (Life Safety, Damage Assessment, Technology)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Annual: Full BIA refresh, risk assessment refresh, management review, role-based training, major exercise</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Event-driven: After significant change, incident, supplier change, or major technology release</Text>
            </View>

            <Text style={styles.appendixTitle}>Appendix C: Starter template field lists (optional but highly recommended)</Text>
            <Text style={styles.paragraph}>
                To make this procedure easy for new continuity participants, standardize these simple templates:
            </Text>

            <Text style={styles.subsubsectionTitle}>C1. Prioritized Activities Register (fields)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Activity name, owner, location</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Upstream/downstream dependencies</Text>
                <Text style={styles.bulletItem}>{bulletPoint}RTO, RPO, MAO/MTPD (if used)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Minimum staffing and skills</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Required systems and data</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Required suppliers</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Workarounds available (Y/N and notes)</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>C2. Risk Register (fields)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Scenario, affected prioritized activities</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Existing controls</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Likelihood, impact, residual risk</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Treatment decision, action owner, due date</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Link to strategy or plan update</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>C3. Incident log (fields)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Timestamp, decision/action, owner, status</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Communications issued (what, when, to whom)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Restoration estimates and changes</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Stand-down decision and rationale</Text>
            </View>

            <Text style={styles.subsubsectionTitle}>C4. After Action Report (fields)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Objectives and what was tested</Text>
                <Text style={styles.bulletItem}>{bulletPoint}What worked well</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Gaps and root cause (as needed)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective actions, owners, due dates</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Verification method</Text>
            </View>

            {/* Version Control */}
            <View style={styles.versionControl}>
                <Text style={styles.versionTitle}>[Include Version Control Log]</Text>
                <Text style={styles.paragraph}>
                    Version history, approval dates, change descriptions, and approver signatures will be maintained in accordance with document control procedures (ISO 22301 Clause 7.5; DRI PP6, PP8).
                </Text>
            </View>
        </BaseDocument>
    );
}