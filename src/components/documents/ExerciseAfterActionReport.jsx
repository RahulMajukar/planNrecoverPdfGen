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
        width: 80,
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 11
    },
    infoValue: {
        backgroundColor: "#facc15",
        color: "#000000",
        paddingHorizontal: 6,
        paddingVertical: 2,
        fontSize: 11,
        fontWeight: "bold"
    },
    sectionTitle: {
        color: "#22c55e",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 12,
        textAlign: "left"
    },
    paragraph: {
        lineHeight: 1.6,
        color: "#e5e7eb",
        marginBottom: 10,
        fontSize: 11,
        textAlign: "justify"
    },
    italicText: {
        fontStyle: "italic",
        color: "#9ca3af"
    },
    highlightBox: {
        backgroundColor: "#facc15",
        color: "#000000",
        padding: 10,
        marginVertical: 16,
        fontSize: 11,
        fontWeight: "bold"
    },
    tableContainer: {
        marginTop: 20,
        marginBottom: 20
    },
    tableTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 12
    },
    table: {
        borderWidth: 1,
        borderColor: "#374151",
        borderStyle: "solid"
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#374151",
        alignItems: "center"
    },
    tableHeader: {
        backgroundColor: "#1f2937"
    },
    tableCell: {
        padding: 10,
        fontSize: 10,
        color: "#e5e7eb"
    },
    tableHeaderCell: {
        padding: 10,
        fontSize: 10,
        color: "#ffffff",
        fontWeight: "bold"
    },
    col1: { width: "25%" },
    col2: { width: "18%" },
    col3: { width: "15%" },
    col4: { width: "15%" },
    col5: { width: "17%" },
    col6: { width: "10%" },
    badgeYes: {
        backgroundColor: "#fecaca",
        color: "#dc2626",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center"
    },
    badgeNo: {
        backgroundColor: "#bbf7d0",
        color: "#16a34a",
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
        color: "#60a5fa",
        fontSize: 12
    }
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

            <View style={styles.highlightBox}>
                <Text>{exerciseSummary}</Text>
            </View>

            <View style={styles.tableContainer}>
                <Text style={styles.tableTitle}>After-Action Reports</Text>
                
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <View style={styles.col1}>
                            <Text style={styles.tableHeaderCell}>Exercise Name</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text style={styles.tableHeaderCell}>Exercise Date</Text>
                        </View>
                        <View style={styles.col3}>
                            <Text style={styles.tableHeaderCell}>Exercise Type</Text>
                        </View>
                        <View style={styles.col4}>
                            <Text style={styles.tableHeaderCell}>Gaps Identified</Text>
                        </View>
                        <View style={styles.col5}>
                            <Text style={styles.tableHeaderCell}>Remediation Date</Text>
                        </View>
                        <View style={styles.col6}>
                            <Text style={styles.tableHeaderCell}>Action</Text>
                        </View>
                    </View>

                    {/* Table Rows */}
                    {exercises.map((exercise, index) => (
                        <View key={index} style={styles.tableRow}>
                            <View style={styles.col1}>
                                <Text style={styles.tableCell}>
                                    <Text style={styles.iconText}>{exercise.icon}</Text>
                                    {exercise.name}
                                </Text>
                            </View>
                            <View style={styles.col2}>
                                <Text style={styles.tableCell}>{exercise.date}</Text>
                            </View>
                            <View style={styles.col3}>
                                <Text style={styles.tableCell}>
                                    <Text style={styles.iconText}>📋</Text>
                                    {exercise.type}
                                </Text>
                            </View>
                            <View style={styles.col4}>
                                <View style={exercise.gapsIdentified === "Yes" ? styles.badgeYes : styles.badgeNo}>
                                    <Text>{exercise.gapsIdentified}</Text>
                                </View>
                            </View>
                            <View style={styles.col5}>
                                <Text style={styles.tableCell}>{exercise.remediationDate}</Text>
                            </View>
                            <View style={styles.col6}>
                                <Text style={[styles.tableCell, styles.actionIcon]}>
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