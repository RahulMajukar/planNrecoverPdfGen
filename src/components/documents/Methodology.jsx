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
    // Nested bullets
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
    col2: { width: "25%" },
    col3: { width: "45%" },
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
    // Methodology header styles
    methodologyHeader: {
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#374151"
    },
    methodologyTitle: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 8
    },
    methodologyAlignment: {
        fontSize: 9,
        color: "#9ca3af",
        fontStyle: "italic",
        marginBottom: 12
    },
    // Guiding principles box
    principlesBox: {
        backgroundColor: "#374151",
        borderLeftWidth: 3,
        borderLeftColor: "#60a5fa",
        padding: 10,
        marginVertical: 12
    },
    principlesTitle: {
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
    // Quality checks box
    qualityBox: {
        backgroundColor: "#1e293b",
        borderLeftWidth: 3,
        borderLeftColor: "#22c55e",
        padding: 10,
        marginVertical: 12
    },
    qualityTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#22c55e",
        marginBottom: 4
    },
    // Outputs box
    outputsBox: {
        backgroundColor: "#1e293b",
        borderLeftWidth: 3,
        borderLeftColor: "#3b82f6",
        padding: 10,
        marginVertical: 12
    },
    outputsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#3b82f6",
        marginBottom: 4
    }
});

const bulletPoint = "• ";
const numberedPoint = (num) => `${num}. `;

