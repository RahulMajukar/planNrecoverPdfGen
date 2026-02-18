import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import BaseDocument from "../pdf/BaseDocument";
import { sharedStyles as styles } from "../pdf/pdfTheme";

// Column widths and local overrides specific to this document
const col = StyleSheet.create({
    col1: { width: "25%" },
    col2: { width: "18%" },
    col3: { width: "15%" },
    col4: { width: "15%" },
    col5: { width: "17%" },
    col6: { width: "10%" },
});

// Document-specific style overrides (grayscale)
const local = StyleSheet.create({
    highlightBox: {
        backgroundColor: "#f3f4f6",
        borderLeftWidth: 3,
        borderLeftColor: "#555555",
        padding: 10,
        marginVertical: 16,
        fontSize: 11,
        color: "#333333"
    },
    tableContainer: {
        marginTop: 20,
        marginBottom: 20
    },
    tableTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#111111",
        marginBottom: 12
    },
    badgeYes: {
        backgroundColor: "#555555",
        color: "#ffffff",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    badgeNo: {
        backgroundColor: "#dddddd",
        color: "#111111",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    iconText: {
        fontSize: 12,
        marginRight: 6
    },
    actionIcon: {
        color: "#333333",
        fontSize: 12
    },
});

export default function ExerciseAfterActionReport({
    companyName = "Display name of company",
    generatedDate = new Date().toLocaleDateString(),
    exerciseSummary = "Display summary of exercises completed – allow for click on \"Action\" icon to open full exercise report that was created on the Exercise page"
}) {
    // Sample exercise data
    const exercises = [
        {
            name: "Fire",
            icon: "🔥",
            date: "10/7/2025",
            type: "Tabletop",
            gapsIdentified: "Yes",
            remediationDate: "3/18/2026",
            action: "✓"
        },
        {
            name: "Flood",
            icon: "🌊",
            date: "12/9/2025",
            type: "Tabletop",
            gapsIdentified: "No",
            remediationDate: "2/12/2026",
            action: "✓"
        }
    ];

    return (
        <BaseDocument title="Exercise After-action Report">
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
                The After-Action Report documents what happened during an exercise or real disruption, what worked, what failed, and what must change, converting observations into accountable corrective actions with owners, deadlines, and measurable outcomes. It provides durable evidence that response and recovery processes are tested, reviewed, and improved in a disciplined cycle, strengthening operational resilience and demonstrating that lessons learned are systematically captured and embedded into plans, training, and governance.
            </Text>

            <Text style={[styles.paragraph, styles.italicText]}>
                (Aligned to ISO 22301 clauses 9.1, 9.2, 9.3, and 10.1; and DRI International 10 Professional Practices 8, 9, and 10)
            </Text>

            <View style={local.highlightBox}>
                <Text>{exerciseSummary}</Text>
            </View>

            <View style={local.tableContainer}>
                <Text style={local.tableTitle}>After-Action Reports</Text>

                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={col.col1}>
                            <Text style={styles.tableCellBold}>Exercise Name</Text>
                        </View>
                        <View style={col.col2}>
                            <Text style={styles.tableCellBold}>Exercise Date</Text>
                        </View>
                        <View style={col.col3}>
                            <Text style={styles.tableCellBold}>Exercise Type</Text>
                        </View>
                        <View style={col.col4}>
                            <Text style={styles.tableCellBold}>Gaps Identified</Text>
                        </View>
                        <View style={col.col5}>
                            <Text style={styles.tableCellBold}>Remediation Date</Text>
                        </View>
                        <View style={col.col6}>
                            <Text style={styles.tableCellBold}>Action</Text>
                        </View>
                    </View>

                    {/* Table Rows */}
                    {exercises.map((exercise, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={col.col1}>
                                <Text style={styles.tableCell}>
                                    <Text style={local.iconText}>{exercise.icon}</Text>
                                    {exercise.name}
                                </Text>
                            </View>
                            <View style={col.col2}>
                                <Text style={styles.tableCell}>{exercise.date}</Text>
                            </View>
                            <View style={col.col3}>
                                <Text style={styles.tableCell}>
                                    <Text style={local.iconText}>📋</Text>
                                    {exercise.type}
                                </Text>
                            </View>
                            <View style={col.col4}>
                                <View style={exercise.gapsIdentified === "Yes" ? local.badgeYes : local.badgeNo}>
                                    <Text>{exercise.gapsIdentified}</Text>
                                </View>
                            </View>
                            <View style={col.col5}>
                                <Text style={styles.tableCell}>{exercise.remediationDate}</Text>
                            </View>
                            <View style={col.col6}>
                                <Text style={[styles.tableCell, local.actionIcon]}>
                                    {exercise.action}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </BaseDocument>
    );
}