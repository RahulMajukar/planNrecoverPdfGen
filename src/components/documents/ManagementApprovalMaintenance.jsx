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
        alignItems: "center"
    },
    infoLabel: {
        width: 90,
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 11
    },
    infoValue: {
        color: "#e5e7eb",
        fontSize: 11
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
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#374151",
        marginVertical: 16
    },
    
    // Approval section styles
    approvalSection: {
        marginBottom: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#374151"
    },
    lastUpdatedText: {
        marginBottom: 12
    },
    approvalText: {
        lineHeight: 1.6,
        color: "#e5e7eb",
        marginBottom: 10,
        fontSize: 11,
        textAlign: "justify"
    },
    bold: {
        fontWeight: "bold",
        color: "#ffffff"
    },
    
    // Status indicators
    statusGreen: {
        backgroundColor: "#22c55e",
        color: "#ffffff",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 8
    },
    statusAmber: {
        backgroundColor: "#f59e0b",
        color: "#000000",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 8
    },
    statusRed: {
        backgroundColor: "#ef4444",
        color: "#ffffff",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 8
    },
    
    // Approval input box
    approvalBox: {
        backgroundColor: "#1f2937",
        borderLeftWidth: 3,
        borderLeftColor: "#3b82f6",
        padding: 10,
        marginTop: 12
    },
    approvalBoxText: {
        fontSize: 9,
        color: "#9ca3af",
        lineHeight: 1.4
    }
});

const bulletPoint = "• ";

export default function ManagementApprovalMaintenance({ 
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString()
}) {
    // Helper function to determine status based on approval date
    const getStatus = (approvalDate) => {
        if (!approvalDate) {
            return { text: "Awaiting Initial Approval", style: styles.statusRed };
        }
        
        const approval = new Date(approvalDate);
        const now = new Date();
        const diffTime = Math.abs(now - approval);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const elevenMonths = 335;
        const oneYear = 365;
        
        if (diffDays <= elevenMonths) {
            return { text: `${approvalDate}`, style: styles.statusGreen };
        } else if (diffDays <= oneYear) {
            return { text: `${approvalDate}`, style: styles.statusAmber };
        } else {
            return { text: `${approvalDate}`, style: styles.statusRed };
        }
    };

    return (
        <BaseDocument title="Management Approval & Maintenance">
            <View style={styles.infoBlock}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Company:</Text>
                    <Text style={styles.infoValue}>{companyName}</Text>
                </View>
            </View>

            <Text style={styles.paragraph}>
                The Management Approval & Maintenance report documents formal management review and approval of key Plan & Recover components, creating clear evidence of accountability and governance. It also supports ongoing compliance by tracking approval dates, approvers, and re-approval due dates, ensuring the information remains current and that all required components are reviewed and re-approved at least annually (within the 1-year re-approval requirement).
            </Text>

            <Text style={styles.italicText}>
                (Aligned to ISO 22301 clauses 8.4.4, 9.3, and 10.2; and DRI International 10 Professional Practices 1 and 7)
            </Text>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>1. Essentials</Text>
            
            <View style={styles.approvalSection}>
                <View style={styles.lastUpdatedText}>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Last Updated:</Text>{" "}
                        <Text style={getStatus("2025-11-15").style}>
                            {getStatus("2025-11-15").text}
                        </Text>
                    </Text>
                </View>

                <Text style={styles.approvalText}>
                    <Text style={styles.bold}>Management Approval:</Text> As an authorized manager, I approve and attest to the completeness and accuracy of the following contents found within the Essentials program section:
                </Text>

                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Company Basics (Step 1)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Roles & Responsibilities (Step 2)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical Processes (Step 3)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Business Impact Analysis (Step 3)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Recovery Time Objectives (Step 3)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical Technology & Data (Step 4)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical Equipment (Step 5)</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Critical Third parties / Suppliers (Step 6)</Text>
                </View>

                <View style={styles.approvalBox}>
                    <Text style={styles.approvalBoxText}>
                        [ALLOW FOR USER TO INPUT NAME AND TITLE OF AUTHORIZED APPROVER, A BUTTON TO APPROVE, AND AUTOGENERATE THE ANNIVERSARY DATE FOR USE IN THE LAST UPDATED FIELD]
                    </Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>2. Assessments</Text>
            
            <View style={styles.approvalSection}>
                <View style={styles.lastUpdatedText}>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Last Updated:</Text>{" "}
                        <Text style={getStatus("2025-10-20").style}>
                            {getStatus("2025-10-20").text}
                        </Text>
                    </Text>
                </View>

                <Text style={styles.approvalText}>
                    <Text style={styles.bold}>Management Approval:</Text> As an authorized manager, I approve and attest to the completeness and accuracy of the following contents found within the Assessments program section:
                </Text>

                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Threat & Vulnerability Assessment</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Risk Assessment</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Business Impact Analysis</Text>
                </View>

                <View style={styles.approvalBox}>
                    <Text style={styles.approvalBoxText}>
                        [ALLOW FOR USER TO INPUT NAME AND TITLE OF AUTHORIZED APPROVER, A BUTTON TO APPROVE, AND AUTOGENERATE THE ANNIVERSARY DATE FOR USE IN THE LAST UPDATED FIELD]
                    </Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>3. Plans</Text>
            
            <View style={styles.approvalSection}>
                <View style={styles.lastUpdatedText}>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Last Updated:</Text>{" "}
                        <Text style={getStatus("2025-09-10").style}>
                            {getStatus("2025-09-10").text}
                        </Text>
                    </Text>
                </View>

                <Text style={styles.approvalText}>
                    <Text style={styles.bold}>Management Approval:</Text> As an authorized manager, I approve and attest to the completeness and accuracy of the following contents found within the Plans program section:
                </Text>

                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Emergency Management Plan</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Crisis Management Plan</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Business Continuity Plan</Text>
                </View>

                <View style={styles.approvalBox}>
                    <Text style={styles.approvalBoxText}>
                        [ALLOW FOR USER TO INPUT NAME AND TITLE OF AUTHORIZED APPROVER, A BUTTON TO APPROVE, AND AUTOGENERATE THE ANNIVERSARY DATE FOR USE IN THE LAST UPDATED FIELD]
                    </Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>4. Governance</Text>
            
            <View style={styles.approvalSection}>
                <View style={styles.lastUpdatedText}>
                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Last Updated:</Text>{" "}
                        <Text style={getStatus(null).style}>
                            {getStatus(null).text}
                        </Text>
                    </Text>
                </View>

                <Text style={styles.approvalText}>
                    <Text style={styles.bold}>Management Approval:</Text> As an authorized manager, I approve and attest to the completeness and accuracy of the following contents found within the Governance program section:
                </Text>

                <View style={styles.bulletList}>
                    <Text style={styles.bulletItem}>{bulletPoint}Policy</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Procedure</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Methodology</Text>
                    <Text style={styles.bulletItem}>{bulletPoint}Scope</Text>
                </View>

                <View style={styles.approvalBox}>
                    <Text style={styles.approvalBoxText}>
                        [ALLOW FOR USER TO INPUT NAME AND TITLE OF AUTHORIZED APPROVER, A BUTTON TO APPROVE, AND AUTOGENERATE THE ANNIVERSARY DATE FOR USE IN THE LAST UPDATED FIELD]
                    </Text>
                </View>
            </View>
        </BaseDocument>
    );
}