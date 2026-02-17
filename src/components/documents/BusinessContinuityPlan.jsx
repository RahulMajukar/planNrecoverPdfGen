import React from "react";
import { Text, View, StyleSheet, Page } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";

const styles = StyleSheet.create({
    // Base page style
    basePage: {
        backgroundColor: "#2b2b2b",
        padding: 40,
        paddingTop: 70,
        fontSize: 10,
    },
    
    // Cover Page
    coverPage: {
        backgroundColor: "#2b2b2b",
        padding: 40,
        paddingTop: 100,
    },
    coverTitle: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 12,
        marginTop: 80,
        textAlign: "center"
    },
    coverDate: {
        color: "#9ca3af",
        fontSize: 11,
        marginTop: 8,
        textAlign: "center"
    },
    
    // Table of Contents
    tocTitle: {
        fontSize: 18,
        color: "#1e40af",
        fontWeight: "bold",
        marginBottom: 16
    },
    tocItem: {
        flexDirection: "row",
        marginBottom: 6,
        alignItems: "baseline"
    },
    tocSection: {
        width: 30,
        color: "#e5e7eb",
        fontSize: 10
    },
    tocText: {
        flex: 1,
        color: "#e5e7eb",
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#1e40af",
        borderBottomStyle: "dotted",
        marginRight: 4
    },
    tocPage: {
        color: "#e5e7eb",
        fontSize: 10,
        width: 28,
        textAlign: "right"
    },
    
    // Section Styles
    sectionTitle: {
        color: "#22c55e",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 12,
        textAlign: "left"
    },
    sectionNumber: {
        fontSize: 20,
        color: "#1e40af",
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 10
    },
    subsectionTitle: {
        color: "#ffffff",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: 18,
        marginBottom: 8,
        textAlign: "left"
    },
    paragraph: {
        lineHeight: 1.6,
        color: "#e5e7eb",
        marginBottom: 10,
        fontSize: 10,
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
        marginTop: 15,
        marginBottom: 15,
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
        backgroundColor: "#1f2937"
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
    
    // Column widths for various tables
    col1: { width: "25%" },
    col2: { width: "25%" },
    col3: { width: "25%" },
    col4: { width: "25%" },
    colTeam: { width: "20%" },
    colMembers: { width: "35%" },
    colResp: { width: "45%" },
    colDept: { width: "15%" },
    colProcess: { width: "25%" },
    colRTO: { width: "15%" },
    colProcedures: { width: "45%" },
    colPlanSection: { width: "25%" },
    colISO: { width: "20%" },
    colDRI: { width: "15%" },
    colWhy: { width: "40%" },
    colRTO: { width: "15%" },
    colCount: { width: "20%" },
    colPercent: { width: "20%" },
    
    smallBullet: {
        fontSize: 8,
        marginLeft: 0,
        marginBottom: 2
    },
    
    // Bold text
    bold: {
        fontWeight: "bold",
        color: "#ffffff"
    },
    
    // Placeholder text
    placeholder: {
        color: "#f59e0b",
        fontStyle: "italic",
        fontSize: 9
    },
    
    // First 48 Hours box
    criticalBox: {
        backgroundColor: "#1e293b",
        borderLeftWidth: 4,
        borderLeftColor: "#ef4444",
        padding: 10,
        marginVertical: 12
    },
    criticalTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#ef4444",
        marginBottom: 8
    },
    
    // Intent box
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
    }
});

const bulletPoint = "• ";
const numberedPoint = (num) => `${num}. `;