export default function Methodology({ 
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString()
}) {
    return (
        <BaseDocument title="Methodology">
            {/* Methodology Header */}
            <View style={styles.methodologyHeader}>
                <Text style={styles.methodologyTitle}>Methodology</Text>
                <Text style={styles.methodologyAlignment}>
                    (Aligned to ISO 22301 and DRI International 10 Professional Practices)
                </Text>
                
                <View style={styles.divider} />
            </View>

            {/* Section 1: Purpose and intent */}
            <Text style={styles.sectionTitle}>1. Purpose and intent</Text>
            <Text style={styles.paragraph}>
                This Methodology defines the standardized approach used to design, implement, and sustain the Business Continuity Management System (BCMS). The Methodology explains identification of priority activities, determination of recovery requirements, selection of strategies, development of plans, validation of readiness, and continual improvement. The Methodology is written to support consistent outputs across teams and sites.
            </Text>
            <Text style={styles.paragraph}>
                This Methodology supports:
            </Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}ISO 22301 Business Continuity Management System requirements (Clauses 4–10), with emphasis on operational planning and control (Clause 8), performance evaluation (Clause 9), and improvement (Clause 10).</Text>
                <Text style={styles.bulletItem}>{bulletPoint}DRI Professional Practices (PP1–PP10), providing practical program disciplines behind continuity capability.</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 2: Guiding principles */}
            <Text style={styles.sectionTitle}>2. Guiding principles</Text>
            
            <View style={styles.principlesBox}>
                <Text style={styles.principlesTitle}>Guiding principles</Text>
                
                <View style={styles.numberedList}>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>{numberedPoint(1)}Business-led, enterprise-enabled</Text>
                        <Text style={styles.paragraph}>Priorities and recovery requirements owned by business leadership. Enabling functions provide feasibility validation and recovery capability.</Text>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>{numberedPoint(2)}Impact and time drive priorities</Text>
                        <Text style={styles.paragraph}>Prioritization based on impact over time, not organizational hierarchy.</Text>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>{numberedPoint(3)}Strategies create capability, plans enable execution</Text>
                        <Text style={styles.paragraph}>Strategies and solutions selected to meet defined recovery requirements. Plans translate capability into executable actions.</Text>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>{numberedPoint(4)}Simplicity and usability</Text>
                        <Text style={styles.paragraph}>Plans and tools designed for use under stress with limited information and constrained access to systems and facilities.</Text>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>{numberedPoint(5)}Evidence-based and continually improving</Text>
                        <Text style={styles.paragraph}>Exercises, incidents, and audits produce measurable improvements tracked to closure.</Text>
                    </Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 3: Overview */}
            <Text style={styles.sectionTitle}>3. Overview</Text>
            <Text style={styles.paragraph}>
                The BCMS lifecycle executed at least annually and updated when major changes occur:
            </Text>
            
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>{numberedPoint(1)}Program initiation and governance (DRI PP1; ISO Clauses 4–6)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(2)}Risk assessment (DRI PP2; ISO 8.2.3)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(3)}Business impact analysis (DRI PP3; ISO 8.2.2)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(4)}Strategies and solutions (DRI PP4; ISO 8.3)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(5)}Incident response integration (DRI PP5; ISO 8.4.2)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(6)}Plan development and implementation (DRI PP6; ISO 8.4)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(7)}Awareness and training programs (DRI PP7; ISO 7.2–7.3)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(8)}Exercising, evaluation, and maintenance (DRI PP8; ISO 8.5–8.6)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(9)}Crisis communications (DRI PP9; ISO 7.4 and 8.4.3)</Text>
                <Text style={styles.numberedItem}>{numberedPoint(10)}External coordination (DRI PP10; ISO Clause 8 context)</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 4: Roles and decision rights */}
            <Text style={styles.sectionTitle}>4. Roles and decision rights</Text>
            
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Leadership (Accountable)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Approval of scope, priorities, recovery requirements, and material strategy decisions</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Approval of risk acceptance when requirements cannot be met within planned timeframes</Text>
                </View>
            </View>

            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>BCMS Manager (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Ownership of this Methodology and associated templates</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Assurance of consistency, quality, and reporting across the BCMS</Text>
                </View>
            </View>

            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Continuity Coordinators (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Collection and maintenance of BIA and risk data for assigned areas</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Maintenance of plan content and readiness evidence</Text>
                </View>
            </View>

            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner: Life Safety (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Ownership of evacuation, accountability, re-entry protocols, and life-safety drills</Text>
                </View>
            </View>

            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner: Damage Assessment (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Ownership of damage assessment processes, checklists, and facility recovery constraint inputs</Text>
                </View>
            </View>

            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner: Technology (Responsible)</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Ownership of technology recovery methods, runbooks, and validation of RTO/RPO feasibility</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 5: Scoping and context */}
            <Text style={styles.sectionTitle}>5. Scoping and context</Text>
            <Text style={styles.italicText}>(ISO 22301 Clauses 4.1–4.3; DRI PP1)</Text>

            <Text style={styles.subsectionTitle}>5.1 Inputs</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Organizational strategy, products and services, operating model</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Legal, regulatory, and contractual requirements</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Site and technology footprint</Text>
                <Text style={styles.bulletItem}>{bulletPoint}External dependencies and supplier landscape</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Incident history, audit findings, and enterprise risk register items relevant to disruption and recoverability</Text>
            </View>

            <Text style={styles.subsectionTitle}>5.2 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Maintenance of the BCMS Scope Statement including in-scope products and services, sites, teams, key third parties, exclusions, and interfaces to other programs.</Text>
                <Text style={styles.numberedItem}>Identification of interested parties and continuity-related requirements (customers, regulators, employees, suppliers, owners).</Text>
                <Text style={styles.numberedItem}>Definition of BCMS objectives and the annual BCMS calendar.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>5.3 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Controlled BCMS Scope Statement</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}BCMS objectives</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}BCMS annual plan and calendar</Text>
                </View>
            </View>

            <View style={styles.qualityBox}>
                <Text style={styles.qualityTitle}>5.4 Quality checks</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Scope approval by Leadership and review at least annually</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Exclusions documented with rationale and risk consideration</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 6: Business Impact Analysis (BIA) */}
            <Text style={styles.sectionTitle}>6. Business Impact Analysis (BIA)</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 8.2.2; DRI PP3)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>6.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Determination of prioritized activities and supporting resources requiring recovery first, plus definition of recovery requirements including RTO, RPO, and minimum operating levels.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>6.2 BIA design decisions (standard)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Time horizons: 4 hours, 8 hours, 1 – 5 days, 2 weeks; 3 weeks; Greater than 3 weeks</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Impact categories: financial, operational, customer/service, legal/regulatory, safety, reputational</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Prioritization: prioritized activities register, with tiering optional (Tier Low/Medium/High)</Text>
            </View>

            <Text style={styles.subsectionTitle}>6.3 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Identification of products and services delivered by each business unit.</Text>
                <Text style={styles.numberedItem}>Identification of activities required to deliver each service.</Text>
                <Text style={styles.numberedItem}>Assessment of impact over time if activities stop, across each impact category.</Text>
                <Text style={styles.numberedItem}>Determination of MAO/MTPD where applicable.</Text>
                <Text style={styles.numberedItem}>Determination of RTO and RPO for activities and supporting systems/data.</Text>
                <Text style={styles.numberedItem}>Documentation of minimum staffing, critical skills, required applications/data, facilities/equipment, and third parties.</Text>
                <Text style={styles.numberedItem}>Identification of constraints and workarounds.</Text>
                <Text style={styles.numberedItem}>Feasibility validation by Functional Owner: Technology and Functional Owner: Damage Assessment.</Text>
                <Text style={styles.numberedItem}>Leadership approval and publication of BIA outputs.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>6.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Prioritized Activities Register</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Dependency map and critical supplier list</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Approved recovery requirements (RTO, RPO, minimum operating levels)</Text>
                </View>
            </View>

            <View style={styles.qualityBox}>
                <Text style={styles.qualityTitle}>6.5 Quality checks</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Owner, recovery target, and dependency list for each prioritized activity</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Recovery targets feasible or documented as gaps with actions</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 7: Risk assessment for disruption scenarios */}
            <Text style={styles.sectionTitle}>7. Risk assessment for disruption scenarios</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 8.2.3; DRI PP2)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>7.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Identification of disruption scenarios preventing delivery of prioritized activities, plus determination of vulnerabilities and control gaps affecting downtime and impact.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>7.2 Standard scenario library (minimum)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Loss of facility access (fire, flood, structural failure, hazardous material, security event)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Utility outage (power, water, telecommunications)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Technology outage (internal failure or provider outage)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Cyber incident (ransomware, data breach, identity compromise)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Supplier failure (single-source disruption)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Workforce unavailability (weather, illness, labor action)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Transportation/logistics disruption</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Loss of critical records or data corruption</Text>
            </View>

            <Text style={styles.subsectionTitle}>7.3 Risk scoring (recommended)</Text>
            <Text style={styles.paragraph}>Consistent scoring approach:</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Likelihood (1–5)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Impact severity (1–5) using BIA-informed impacts</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Control strength (1–5)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Residual risk rating and action thresholds</Text>
            </View>

            <Text style={styles.subsectionTitle}>7.4 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Scenario identification for each prioritized activity.</Text>
                <Text style={styles.numberedItem}>Documentation of existing controls and recovery capabilities.</Text>
                <Text style={styles.numberedItem}>Residual risk rating and identification of unacceptable risks.</Text>
                <Text style={styles.numberedItem}>Treatment decisions: avoid, reduce, transfer, accept.</Text>
                <Text style={styles.numberedItem}>Assignment of action owners and due dates; linkage to strategies and plans.</Text>
                <Text style={styles.numberedItem}>Leadership approval for material risk acceptance.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>7.5 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Risk Register</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Risk treatment plan and risk acceptance records</Text>
                </View>
            </View>

            <View style={styles.qualityBox}>
                <Text style={styles.qualityTitle}>7.6 Quality checks</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Treatment or explicit acceptance for high risks</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Linkage of risks to continuity improvements and exercise objectives</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 8: Strategy and solution selection */}
            <Text style={styles.sectionTitle}>8. Strategy and solution selection</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 8.3; DRI PP4)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>8.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Selection of strategies and solutions enabling recovery requirements for prioritized activities.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>8.2 Strategy domains</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}People: cross-training, surge staffing, remote work enablement, role alternates</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Process: manual workarounds, alternate workflows, prioritization rules</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Technology: backups, resilience, alternate systems, recovery runbooks, access methods</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Facilities: alternate work areas, relocation, spare equipment, access and re-entry procedures</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Suppliers: alternate vendors, safety stock, SLAs, notification protocols</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Information: critical records protection and access</Text>
            </View>

            <Text style={styles.subsectionTitle}>8.3 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Gap analysis between current capability and recovery requirements.</Text>
                <Text style={styles.numberedItem}>Definition of strategy options with evaluation of feasibility, cost, and time-to-implement.</Text>
                <Text style={styles.numberedItem}>Selection of strategies and Leadership approval for material decisions and funding.</Text>
                <Text style={styles.numberedItem}>Maintenance of solutions roadmap with owners, milestones, and validation methods.</Text>
                <Text style={styles.numberedItem}>Incorporation of strategies into plans and exercises.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>8.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Strategy decisions log</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Solutions roadmap and implementation tracking</Text>
                </View>
            </View>

            <View style={styles.qualityBox}>
                <Text style={styles.qualityTitle}>8.5 Quality checks</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Demonstrated support of defined RTO/RPO targets</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Owners, dates, and test/validation methods for roadmap items</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 9: Plan architecture and development */}
            <Text style={styles.sectionTitle}>9. Plan architecture and development</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 8.4; DRI PP6)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>9.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Creation of actionable, role-based plans coordinating response and recovery activities.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>9.2 Plan architecture (recommended)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Incident Response Playbook (structure, activation, roles) (DRI PP5)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Life Safety Plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Damage Assessment Plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Technology Recovery Plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Business Unit / Process BCPs</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Crisis Communications Plan (DRI PP9)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Supplier and External Coordination Annex (DRI PP10)</Text>
            </View>

            <Text style={styles.subsectionTitle}>9.3 Plan content standard (minimum)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Purpose/scope/assumptions</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Activation criteria and authority</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Roles and contacts (including alternates)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Immediate actions (first 0–60 minutes)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Continuity actions (workarounds, minimum operations)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Recovery actions (restore by priority)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Dependencies and required resources</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Communications steps and approvals</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Stand-down and transition</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Checklists/forms/logs</Text>
            </View>

            <Text style={styles.subsectionTitle}>9.4 Plan writing standards</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Checklists and short action statements</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Assumptions including loss of systems and loss of building access</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Decision points and escalation triggers</Text>
                <Text style={styles.bulletItem}>{bulletPoint}References to offline access locations and methods</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>9.5 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Controlled plan set and plan inventory</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Plan maintenance log and version history</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 10: Incident response integration and activation */}
            <Text style={styles.sectionTitle}>10. Incident response integration and activation</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 8.4.2; DRI PP5)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>10.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Provision of consistent activation and coordination across life safety, damage assessment, technology recovery, and continuity actions.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>10.2 Activation model</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Activation triggers tied to life safety risk, disruption of prioritized services, loss of access, major technology outage, and need for coordinated communications.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Incident levels defined (for example Level 1–3) with expected response roles and cadence.</Text>
            </View>

            <Text style={styles.subsectionTitle}>10.3 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Incident detection and reporting.</Text>
                <Text style={styles.numberedItem}>Activation confirmation and role assignment.</Text>
                <Text style={styles.numberedItem}>Establishment of incident objectives and cadence.</Text>
                <Text style={styles.numberedItem}>Maintenance of incident log and action tracker.</Text>
                <Text style={styles.numberedItem}>Publication of situation reports and restoration estimates.</Text>
                <Text style={styles.numberedItem}>Stand-down and transition to normal operations with after-action review initiation.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>10.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Incident log, situation reports, action tracker</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Lessons learned entries feeding corrective action process</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 11: Crisis communications */}
            <Text style={styles.sectionTitle}>11. Crisis communications</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 7.4 and 8.4.3; DRI PP9)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>11.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Assurance of timely, accurate, coordinated communications appropriate for each audience during disruptions.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>11.2 Communications design</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Audience tiers: internal, customers, suppliers, regulators, media</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Ownership: drafting, approvals, delivery roles</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Channels: email, SMS, collaboration tools, status page, hotline</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Templates: initial notification, status update, resolution update, post-incident update</Text>
            </View>

            <Text style={styles.subsectionTitle}>11.3 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Determination of communication triggers and required approvals.</Text>
                <Text style={styles.numberedItem}>Use of minimum message content: facts, impacts, actions, recipient instructions, next update time.</Text>
                <Text style={styles.numberedItem}>Maintenance of communications log and approvals evidence.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>11.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Communications playbook, templates, distribution lists</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Communications log and approvals evidence</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 12: Training and awareness */}
            <Text style={styles.sectionTitle}>12. Training and awareness</Text>
            <Text style={styles.italicText}>(ISO 22301 Clauses 7.2–7.3; DRI PP7)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>12.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Assurance of continuity competence and awareness for assigned roles.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>12.2 Training model</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Role-based training for Leadership, Continuity Coordinators, Functional Owners</Text>
                <Text style={styles.bulletItem}>{bulletPoint}General staff awareness and onboarding training</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Competence evidence through exercises and drills</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>12.3 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Training matrix by role</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Training completion logs and competence evidence</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 13: Exercising, evaluation, and maintenance */}
            <Text style={styles.sectionTitle}>13. Exercising, evaluation, and maintenance</Text>
            <Text style={styles.italicText}>(ISO 22301 Clauses 8.5–8.6; DRI PP8)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>13.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Validation of plans and strategies, improvement of team performance, and currency of documentation.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>13.2 Exercise types and intent</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Tabletop: validation of roles and decisions</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Walkthrough: validation of plan steps and dependencies</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Drill: validation of a specific capability (call tree, evacuation, restore test)</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Integrated: validation of cross-functional coordination under stress</Text>
            </View>

            <Text style={styles.subsectionTitle}>13.3 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Development of annual exercise plan based on risk and change.</Text>
                <Text style={styles.numberedItem}>Definition of objectives and success criteria.</Text>
                <Text style={styles.numberedItem}>Exercise execution, capture of observations, issuance of after-action report.</Text>
                <Text style={styles.numberedItem}>Tracking of corrective actions to closure and plan updates.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>13.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Exercise plan, attendance, after-action reports</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Corrective action updates and plan updates</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 14: Performance measurement and management review */}
            <Text style={styles.sectionTitle}>14. Performance measurement and management review</Text>
            <Text style={styles.italicText}>(ISO 22301 Clauses 9.1–9.3; supports DRI PP8)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>14.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Measurement of BCMS effectiveness and improvement, enabling leadership decisions based on evidence.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>14.2 Standard KPIs (recommended)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}BIA coverage and currency</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plan coverage and currency</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Training completion by role</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise completion and outcomes</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective action closure timeliness</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Technology recovery test success rates</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Critical supplier coverage and validation status</Text>
            </View>

            <Text style={styles.subsectionTitle}>14.3 Management review inputs (minimum)</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}KPI trends</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Audit and exercise results</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Incident trends and lessons learned</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Scope and risk changes</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Resource adequacy</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Improvement decisions and priorities</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>14.4 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}KPI dashboard</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Management review minutes and decision log</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 15: Corrective action and continual improvement */}
            <Text style={styles.sectionTitle}>15. Corrective action and continual improvement</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 10; supports DRI PP8)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>15.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Conversion of observations into verified improvements reducing downtime, confusion, and impact.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>15.2 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Capture of issues from incidents, exercises, audits, and plan reviews.</Text>
                <Text style={styles.numberedItem}>Root cause analysis proportionate to severity.</Text>
                <Text style={styles.numberedItem}>Definition of corrective actions with owners and due dates.</Text>
                <Text style={styles.numberedItem}>Verification of effectiveness; updates to documentation and training.</Text>
                <Text style={styles.numberedItem}>Reporting of closure status to Leadership.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>15.3 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Corrective action log with closure evidence</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Updated plans, training, and strategies as needed</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 16: Document control and records management */}
            <Text style={styles.sectionTitle}>16. Document control and records management</Text>
            <Text style={styles.italicText}>(ISO 22301 Clause 7.5; supports DRI PP6 and PP8)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>16.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Assurance of accuracy, control, security, and accessibility of continuity documentation during disruptions.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>16.2 Standards</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Unique ID, version, owner, approval date, review date</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Role-based access controls</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Offline availability for critical roles</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Retention schedule alignment and confidentiality protections</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>16.3 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Document register and version history</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Access review logs (where applicable)</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Section 17: External dependencies and coordination */}
            <Text style={styles.sectionTitle}>17. External dependencies and coordination</Text>
            <Text style={styles.italicText}>(DRI PP10; supports ISO 22301 Clause 8 context)</Text>

            <View style={styles.intentBox}>
                <Text style={styles.intentTitle}>17.1 Purpose</Text>
                <Text style={styles.intentText}>
                    Reduction of recovery delays caused by suppliers, utilities, landlords, and outsourced services through explicit and validated expectations.
                </Text>
            </View>

            <Text style={styles.subsectionTitle}>17.2 Steps</Text>
            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>Identification of critical third parties from BIA dependency map.</Text>
                <Text style={styles.numberedItem}>Definition of continuity requirements: SLAs, RTO/RPO commitments, notification timeframes.</Text>
                <Text style={styles.numberedItem}>Periodic validation of supplier capabilities using evidence (tests, attestations, performance).</Text>
                <Text style={styles.numberedItem}>Maintenance of 24/7 contacts and escalation paths.</Text>
                <Text style={styles.numberedItem}>Coordination of joint exercises or incident protocols when feasible.</Text>
            </View>

            <View style={styles.outputsBox}>
                <Text style={styles.outputsTitle}>17.3 Outputs</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical supplier register</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Supplier continuity assessment records</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}External coordination annex and contact lists</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Appendix A: Standard deliverables and templates */}
            <Text style={styles.appendixTitle}>Appendix A: Standard deliverables and templates</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Scope Statement template</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BIA workbook and prioritized activities register</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk register and treatment plan</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy decisions log and solutions roadmap</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plan templates and plan inventory</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Incident log and situation report template</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Crisis communications templates and distribution lists</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise plan and after-action report template</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective action log</Text>
                <Text style={styles.bulletItem}>{bulletPoint}KPI dashboard and management review pack</Text>
            </View>

            {/* Appendix B: Methodology quality assurance checklist */}
            <Text style={styles.appendixTitle}>Appendix B: Methodology quality assurance checklist</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Scope approved and current</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BIA completed and approved within 12 months</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Recovery requirements validated or gaps documented</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk register current and linked to improvements</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy roadmap funded and tracked</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Plans current, accessible, and exercised</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Training and awareness completed by role</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercises completed and after-action items closed</Text>
                <Text style={styles.bulletItem}>{bulletPoint}KPIs reported and management review completed</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Corrective actions verified and improvements sustained</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Critical suppliers identified and assessed</Text>
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