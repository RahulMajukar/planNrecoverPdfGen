import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";
import { sharedStyles as styles } from "../pdf/pdfTheme";

// Column widths specific to this document
const col = StyleSheet.create({
    col1: { width: "30%" },
    col2: { width: "20%" },
    col3: { width: "18%" },
    col4: { width: "32%" },
});

// Document-specific style overrides (grayscale)
const local = StyleSheet.create({
    policyHeader: {
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    policyTitle: {
        fontSize: 18,
        color: "#111111",
        fontWeight: "bold",
        marginBottom: 8
    },
    policyAlignment: {
        fontSize: 9,
        color: "#777777",
        fontStyle: "italic",
        marginBottom: 12
    },
    roleTitle: {
        color: "#111111",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 6
    },
    roleSection: {
        marginTop: 16,
        marginBottom: 16,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: "#cccccc"
    },
});

const bulletPoint = "• ";
const numberedPoint = (num) => `${num}. `;

export default function Policy({
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString(),
    reviewCadence = "At least annually, and after major business, technology, facility, supplier, or regulatory change (ISO 22301 Clauses 9.3, 10; DRI PP8)."
}) {
    return (
        <BaseDocument title="Policy">
            {/* Policy Header */}
            <View style={local.policyHeader}>
                <Text style={local.policyTitle}>Policy</Text>
                <Text style={local.policyAlignment}>
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

                <Text style={local.policyAlignment}>
                    (Aligned to ISO 22301 and DRI International 10 Professional Practices)
                </Text>
            </View>

            {/* Section 1: Purpose */}
            <Text style={styles.sectionTitle}>1. Purpose</Text>
            <Text style={styles.paragraph}>
                This policy sets executive direction for the organization's Business Continuity Management System (BCMS). It establishes minimum requirements to protect prioritized products and services from disruptive events, to reduce downtime, and to enable timely, coordinated response and recovery (ISO 22301 Clauses 4–10; DRI PP1–PP10).
            </Text>

            <View style={styles.divider} />

            {/* Section 2: Scope */}
            <Text style={styles.sectionTitle}>2. Scope</Text>
            <Text style={styles.paragraph}>
                This policy applies to:
            </Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}All business units, locations, and teams within the defined BCMS scope</Text>
                <Text style={styles.bulletItem}>{bulletPoint}All employees and contractors supporting in-scope activities</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Critical dependencies, including technology, facilities, records, third parties, and key suppliers</Text>
            </View>
            <Text style={styles.paragraph}>
                The BCMS scope will be documented, maintained, and reviewed periodically (ISO 22301 Clause 4.3; DRI PP1).
            </Text>

            <View style={styles.divider} />

            {/* Section 3: Executive Policy Statements */}
            <Text style={styles.sectionTitle}>3. Executive Policy Statements (What we commit to)</Text>
            <Text style={styles.paragraph}>
                Leadership commits that the organization will:
            </Text>

            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(1)}Lead and resource continuity as a management system</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Establish, sponsor, and maintain an effective BCMS, including roles, resources, and governance (ISO 22301 Clause 5; DRI PP1).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(2)}Base continuity decisions on impact and risk</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain a Business Impact Analysis (BIA) and Risk Assessment program to identify prioritized activities, dependencies, and disruption scenarios (ISO 22301 Clause 8.2; DRI PP2, PP3).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(3)}Set clear recovery requirements and strategies</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Define recovery objectives and implement continuity strategies that meet those requirements (ISO 22301 Clause 8.3; DRI PP4).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(4)}Maintain actionable plans and response structures</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain incident response and business continuity plans with clear activation, roles, escalation, and recovery steps (ISO 22301 Clause 8.4; DRI PP5, PP6).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(5)}Communicate effectively during disruptions</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Maintain crisis communications capabilities for internal and external stakeholders, including message ownership, approvals, and channels (ISO 22301 Clauses 7.4, 8.4.3; DRI PP9).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(6)}Build competence through training and exercises</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Provide role-based training and conduct exercises to validate capabilities and drive improvement (ISO 22301 Clauses 7.2, 7.3, 8.5, 8.6; DRI PP7, PP8).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(7)}Measure performance and continuously improve</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Monitor, audit, review, correct, and improve the BCMS (ISO 22301 Clauses 9, 10; DRI PP8).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(8)}Coordinate with external parties when needed</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Identify and manage external dependencies and coordination needs (suppliers, emergency services, regulators, landlords, utilities) (ISO 22301 Clause 8; DRI PP10).</Text>
                    </View>
                </Text>
            </View>

            <View style={styles.divider} />

            {/* Section 4: Governance and Accountability */}
            <Text style={styles.sectionTitle}>4. Governance and Accountability (Who does what)</Text>

            {/* Leadership */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Leadership (Accountable)</Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Sets the organization's continuity expectations and risk tolerance, approves BCMS scope and priorities, and ensures funding and resources are available.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Assigns authorities for incident management and continuity roles, and removes barriers that delay response and recovery.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Reviews BCMS performance (BIA and risk results, exercise outcomes, corrective actions) and requires improvements to close gaps.
                </Text>
                <Text style={styles.roleStandards}>
                    (ISO 22301 Clauses 5, 9.3, 10; DRI PP1, PP8)
                </Text>
            </View>

            {/* Continuity Coordinators */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Continuity Coordinators (Responsible)</Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Coordinate continuity planning and readiness activities across assigned teams or sites, acting as the primary BCMS point of contact for their area.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Maintain plan content for their area (contacts, activation steps, workarounds, recovery actions, dependencies), and ensure updates after organizational or operational change.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Support BIA and risk assessment activities by gathering inputs, validating recovery requirements, and confirming dependencies and single points of failure.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Organize participation in training and exercises, track completion, and drive closure of after-action items for their area.
                </Text>
                <Text style={styles.roleStandards}>
                    (ISO 22301 Clauses 7.2–7.3, 8.2, 8.4–8.6, 10; DRI PP1, PP3, PP6–PP8)
                </Text>
            </View>

            {/* Functional Owner, Life Safety */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner, Life Safety (Responsible for Life Safety outcomes)</Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Owns life safety procedures and coordination, including evacuation, accountability, first aid, security coordination, and safe re-entry protocols.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Ensures life safety roles are staffed, trained, and exercised, and that equipment and procedures are maintained and accessible.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Coordinates with external emergency services when needed, and ensures incident actions prioritize protection of people before property or service recovery.
                </Text>
                <Text style={styles.roleStandards}>
                    (ISO 22301 Clause 8.4.2; DRI PP5, PP10)
                </Text>
            </View>

            {/* Functional Owner, Damage Assessment */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner, Damage Assessment (Responsible for Damage Assessment outcomes)</Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Leads initial and ongoing damage assessment for facilities, equipment, and operational capability, including defining assessment checklists and decision criteria.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Coordinates assessment teams and information flow to Leadership and Continuity Coordinators, including estimated time to restore, safety constraints, and interim operating constraints.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Maintains documentation requirements (photos, logs, estimates) and supports recovery prioritization and sequencing based on impacts and constraints.
                </Text>
                <Text style={styles.roleStandards}>
                    (ISO 22301 Clauses 8.4, 8.6; DRI PP5, PP6, PP8)
                </Text>
            </View>

            {/* Functional Owner, Technology */}
            <View style={styles.roleSection}>
                <Text style={styles.roleTitle}>Functional Owner, Technology (Responsible for Technology recovery outcomes)</Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Owns technology recovery planning, including applications, infrastructure, identity and access, communications tools, backups, and third-party technology dependencies.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Defines and maintains recovery approaches aligned to recovery objectives for prioritized services, and validates recoverability through exercises and testing where feasible.
                </Text>
                <Text style={styles.roleDescription}>
                    {bulletPoint}Provides incident technology response support (triage, containment, restoration, communications to stakeholders), and maintains accurate recovery runbooks and access procedures.
                </Text>
                <Text style={styles.roleStandards}>
                    (ISO 22301 Clauses 8.2–8.4, 8.5–8.6; DRI PP4, PP5, PP6, PP8, PP10)
                </Text>
            </View>

            <View style={styles.divider} />

            {/* Section 5: Minimum Requirements */}
            <Text style={styles.sectionTitle}>5. Minimum Requirements (What must exist)</Text>
            <Text style={styles.paragraph}>
                The organization will maintain the following, at a minimum:
            </Text>

            <View style={styles.numberedList}>
                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(1)}BCMS scope, objectives, and governance</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Documented scope and continuity objectives, with defined governance forums and reporting cadence (ISO 22301 Clauses 4–6; DRI PP1).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(2)}BIA and risk assessment program</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Defined methodology, prioritized activities, dependency mapping, impact tolerances or recovery requirements, and periodic review (ISO 22301 Clause 8.2; DRI PP2, PP3).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(3)}Continuity strategies and solutions</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Strategy decisions for people, process, technology, facilities, data, and third parties, aligned to recovery requirements (ISO 22301 Clause 8.3; DRI PP4).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(4)}Plans and procedures</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Documented plans with activation criteria, roles, escalation, communications, continuity actions, and recovery steps for prioritized activities (ISO 22301 Clause 8.4; DRI PP5, PP6, PP9).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(5)}Training and awareness</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Role-based training and broad awareness for relevant personnel, with evidence of completion (ISO 22301 Clauses 7.2–7.3; DRI PP7).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(6)}Exercise and maintenance program</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Exercises on a planned cadence based on criticality and change, with after-action items tracked to closure (ISO 22301 Clauses 8.5–8.6, 10; DRI PP8).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(7)}Performance evaluation and management review</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}KPIs, internal audits (where applicable), and management reviews with documented decisions and actions (ISO 22301 Clause 9; DRI PP8).</Text>
                    </View>
                </Text>

                <Text style={styles.numberedItem}>
                    <Text style={styles.bold}>{numberedPoint(8)}Document control and availability</Text>
                    <View style={styles.nestedBullet}>
                        <Text style={styles.nestedBulletItem}>{bulletPoint}Controlled documentation and secure, accessible storage so plans are available when needed (ISO 22301 Clause 7.5; DRI PP6, PP8).</Text>
                    </View>
                </Text>
            </View>

            <View style={styles.divider} />

            {/* Section 6: Compliance, Exceptions, and Enforcement */}
            <Text style={styles.sectionTitle}>6. Compliance, Exceptions, and Enforcement</Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Compliance with this policy is mandatory for all in-scope functions.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exceptions require documented rationale, risk acceptance, compensating controls (if applicable), and approval by Leadership.</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Noncompliance will be managed through corrective actions and escalation as needed (ISO 22301 Clause 10; aligns to DRI PP8 governance and maintenance).</Text>
            </View>

            <View style={styles.divider} />

            {/* Section 7: Evidence and Reporting */}
            <Text style={styles.sectionTitle}>7. Evidence and Reporting (What leaders should expect to see)</Text>
            <Text style={styles.paragraph}>
                At minimum, the BCMS will retain and report:
            </Text>
            <View style={styles.bulletList}>
                <Text style={styles.bulletItem}>{bulletPoint}Scope and governance decisions, objectives, and program status</Text>
                <Text style={styles.bulletItem}>{bulletPoint}BIA results, recovery requirements, and dependency maps</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Risk assessment results and key risk treatments</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Strategy decisions and capability maturity status</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Exercise schedule, results, after-action items, closure evidence</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Training completion and awareness coverage</Text>
                <Text style={styles.bulletItem}>{bulletPoint}Management review outcomes and corrective actions</Text>
            </View>
            <Text style={styles.paragraph}>
                (ISO 22301 Clauses 7.5, 9, 10; DRI PP1, PP8).
            </Text>

            {/* Appendix: Standards Alignment */}
            <Text style={styles.appendixTitle}>Appendix: Standards Alignment</Text>

            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <View style={styles.col1}>
                        <Text style={styles.tableCellBold}>Program Requirement</Text>
                    </View>
                    <View style={styles.col2}>
                        <Text style={styles.tableCellBold}>ISO 22301</Text>
                    </View>
                    <View style={styles.col3}>
                        <Text style={styles.tableCellBold}>DRI PP</Text>
                    </View>
                    <View style={styles.col4}>
                        <Text style={styles.tableCellBold}>Description</Text>
                    </View>
                </View>

                {[
                    { req: "Program initiation and governance", iso: "Clauses 4–6", dri: "PP1", desc: "Establishes the BCMS foundation, defines scope, leadership commitment, roles, responsibilities, policy, and the management framework that controls how continuity is run." },
                    { req: "Risk assessment", iso: "Clause 8.2.3", dri: "PP2", desc: "Identifies threats and vulnerabilities that could disrupt operations, evaluates likelihood and impact, and documents prioritized risks to treat or monitor." },
                    { req: "Business impact analysis", iso: "Clause 8.2.2", dri: "PP3", desc: "Determines what activities are critical, what resources they rely on, and what disruption limits (time-based) the business can tolerate, to set recovery requirements." },
                    { req: "Strategies", iso: "Clause 8.3", dri: "PP4", desc: "Selects practical recovery options (people, facilities, technology, suppliers, workarounds) to meet BIA requirements within acceptable cost and risk." },
                    { req: "Incident response", iso: "Clause 8.4.2", dri: "PP5", desc: "Defines immediate response actions to stabilize an incident (life safety, initial containment, escalation, coordination) and hands off cleanly to recovery and continuity actions." },
                    { req: "Plan development", iso: "Clause 8.4", dri: "PP6", desc: "Produces documented, actionable plans (BCP, IT/DR, departmental playbooks) with steps, checklists, triggers, roles, and dependencies to execute the chosen strategies." },
                    { req: "Awareness and training", iso: "Clauses 7.2–7.3", dri: "PP7", desc: "Builds competence through training, onboarding, and role-based preparedness so people know their responsibilities and can execute plans under stress." },
                    { req: "Exercising and maintenance", iso: "Clauses 8.5–8.6, 10", dri: "PP8", desc: "Tests and validates plans via exercises, captures lessons learned, updates documentation, and drives continual improvement so plans stay accurate and usable." },
                    { req: "Crisis communications", iso: "Clause 7.4 and 8.4.3", dri: "PP9", desc: "Sets up internal and external communication methods, message approval, spokespersons, channels, and stakeholder messaging during disruption and recovery." },
                    { req: "External coordination", iso: "Clause 8", dri: "PP10", desc: "Aligns continuity with third parties (suppliers, landlords, emergency services, regulators, key customers) so dependencies, expectations, and joint procedures are clear." }
                ].map((row, idx) => (
                    <View key={idx} style={styles.tableRow}>
                        <View style={styles.col1}>
                            <Text style={styles.tableCellBold}>{row.req}</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.tableCell}>{row.iso}</Text>
                        </View>
                        <View style={styles.col3}>
                            <Text style={styles.tableCell}>{row.dri}</Text>
                        </View>
                        <View style={styles.col4}>
                            <Text style={styles.tableCell}>{row.desc}</Text>
                        </View>
                    </View>
                ))}
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