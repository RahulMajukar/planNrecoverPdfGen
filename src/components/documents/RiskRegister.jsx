import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";
import { sharedStyles as styles } from "../pdf/pdfTheme";

// Column widths specific to this document
const col = StyleSheet.create({
    colThreat: { width: "30%" },
    colLikelihood: { width: "10%" },
    colImpact: { width: "10%" },
    colControl: { width: "10%" },
    colRiskScore: { width: "12%" },
    colDrivers: { width: "28%" },
});

// Document-specific style overrides (grayscale)
const local = StyleSheet.create({
    highlightBox: {
        backgroundColor: "#f3f4f6",
        borderLeftWidth: 3,
        borderLeftColor: "#555555",
        padding: 10,
        marginVertical: 12,
        fontSize: 10,
        color: "#333333"
    },
    riskHigh: {
        backgroundColor: "#333333",
        color: "#ffffff",
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    riskMedium: {
        backgroundColor: "#777777",
        color: "#ffffff",
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    riskLow: {
        backgroundColor: "#cccccc",
        color: "#111111",
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    controlYes: {
        backgroundColor: "#333333",
        color: "#ffffff",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    controlNo: {
        backgroundColor: "#aaaaaa",
        color: "#111111",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default function RiskRegister({
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString()
}) {
    // Sample risk data - sorted by risk score descending
    const risks = [
        {
            threat: "Utility power outage (winter grid events)",
            likelihood: 3,
            impact: 5,
            control: "Yes",
            riskScore: 60,
            drivers: "Single facility, no production-grade generator, compressed air dependency"
        },
        {
            threat: "Critical machine failure (CNC, laser)",
            likelihood: 4,
            impact: 4,
            control: "Yes",
            riskScore: 48,
            drivers: "Limited redundancy, long lead repair parts, single-point machines"
        },
        {
            threat: "Key supplier disruption (specialty steel/tooling)",
            likelihood: 3,
            impact: 4,
            control: "No",
            riskScore: 48,
            drivers: "Single-source components, variable lead times, limited safety stock"
        },
        {
            threat: "Ransomware or ERP outage",
            likelihood: 3,
            impact: 5,
            control: "Yes",
            riskScore: 45,
            drivers: "Scheduling, shipping, invoicing dependency, recovery complexity under stress"
        },
        {
            threat: "Severe winter storm (access + transport)",
            likelihood: 4,
            impact: 3,
            control: "No",
            riskScore: 36,
            drivers: "Workforce availability, carrier disruption, inbound material delays"
        }
    ];

    // Helper to get risk level style
    const getRiskStyle = (score) => {
        if (score >= 50) return local.riskHigh;
        if (score >= 30) return local.riskMedium;
        return local.riskLow;
    };

    return (
        <BaseDocument title="Risk Register">
            <View style={styles.infoBlock}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Company:</Text>
                    <Text style={styles.infoValue}>{companyName}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Date:</Text>
                    <Text style={styles.infoValue}>{generatedDate}</Text>
                </View>
            </View>

            <Text style={styles.paragraph}>
                The Risk Register captures the organization's prioritized risks in a single, traceable system of record, creating clear evidence that threats, likelihoods, impacts, and mitigating controls have been identified, evaluated, and treated with intention. It supports ongoing resilience and audit readiness ensuring risks are reviewed on a defined cadence and updated whenever material changes.
            </Text>

            <Text style={styles.italicText}>
                (Aligned to ISO 22301 clauses 6.1, 8.2, 8.3, and 9.1; and DRI International 10 Professional Practices 2, 3, and 7)
            </Text>

            <Text style={styles.paragraph}>
                Scales (illustrative): Likelihood 1–5, Exposure Intensity 1–5, and Control Yes & No.
            </Text>

            <View style={local.highlightBox}>
                <Text>
                    [Enumerations are as follows: Very High, High, Medium, Low, Very Low align to 5 to 1 – the following example is the same example taken from the InsuraCast report. Unlike the InsuraCast Report which only highlights the top risks, this report should include a list of all risks listed in descending order of Risk Score]
                </Text>
            </View>

            <Text style={styles.paragraph}>
                If a control is in place, scoring is based on residual calculations, if no control is in place, scoring is based on inherent calculations.
            </Text>

            {/* Risk Table */}
            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <View style={col.colThreat}>
                        <Text style={styles.tableCellBold}>Threat</Text>
                    </View>
                    <View style={col.colLikelihood}>
                        <Text style={styles.tableCellBold}>Likelihood</Text>
                    </View>
                    <View style={col.colImpact}>
                        <Text style={styles.tableCellBold}>Impact</Text>
                    </View>
                    <View style={col.colControl}>
                        <Text style={styles.tableCellBold}>Control</Text>
                    </View>
                    <View style={col.colRiskScore}>
                        <Text style={styles.tableCellBold}>Risk score</Text>
                    </View>
                    <View style={col.colDrivers}>
                        <Text style={styles.tableCellBold}>Potential loss drivers [AI driven results]</Text>
                    </View>
                </View>

                {risks.map((risk, idx) => (
                    <View key={idx} style={styles.tableRow}>
                        <View style={col.colThreat}>
                            <Text style={styles.tableCellBold}>{risk.threat}</Text>
                        </View>
                        <View style={col.colLikelihood}>
                            <Text style={styles.tableCellBold}>{risk.likelihood}</Text>
                        </View>
                        <View style={col.colImpact}>
                            <Text style={styles.tableCellBold}>{risk.impact}</Text>
                        </View>
                        <View style={col.colControl}>
                            <View style={risk.control === "Yes" ? local.controlYes : local.controlNo}>
                                <Text>{risk.control}</Text>
                            </View>
                        </View>
                        <View style={col.colRiskScore}>
                            <View style={getRiskStyle(risk.riskScore)}>
                                <Text>{risk.riskScore}</Text>
                            </View>
                        </View>
                        <View style={col.colDrivers}>
                            <Text style={styles.tableCell}>{risk.drivers}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </BaseDocument>
    );
}