export default function BusinessContinuityPlan({ 
    companyName = "DISPLAY NAME OF COMPANY",
    generatedDate = new Date().toLocaleDateString()
}) {
    return (
        <BaseDocument title="Business Continuity Plan">
            {/* Cover Page */}
            <Page style={styles.coverPage}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text style={styles.coverTitle}>BUSINESS CONTINUITY PLAN FOR</Text>
                    <Text style={styles.coverTitle}>{companyName}</Text>
                    <Text style={styles.coverDate}>DATE: {generatedDate}</Text>
                </View>
            </Page>

            {/* Table of Contents */}
            <Page style={styles.basePage}>
                <Text style={styles.tocTitle}>Table of Contents</Text>
                
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>First 48 Hours</Text>
                    <Text style={styles.tocPage}>3</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>Immediate Actions</Text>
                    <Text style={styles.tocPage}>3</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>Immediate Communications</Text>
                    <Text style={styles.tocPage}>3</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>Most Critical Business Processes</Text>
                    <Text style={styles.tocPage}>4</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>Most Critical Applications</Text>
                    <Text style={styles.tocPage}>4</Text>
                </View>
                
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1</Text>
                    <Text style={styles.tocText}>Introduction</Text>
                    <Text style={styles.tocPage}>5</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.1</Text>
                    <Text style={styles.tocText}>Purpose</Text>
                    <Text style={styles.tocPage}>5</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.2</Text>
                    <Text style={styles.tocText}>Scope and Applicability</Text>
                    <Text style={styles.tocPage}>5</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.3</Text>
                    <Text style={styles.tocText}>Objectives</Text>
                    <Text style={styles.tocPage}>5</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.4</Text>
                    <Text style={styles.tocText}>Intent</Text>
                    <Text style={styles.tocPage}>6</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.5</Text>
                    <Text style={styles.tocText}>Planning Approach and Foundation</Text>
                    <Text style={styles.tocPage}>6</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.6</Text>
                    <Text style={styles.tocText}>Audience and Use</Text>
                    <Text style={styles.tocPage}>7</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.7</Text>
                    <Text style={styles.tocText}>Document Control</Text>
                    <Text style={styles.tocPage}>7</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.8</Text>
                    <Text style={styles.tocText}>Roles & Responsibilities</Text>
                    <Text style={styles.tocPage}>8</Text>
                </View>
                
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}></Text>
                    <Text style={styles.tocText}>Business Continuity Plan</Text>
                    <Text style={styles.tocPage}>10</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.10</Text>
                    <Text style={styles.tocText}>Business Impact Analysis Summary</Text>
                    <Text style={styles.tocPage}>10</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.11</Text>
                    <Text style={styles.tocText}>Business Continuity Recovery Strategies</Text>
                    <Text style={styles.tocPage}>10</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.12</Text>
                    <Text style={styles.tocText}>Employee Contact List</Text>
                    <Text style={styles.tocPage}>11</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.13</Text>
                    <Text style={styles.tocText}>Critical Technology and Data</Text>
                    <Text style={styles.tocPage}>11</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.14</Text>
                    <Text style={styles.tocText}>Critical Equipment and Tools</Text>
                    <Text style={styles.tocPage}>11</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.15</Text>
                    <Text style={styles.tocText}>Critical Third Parties / Suppliers</Text>
                    <Text style={styles.tocPage}>11</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>1.16</Text>
                    <Text style={styles.tocText}>Return to Business as Usual</Text>
                    <Text style={styles.tocPage}>11</Text>
                </View>
                
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>2</Text>
                    <Text style={styles.tocText}>Plan Maintenance</Text>
                    <Text style={styles.tocPage}>13</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>2.1</Text>
                    <Text style={styles.tocText}>Maintenance Procedures</Text>
                    <Text style={styles.tocPage}>13</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>2.2</Text>
                    <Text style={styles.tocText}>Plan Alignment to Standards</Text>
                    <Text style={styles.tocPage}>14</Text>
                </View>
                <View style={styles.tocItem}>
                    <Text style={styles.tocSection}>2.3</Text>
                    <Text style={styles.tocText}>Version Control</Text>
                    <Text style={styles.tocPage}>16</Text>
                </View>
            </Page>

            {/* First 48 Hours */}
            <Page style={styles.basePage}>
                <View style={styles.criticalBox}>
                    <Text style={styles.criticalTitle}>First 48 Hours</Text>
                    <Text style={styles.paragraph}>
                        The first 48 hours after a disaster are crucial due to the immediate impacts and the potential for rapid escalation of consequences if not addressed promptly. This critical window offers the best chance to mitigate further damage, ensure safety, and begin recovery processes effectively.
                    </Text>

                    <Text style={styles.subsectionTitle}>Immediate Actions</Text>
                    <Text style={styles.italicText}>Common sense and situational awareness should guide decisions</Text>
                    
                    <View style={styles.bulletList}>
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Protect life and prevent harm</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Call emergency services if needed.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Follow Emergency Management procedures if there is a life-safety threat, evacuate or shelter-in-place as appropriate.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Do not enter unsafe areas.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Make the incident official</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Notify appropriate individuals and teams immediately.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Declare an incident if people, facilities, critical systems, or core operations are impacted.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Stabilize the situation</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Stop work that could increase risk.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Only if safe, secure the area, protect critical assets, and preserve evidence.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Start an incident log</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Record what happened, when it started, what is impacted, what is still working.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Track decisions, owners, and timestamps.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Shift to continuity mode</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Pause non-essential work.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Assign owners to assess impacts, execute workarounds, and estimate time to restore.</Text>
                            </View>
                        </Text>
                    </View>

                    <Text style={styles.subsectionTitle}>Immediate Communications</Text>
                    <View style={styles.bulletList}>
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Send the first internal update fast</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Use approved channels (call tree, SMS, Teams/Slack, email).</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Include: confirmed facts, safety instruction, what to do now, when the next update is coming, and who is leading. Proceed with internal messaging with understanding that it may leak externally by accidental or intentional means.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Escalate to the right functions</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Leadership, Operations, IT/InfoSec, HR, Facilities, Legal/Compliance, Customer lead, Communications lead (as applicable).</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Control external messaging</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Customers, suppliers, regulators, and media communications go through the designated spokesperson.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Share only confirmed facts, service impact, and next update time, no speculation.</Text>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Ensure external messaging is aligned with internal messaging.</Text>
                            </View>
                        </Text>
                        
                        <Text style={styles.bulletItem}>
                            <Text style={styles.bold}>Set an update cadence</Text>
                            <View style={styles.nestedBullet}>
                                <Text style={styles.nestedBulletItem}>{bulletPoint}Establish regular updates early (for example every 30 to 60 minutes), then adjust as the situation stabilizes.</Text>
                            </View>
                        </Text>
                    </View>
                </View>

                <Text style={styles.subsectionTitle}>Most Critical Business Processes</Text>
                <Text style={styles.paragraph}>
                    The processes listed below have been identified in the platform as highest priority, based on collected assessment data, and they must be maintained or restored within 2 days or less to prevent unacceptable operational, financial, or reputational impact. See section 2 for a full list of critical business processes.
                </Text>
                <Text style={styles.placeholder}>[INSERT LIST OF ALL CRITICAL BUSINESS PROCESSES THAT HAVE RTOs OF 2 DAYS OR LESS]</Text>

                <Text style={styles.subsectionTitle}>Most Critical Applications</Text>
                <Text style={styles.paragraph}>
                    The applications listed below have been identified in the platform as essential enablers of the highest priority processes, based on collected assessment data, and they must be recovered within 2 days or less to support timely continuity and restoration of operations. See section 2 for a full list of critical applications.
                </Text>
                <Text style={styles.placeholder}>[INSERT LIST OF ALL CRITICAL APPLICATIONS THAT HAVE RTOs OF 2 DAYS OR LESS]</Text>
            </Page>

            {/* Section 1: Introduction */}
            <Page style={styles.basePage}>
                <Text style={styles.sectionNumber}>1. Introduction</Text>
                
                <Text style={styles.subsectionTitle}>Purpose</Text>
                <Text style={styles.paragraph}>
                    This Business Continuity Plan (BCP) establishes the framework and high-level requirements for preparing for, responding to, and recovering from disruptive incidents that could affect the organization's ability to deliver its critical products and services. The plan supports operational resilience by defining a consistent approach to continuity planning, clarifying responsibilities, and setting expectations for readiness, response coordination, and recovery.
                </Text>
                <Text style={styles.paragraph}>
                    This plan is a core element of the organization's Business Continuity Management System (BCMS). It is intended to reduce the likelihood and impact of disruption, protect people and critical activities, and enable timely restoration of prioritized operations.
                </Text>

                <Text style={styles.subsectionTitle}>Scope and Applicability</Text>
                <Text style={styles.paragraph}>
                    This BCP applies to the organization's defined BCMS scope, including the locations, business units, processes, technology, and third-party dependencies that support delivery of products and services within that scope. It covers disruptive events that may impact personnel, facilities, technology, suppliers, utilities, data, or key operational capabilities.
                </Text>
                <Text style={styles.paragraph}>The scope includes:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Business activities and resources required to deliver prioritized products and services</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Internal functions supporting those activities, including management, enabling services, and critical support processes</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Key dependencies, including suppliers, outsourced service providers, and other third parties where disruption could affect the organization's ability to operate</Text>
                </View>
                <Text style={styles.paragraph}>
                    Where functions, sites, or services fall outside the BCMS scope, this plan does not create continuity obligations for those areas unless explicitly stated by management.
                </Text>

                <Text style={styles.subsectionTitle}>Objectives</Text>
                <Text style={styles.paragraph}>The objectives of this Business Continuity Plan are to:</Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Ensure safety of personnel and stakeholders.</Text>
                        <Text style={styles.paragraph}>Prioritize life safety and welfare, including prompt escalation, accountability, and coordination with appropriate emergency response resources.</Text>
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Maintain or restore critical business functions within defined recovery timeframes.</Text>
                        <Text style={styles.paragraph}>Achieve established recovery objectives for prioritized activities, including recovery time objectives and any supporting recovery point objectives where applicable (ISO 22301 continuity objectives and planning requirements).</Text>
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Minimize financial, operational, and reputational impact.</Text>
                        <Text style={styles.paragraph}>Reduce disruption-related losses by executing pre-defined continuity strategies, maintaining service levels where feasible, and managing stakeholder expectations through coordinated response and recovery actions.</Text>
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Comply with contractual, legal, and regulatory obligations.</Text>
                        <Text style={styles.paragraph}>Meet applicable requirements during disruption, including reporting, recordkeeping, data protection, and customer commitments, and ensure continuity arrangements support these obligations.</Text>
                    </Text>
                    <Text style={styles.bulletItem}>
                        <Text style={styles.bold}>Enable effective internal and external communication during a disruption.</Text>
                        <Text style={styles.paragraph}>Provide timely, accurate, and consistent communications to employees, customers, suppliers, regulators (as applicable), and other stakeholders through defined roles, channels, and approval paths (aligned to ISO 22301 communications expectations).</Text>
                    </Text>
                </View>
            </Page>

            {/* Continue Introduction sections */}
            <Page style={styles.basePage}>
                <Text style={styles.subsectionTitle}>Intent</Text>
                <Text style={styles.paragraph}>
                    The organization is committed to maintaining continuity of prioritized operations during disruptive incidents, consistent with its strategic direction, risk context, and stakeholder expectations. The organization will:
                </Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Establish continuity objectives and measurable continuity requirements for prioritized activities</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Maintain plans, resources, and competencies necessary to respond effectively to disruption</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Meet applicable legal, regulatory, and contractual continuity obligations</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Continually improve the BCMS through governance, exercises, performance monitoring, and management review</Text>
                </View>
                <Text style={styles.paragraph}>
                    This BCP is authorized by management and is supported by leadership commitment to provide appropriate resources, promote a culture of preparedness, and ensure that continuity responsibilities are understood across the organization.
                </Text>

                <Text style={styles.subsectionTitle}>Planning Approach and Foundation</Text>
                <Text style={styles.paragraph}>
                    This plan is based on a structured program approach to business continuity, designed to ensure continuity capabilities are intentional, repeatable, and sustainable. The program approach includes:
                </Text>
                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Defined governance, roles, and accountability for continuity planning and incident response</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}A lifecycle for planning that includes business impact analysis, risk assessment, strategy selection, plan development, exercising, maintenance, and continual improvement</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Standardized methods and templates to ensure consistency across functions and sites</Text>
                </View>

                <Text style={styles.subsectionTitle}>Audience and Use</Text>
                <Text style={styles.paragraph}>
                    This BCP is intended for leadership, continuity coordinators, incident response roles, and functional owners responsible for executing recovery actions. It provides an overarching structure and direction, with supporting procedures and team-level plans used for detailed execution.
                </Text>
                <Text style={styles.paragraph}>
                    During an incident, this plan supports coordinated decision-making by establishing clear authority, escalation expectations, and alignment to recovery priorities and objectives.
                </Text>

                <Text style={styles.subsectionTitle}>Document Control</Text>
                <Text style={styles.paragraph}>
                    This plan is maintained as a controlled document within the BCMS. It is reviewed at least annually, and also following significant organizational change, material process or technology change, supplier changes affecting critical dependencies, or after exercises and incidents that identify improvement opportunities.
                </Text>

                <Text style={styles.subsectionTitle}>Roles & Responsibilities</Text>
                <Text style={styles.paragraph}>
                    The following employees have assigned roles in managing the business interruption and carrying out the actions required to support recovery and restoration.
                </Text>

                {/* Roles Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Team Name</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCellBold}>Members</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.tableCellBold}>Responsibility</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Leadership</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>[POPULATE WITH ROLE BASED TEAM MEMBERS]</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Has authority to declare a disaster</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Runs the strategic recovery efforts and directs the Continuity Coordinators and Functional Owners as needed</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Communicates with employees, visitors, clients, and regulators (as appropriate)</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Approves emergency funding for disaster efforts</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Provide updates (as necessary) to Board</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Declares return to normal operations once disaster is resolved</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Continuity Coordinators</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>[SAME AS ABOVE]</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Run individual business continuity plan efforts</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Coordinate with other departments</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Provide status reporting to Leadership</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Life Safety</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>[SAME AS ABOVE]</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Assess life-safety and employee wellness issues</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Coordinate medical response and family notifications</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Damage Assessment</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>[SAME AS ABOVE]</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Assess physical and technological damage and reports back to the Leadership</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Coordinate with first responders as appropriate</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Technology</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>[SAME AS ABOVE]</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Responsible for the technology recovery</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Provides technology status on recovery efforts to Leadership</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colTeam}>
                            <Text style={styles.tableCellBold}>Team Member</Text>
                        </View>
                        <View style={styles.colMembers}>
                            <Text style={styles.tableCell}>All persons not included in any of the above designated roles</Text>
                        </View>
                        <View style={styles.colResp}>
                            <Text style={styles.smallBullet}>{bulletPoint}Executes assigned recovery duties, including notifications and check ins, recovery tasks and workarounds, and coordination with internal and external partners, while maintaining appropriate confidentiality.</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Provides timely updates and documentation, escalating issues promptly, and recording actions and costs in the appropriate logs and trackers as directed.</Text>
                        </View>
                    </View>
                </View>
            </Page>

            {/* Business Continuity Plan Details */}
            <Page style={styles.basePage}>
                <Text style={styles.sectionTitle}>Business Continuity Plan</Text>
                
                <Text style={styles.subsectionTitle}>Business Impact Analysis Summary</Text>
                <Text style={styles.paragraph}>The following is a distribution of the critical process recovery times.</Text>
                <Text style={styles.italicText}>[THE BELOW ARE ILLUSTRATIVE TABLES AND CHARTS. WE SHOULD BE ABLE TO PULL THE SAME CHARTS FROM THE DASHBOARD]</Text>

                {/* BIA Summary Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.colRTO}>
                            <Text style={styles.tableCellBold}>RTO Days</Text>
                        </View>
                        <View style={styles.colCount}>
                            <Text style={styles.tableCellBold}># Count</Text>
                        </View>
                        <View style={styles.colPercent}>
                            <Text style={styles.tableCellBold}>% Count</Text>
                        </View>
                    </View>

                    {[
                        { rto: "Intraday (.5 Day)", count: "4", percent: "9%" },
                        { rto: "1 Day", count: "2", percent: "4%" },
                        { rto: "2 Days", count: "3", percent: "6%" },
                        { rto: "3 Days", count: "1", percent: "2%" },
                        { rto: "5 Days", count: "15", percent: "32%" },
                        { rto: "10 Days", count: "3", percent: "6%" },
                        { rto: "30 Days", count: "13", percent: "28%" },
                        { rto: "90 Days", count: "1", percent: "2%" },
                        { rto: "120 Days", count: "3", percent: "6%" },
                        { rto: "TBD", count: "2", percent: "4%" },
                    ].map((row, idx) => (
                        <View key={idx} style={styles.tableRow}>
                            <View style={styles.colRTO}>
                                <Text style={styles.tableCell}>{row.rto}</Text>
                            </View>
                            <View style={styles.colCount}>
                                <Text style={styles.tableCell}>{row.count}</Text>
                            </View>
                            <View style={styles.colPercent}>
                                <Text style={styles.tableCell}>{row.percent}</Text>
                            </View>
                        </View>
                    ))}

                    <View style={styles.tableRow}>
                        <View style={styles.colRTO}>
                            <Text style={styles.tableCellBold}>TOTALS</Text>
                        </View>
                        <View style={styles.colCount}>
                            <Text style={styles.tableCellBold}>47</Text>
                        </View>
                        <View style={styles.colPercent}>
                            <Text style={styles.tableCellBold}>100%</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.subsectionTitle}>Business Continuity Recovery Strategies</Text>
                <Text style={styles.paragraph}>
                    The following table outlines summaries for all critical business processes and their related recovery procedures.
                </Text>
                <Text style={styles.italicText}>[DATA TO BE PULLED FROM THE CRITICAL PROCESSES SELECTED IN THE ESSENTIALS PAGE]</Text>

                {/* Recovery Strategies Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.colDept}>
                            <Text style={styles.tableCellBold}>Department</Text>
                        </View>
                        <View style={styles.colProcess}>
                            <Text style={styles.tableCellBold}>Critical Process</Text>
                        </View>
                        <View style={styles.colRTO}>
                            <Text style={styles.tableCellBold}>RTO</Text>
                        </View>
                        <View style={styles.colProcedures}>
                            <Text style={styles.tableCellBold}>Recovery Procedures</Text>
                        </View>
                    </View>

                    <View style={styles.tableRow}>
                        <View style={styles.colDept}>
                            <Text style={styles.tableCell}>Finance</Text>
                        </View>
                        <View style={styles.colProcess}>
                            <Text style={styles.tableCell}>General Ledger</Text>
                        </View>
                        <View style={styles.colRTO}>
                            <Text style={styles.tableCell}>2 Days</Text>
                        </View>
                        <View style={styles.colProcedures}>
                            <Text style={styles.smallBullet}>{bulletPoint}Loss of Workspace: Shift to remote or alternate site; ensure secure remote access to ledger software and backups.</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Loss of Technology: Maintain paper-based or local backup ledgers; reconcile transactions once systems are restored.</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Loss of People: Cross-train staff on ledger processes; engage temporary or outsourced accounting resources if needed.</Text>
                            <Text style={styles.smallBullet}>{bulletPoint}Loss of Critical Third Party / Supplier: Keep an in-house capability or secondary vendor for ledger software/support.</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.subsectionTitle}>Employee Contact List</Text>
                <Text style={styles.placeholder}>[DISPLAY DATA CAPTURED IN STEP 2 ON ESSENTIALS PAGE]</Text>

                <Text style={styles.subsectionTitle}>Critical Technology and Data</Text>
                <Text style={styles.placeholder}>[DISPLAY DATA CAPTURED IN STEP 4 ON ESSENTIALS PAGE]</Text>

                <Text style={styles.subsectionTitle}>Critical Equipment and Tools</Text>
                <Text style={styles.placeholder}>[DISPLAY DATA CAPTURED IN STEP 5 ON ESSENTIALS PAGE]</Text>

                <Text style={styles.subsectionTitle}>Critical Third Parties / Suppliers</Text>
                <Text style={styles.placeholder}>[DISPLAY DATA CAPTURED IN STEP 6 ON ESSENTIALS PAGE]</Text>

                <Text style={styles.subsectionTitle}>Return to Business as Usual</Text>
                <Text style={styles.paragraph}>
                    Deactivating the BCP and returning to normal operations involves a series of carefully planned steps. This process ensures that the transition is smooth, risks are managed effectively, and operations can resume without significant issues. The following are the typical processes and procedures that can be follow:
                </Text>
                
                <View style={styles.numberedList}>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Assessment and Decision-Making</Text> - Conduct a thorough assessment of the situation that led to the activation of the plan. Determine if the conditions have stabilized enough to consider deactivation. Consult stakeholders, including department heads, Corporate, and external partners, to gather insights and make an informed decision.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Activation of a Deactivation Team</Text> - Establish a Deactivation Team responsible for overseeing the process. This team may include members of the security, facility, and department heads.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Review and Documentation</Text> - Review the plans effectiveness and document lessons learned, challenges faced, and successes during its activation. This should include feedback from all levels of the organization. Update this plan based on these insights to improve future responses.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Communication</Text> - Communicate the decision to deactivate the BCP to staff and Corporate. Provide clear instructions on the next steps and any changes to standard operating procedures. Maintain transparent communication throughout the deactivation process to ensure everyone is informed and prepared for the transition.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Gradual Reinstatement of Normal Operations</Text> - Plan for a phased approach to reinstating normal operations, prioritizing critical business functions and services. Monitor each phase carefully for issues that may arise and be prepared to re-activate parts of the plan if necessary.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Technical and Operational Adjustments</Text> - Revert any temporary changes made to IT systems, operational procedures, or physical workspaces to their original state, if applicable. Ensure all data and systems are fully integrated and functioning as expected in the normal operational mode.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Review Contracts and Agreements</Text> - Review any temporary contracts or agreements made during the plan activation, such as with suppliers or partners, and terminate or adjust these as necessary.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Support and Well-being</Text> - Provide support for employees who may have been affected by the disruption, including mental health support if needed. Acknowledge and thank everyone for their efforts during the period of disruption.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Final Evaluation</Text> - Once normal operations have been fully restored, conduct a final evaluation to ensure that all systems are operational, and the business is fully functional. Close out the plan deactivation formally with a report to Corporate and other applicable stakeholders.
                    </Text>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Continuous Improvement</Text> - Integrate the lessons learned into the properties ongoing risk management and recovery planning efforts to strengthen resilience against future disruptions.
                    </Text>
                </View>
                
                <Text style={styles.paragraph}>
                    This structured approach ensures that the organization transitions back to normal operations efficiently and effectively, minimizing risk and ensuring the well-being of all stakeholders.
                </Text>
            </Page>

            {/* Plan Maintenance */}
            <Page style={styles.basePage}>
                <Text style={styles.sectionNumber}>2. Plan Maintenance</Text>
                <Text style={styles.paragraph}>
                    Maintaining the BCP is crucial to ensuring that it remains effective and relevant, especially given the dynamic nature of the hospitality industry. Regular maintenance and updates to the plan can help prepare for, respond to, and recover from disruptions efficiently.
                </Text>

                <Text style={styles.subsectionTitle}>Maintenance Procedures</Text>
                <Text style={styles.paragraph}>
                    Here are the recommended steps to ensure plan components are maintained on an annual basis or as operational changes dictate an off-cycle update:
                </Text>

                <View style={styles.numberedList}>
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Annual Review and Update</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Schedule an annual review of the entire plan to ensure it reflects the current operational, environmental, and market conditions. This should involve representatives from all departments.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Update the plan to incorporate changes in the company's structure, new technologies, updated contact lists, and lessons learned from recent incidents or drills.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Continuous Monitoring for Changes</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Establish a process for ongoing monitoring of internal changes (e.g., renovations, new services, changes in staffing) and external changes (e.g., regulatory updates, changes in the threat landscape) that may necessitate updates to the plan.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Training and Drills</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Conduct regular training sessions for new employees and refresher courses for existing staff to ensure everyone is familiar with their roles and responsibilities in the plan.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Organize annual drills to practice the plan in simulated scenarios. This helps identify areas of improvement and ensures the plan's effectiveness in real-world situations.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Engagement of Stakeholders</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Involve stakeholders in the review process, including employees, management, suppliers, and local emergency services. Their feedback can provide valuable insights for improving the plan.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain good communication with stakeholders about any changes to the plan and the reasons for those changes.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Evaluation of Technological Tools</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Review and update technological tools and systems that support the plan. This includes data backup systems, communication tools, and emergency alert systems.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Ensure that any new technology adopted is integrated into the plan.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Regulatory Compliance and Best Practices</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Stay updated with industry best practices and any regulatory changes that might affect the plan. Incorporate these into the plan to ensure compliance and effectiveness.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Consult with industry experts and participate in relevant forums or groups to stay informed about the latest trends and standards in business continuity planning.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Documentation and Accessibility</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Ensure that updates to the plan are well-documented and that changes are clearly communicated to all relevant parties.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain multiple accessible copies of the updated plan in secure, yet easily accessible locations, both physically and digitally.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Review of External Partners and Suppliers</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Regularly assess the continuity plans of key suppliers and partners to ensure they align with the corporate expectations and requirements.</Text>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Update agreements with suppliers and partners as needed to reflect any changes in the plan.</Text>
                        </View>
                    </Text>
                    
                    <Text style={styles.numberedItem}>
                        <Text style={styles.bold}>Reporting and Record-Keeping</Text>
                        <View style={styles.nestedBullet}>
                            <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain records of all reviews, updates, drills, and training sessions, including any incidents that triggered the activation of the plan. These records can inform future updates to the plan.</Text>
                        </View>
                    </Text>
                </View>

                <Text style={styles.paragraph}>
                    By following these steps, the organization can keep the Business Continuity Plan current, usable, and effective, with reliable contacts, clear governance, and a practiced ability to coordinate response actions and stakeholder communications during high-pressure events.
                </Text>

                <Text style={styles.subsectionTitle}>Plan Alignment to Standards</Text>
                
                {/* Standards Alignment Table */}
                <View style={styles.table}>
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.colPlanSection}>
                            <Text style={styles.tableCellBold}>Plan Section</Text>
                        </View>
                        <View style={styles.colISO}>
                            <Text style={styles.tableCellBold}>ISO 22301</Text>
                        </View>
                        <View style={styles.colDRI}>
                            <Text style={styles.tableCellBold}>DRI PP</Text>
                        </View>
                        <View style={styles.colWhy}>
                            <Text style={styles.tableCellBold}>Why it maps</Text>
                        </View>
                    </View>

                    {[
                        { section: "Immediate Actions", iso: "8.4.2 – 8.4.4, 8.4.1", dri: "PP5, PP6", why: "Establishes initial response actions, rapid stabilization, and structured incident management steps that support continuity of prioritized activities." },
                        { section: "Immediate Communications", iso: "7.4, 8.4.3, 8.4.4", dri: "PP6, PP9", why: "Defines how timely, accurate internal and external communications are initiated, approved, and delivered during the earliest stage of an incident." },
                        { section: "Most Critical Business Processes", iso: "8.2.2", dri: "PP3", why: "Summarizes critical activities, impacts, and time-based recovery requirements." },
                        { section: "Most Critical Applications", iso: "8.2, 8.3, 8.4", dri: "PP3, PP4, PP6", why: "Captures key IT and data dependencies plus the recovery approach to support critical work." },
                        { section: "1.1 Purpose", iso: "5.2, 6.2", dri: "PP1", why: "States why the BCMS/plan exists and what it is meant to achieve." },
                        { section: "1.2 Scope and Applicability", iso: "4.3, 4.4", dri: "PP1", why: "Defines what is covered (and not covered) so planning and assurance are bounded and clear." },
                        { section: "1.3 Objectives", iso: "6.2, 6.1", dri: "PP1", why: "Establishes measurable continuity outcomes (for example recovery targets, coverage goals)." },
                        { section: "1.4 Intent", iso: "5.1, 5.2, 5.3", dri: "PP1", why: "Documents leadership intent, governance expectations, and accountability for continuity." },
                        { section: "1.5 Planning Approach", iso: "4.4, 6.1, 6.3, 8.1, 8.2", dri: "PP1, PP2, PP3, PP6", why: "Explains the method used to assess risk and impact, then translate it into plans." },
                        { section: "1.6 Audience and Use", iso: "7.3, 7.4, 8.4", dri: "PP6, PP7, PP9", why: "Specifies who uses the plan, when to use it, and how people are enabled to act." },
                        { section: "1.7 Document Control", iso: "7.5", dri: "PP1, PP8", why: "Ensures plan content is current, controlled, accessible, and managed as official documentation." },
                        { section: "1.8 Roles & Responsibility", iso: "5.3, 7.2", dri: "PP1, PP6", why: "Assigns ownership and decision rights so response and recovery actions are executable." },
                        { section: "2.1 BIA Summary", iso: "8.2.2", dri: "PP3", why: "Summarizes critical activities, impacts, and time-based recovery requirements." },
                        { section: "2.2 Recovery Strategies", iso: "8.3", dri: "PP4", why: "Selects and documents strategy choices that meet recovery requirements from the BIA." },
                        { section: "2.3 Employee Contact List", iso: "7.4, 8.4", dri: "PP6, PP9", why: "Provides the minimum communication data needed to mobilize and coordinate people quickly." },
                        { section: "2.4 Critical Technology", iso: "8.2, 8.3, 8.4", dri: "PP3, PP4, PP6", why: "Captures key IT and data dependencies plus the recovery approach to support critical work." },
                        { section: "2.5 Critical Equipment", iso: "7.1, 8.3, 8.4", dri: "PP4, PP6", why: "Identifies physical resources required, and how they will be accessed or replaced." },
                        { section: "2.6 Critical Third Parties", iso: "8.2, 8.3, 8.4", dri: "PP2, PP3, PP4, PP10", why: "Documents external dependencies, related risks, and coordination steps during disruption." },
                        { section: "2.7 Return to BAU", iso: "8.4, 8.6", dri: "PP5, PP6, PP8", why: "Defines transition steps from workaround to stabilized operations, including review and handoff." },
                        { section: "3.1 Maintenance Procedures", iso: "8.6, 9.1, 9.2, 9.3, 10", dri: "PP8", why: "Establishes how the plan and capabilities are kept effective through review, testing, and improvement." },
                        { section: "3.2 Version Control", iso: "7.5, 8.6", dri: "PP8, PP1", why: "Tracks changes so users know they have the correct plan version and history is auditable." }
                    ].map((row, idx) => (
                        <View key={idx} style={styles.tableRow}>
                            <View style={styles.colPlanSection}>
                                <Text style={styles.tableCellBold}>{row.section}</Text>
                            </View>
                            <View style={styles.colISO}>
                                <Text style={styles.tableCell}>{row.iso}</Text>
                            </View>
                            <View style={styles.colDRI}>
                                <Text style={styles.tableCell}>{row.dri}</Text>
                            </View>
                            <View style={styles.colWhy}>
                                <Text style={styles.tableCell}>{row.why}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Version Control */}
                <View style={styles.versionControl}>
                    <Text style={styles.versionTitle}>Version Control</Text>
                    <Text style={styles.placeholder}>[ENTER SIMILAR VERSION CONTROL LOG THAT APPEARS IN OTHER AREAS OF THE SOFTWARE]</Text>
                </View>
            </Page>
        </BaseDocument>
    );
}