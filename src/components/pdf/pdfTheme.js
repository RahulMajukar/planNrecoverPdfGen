import { StyleSheet } from "@react-pdf/renderer";

// ─── Color tokens ────────────────────────────────────────────────────────────
export const colors = {
    page: "#ffffff",
    text: "#111111",
    muted: "#555555",
    border: "#cccccc",
    tableHeaderBg: "#f3f4f6",
    tableText: "#111111",
    highlight: "#f9fafb",
    accent: "#333333",
    // Status / badge colors (kept minimal for fast rendering)
    riskHigh: "#111111",
    riskMedium: "#555555",
    riskLow: "#888888",
};

// ─── Shared styles ────────────────────────────────────────────────────────────
// Every style used by 2+ documents lives here.
// Documents import this object directly — no local StyleSheet.create() needed.
export const sharedStyles = StyleSheet.create({

    // ── Info block (company / date header rows) ──────────────────────────────
    infoBlock: {
        marginTop: 10,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: "row",
        marginBottom: 6,
        alignItems: "center",
        flexWrap: "wrap",
    },
    infoLabel: {
        width: 120,
        fontWeight: "bold",
        color: colors.text,
        fontSize: 11,
    },
    infoValue: {
        color: colors.muted,
        fontSize: 11,
        flex: 1,
    },

    // ── Headings ─────────────────────────────────────────────────────────────
    sectionTitle: {
        color: colors.text,
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 24,
        marginBottom: 10,
        textAlign: "left",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 4,
    },
    subsectionTitle: {
        color: colors.text,
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 6,
        textAlign: "left",
    },
    subsubsectionTitle: {
        color: colors.muted,
        fontSize: 10,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 4,
        textAlign: "left",
        fontStyle: "italic",
    },
    sectionNumber: {
        fontSize: 18,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 12,
        marginTop: 8,
    },

    // ── Body text ─────────────────────────────────────────────────────────────
    paragraph: {
        lineHeight: 1.6,
        color: colors.text,
        marginBottom: 10,
        fontSize: 10,
        textAlign: "justify",
        textIndent: 0,
    },
    italicText: {
        fontStyle: "italic",
        color: colors.muted,
        fontSize: 10,
    },
    bold: {
        fontWeight: "bold",
        color: colors.text,
    },
    italic: {
        fontStyle: "italic",
        color: colors.muted,
    },
    link: {
        color: colors.text,
        textDecoration: "underline",
    },

    // ── Lists ─────────────────────────────────────────────────────────────────
    bulletList: {
        marginLeft: 15,
        marginBottom: 10,
    },
    bulletItem: {
        lineHeight: 1.5,
        color: colors.text,
        fontSize: 10,
        marginBottom: 4,
        textAlign: "justify",
    },
    numberedList: {
        marginLeft: 20,
        marginBottom: 10,
    },
    numberedItem: {
        lineHeight: 1.5,
        color: colors.text,
        fontSize: 10,
        marginBottom: 6,
        textAlign: "justify",
    },
    nestedBullet: {
        marginLeft: 15,
        marginTop: 2,
        marginBottom: 2,
    },
    nestedBulletItem: {
        lineHeight: 1.4,
        color: colors.text,
        fontSize: 9,
        marginBottom: 2,
    },
    deepNested: {
        marginLeft: 25,
    },
    deepNestedItem: {
        lineHeight: 1.4,
        color: colors.text,
        fontSize: 9,
        marginBottom: 2,
    },
    smallBullet: {
        fontSize: 8,
        marginLeft: 0,
        marginBottom: 2,
        color: colors.text,
    },

    // ── Divider ───────────────────────────────────────────────────────────────
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        marginVertical: 14,
    },

    // ── Tables ────────────────────────────────────────────────────────────────
    table: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: colors.border,
        borderStyle: "solid",
    },
    tableRow: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: "flex-start",
    },
    tableHeader: {
        backgroundColor: colors.tableHeaderBg,
    },
    tableCell: {
        padding: 7,
        fontSize: 9,
        color: colors.tableText,
    },
    tableCellBold: {
        padding: 7,
        fontSize: 9,
        color: colors.tableText,
        fontWeight: "bold",
    },
    tableTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 10,
    },

    // ── Appendix / version control ────────────────────────────────────────────
    appendixTitle: {
        fontSize: 13,
        color: colors.text,
        fontWeight: "bold",
        marginTop: 22,
        marginBottom: 10,
    },
    versionControl: {
        marginTop: 28,
        paddingTop: 14,
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    versionTitle: {
        fontSize: 11,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 6,
    },

    // ── Role sections ─────────────────────────────────────────────────────────
    roleSection: {
        marginTop: 14,
        marginBottom: 14,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: colors.border,
    },
    roleTitle: {
        color: colors.text,
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 5,
    },
    roleDescription: {
        lineHeight: 1.5,
        color: colors.text,
        fontSize: 10,
        marginBottom: 3,
    },
    roleStandards: {
        fontSize: 9,
        color: colors.muted,
        fontStyle: "italic",
        marginTop: 3,
    },

    // ── Callout / info boxes ──────────────────────────────────────────────────
    intentBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.border,
        padding: 9,
        marginVertical: 7,
    },
    intentTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 3,
    },
    intentText: {
        fontSize: 10,
        color: colors.text,
        lineHeight: 1.5,
    },
    requirementsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 3,
        marginTop: 7,
    },
    outputsBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
        padding: 9,
        marginVertical: 7,
    },
    outputsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 3,
    },
    qualityBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.muted,
        padding: 9,
        marginVertical: 7,
    },
    qualityTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 3,
    },
    principlesBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.border,
        padding: 9,
        marginVertical: 10,
    },
    principlesTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 5,
    },
    howToUseBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
        padding: 9,
        marginVertical: 10,
    },
    howToUseTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 5,
    },
    highlightBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.border,
        padding: 9,
        marginVertical: 12,
        fontSize: 10,
        color: colors.text,
    },
    insightsBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.accent,
        padding: 9,
        marginVertical: 10,
    },
    insightsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 5,
    },
    insightsItem: {
        fontSize: 10,
        color: colors.text,
        marginBottom: 3,
        lineHeight: 1.5,
    },
    pitfallsBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.muted,
        padding: 9,
        marginVertical: 10,
    },
    pitfallsTitle: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 3,
    },

    // ── Document-specific header blocks ──────────────────────────────────────
    docHeader: {
        marginBottom: 18,
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    docTitle: {
        fontSize: 17,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 6,
    },
    docAlignment: {
        fontSize: 9,
        color: colors.muted,
        fontStyle: "italic",
        marginBottom: 10,
    },
    docMeta: {
        fontSize: 10,
        color: colors.text,
        lineHeight: 1.5,
    },

    // ── Approval / management boxes ───────────────────────────────────────────
    approvalSection: {
        marginBottom: 18,
        paddingBottom: 13,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    approvalText: {
        lineHeight: 1.6,
        color: colors.text,
        marginBottom: 8,
        fontSize: 10,
        textAlign: "justify",
    },
    approvalBox: {
        backgroundColor: colors.highlight,
        borderLeftWidth: 3,
        borderLeftColor: colors.border,
        padding: 9,
        marginTop: 10,
    },
    approvalBoxText: {
        fontSize: 9,
        color: colors.muted,
        lineHeight: 1.4,
    },

    // ── Status badges ─────────────────────────────────────────────────────────
    statusGreen: {
        backgroundColor: "#d1fae5",
        color: "#065f46",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 6,
    },
    statusAmber: {
        backgroundColor: "#fef3c7",
        color: "#92400e",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 6,
    },
    statusRed: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        marginLeft: 6,
    },

    // ── Exercise / risk badges ────────────────────────────────────────────────
    badgeYes: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    badgeNo: {
        backgroundColor: "#d1fae5",
        color: "#065f46",
        paddingHorizontal: 7,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    riskHigh: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    riskMedium: {
        backgroundColor: "#fef3c7",
        color: "#92400e",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    riskLow: {
        backgroundColor: "#d1fae5",
        color: "#065f46",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    controlYes: {
        backgroundColor: "#d1fae5",
        color: "#065f46",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },
    controlNo: {
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
        fontSize: 9,
        fontWeight: "bold",
        textAlign: "center",
    },

    // ── Table of Contents ─────────────────────────────────────────────────────
    tocTitle: {
        fontSize: 16,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 14,
    },
    tocItem: {
        flexDirection: "row",
        marginBottom: 5,
        alignItems: "baseline",
    },
    tocNumber: {
        width: 28,
        color: colors.text,
        fontSize: 10,
    },
    tocText: {
        flex: 1,
        color: colors.text,
        fontSize: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        borderBottomStyle: "dotted",
        marginRight: 4,
    },
    tocPage: {
        color: colors.text,
        fontSize: 10,
        width: 28,
        textAlign: "right",
    },

    // ── Cover page ────────────────────────────────────────────────────────────
    coverPage: {
        backgroundColor: colors.page,
        padding: 40,
        paddingTop: 100,
    },
    coverTitle: {
        fontSize: 22,
        color: colors.text,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 60,
    },
    coverSubTitle: {
        fontSize: 13,
        color: colors.muted,
        marginBottom: 18,
        lineHeight: 1.5,
    },
    companyBox: {
        color: colors.text,
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 6,
    },
    dateBox: {
        color: colors.muted,
        fontSize: 10,
        marginTop: 3,
    },

    // ── Definition list ───────────────────────────────────────────────────────
    definitionTerm: {
        fontWeight: "bold",
        color: colors.text,
        fontSize: 10,
        marginBottom: 2,
    },
    definitionDesc: {
        color: colors.muted,
        fontSize: 9,
        marginBottom: 5,
        marginLeft: 14,
        lineHeight: 1.4,
    },

    // ── Misc ──────────────────────────────────────────────────────────────────
    lastUpdatedText: {
        marginBottom: 10,
    },
    iconText: {
        fontSize: 11,
        marginRight: 5,
    },
    actionIcon: {
        color: colors.text,
        fontSize: 11,
    },
    bulletPoint: {
        fontWeight: "bold",
        color: colors.text,
    },
});
