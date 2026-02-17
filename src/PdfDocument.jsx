import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#2b2b2b",
    paddingTop: 80,
    paddingBottom: 70,
    paddingHorizontal: 50,
    fontSize: 11,
    color: "#ffffff"
  },

  header: {
    position: "absolute",
    top: 30,
    left: 50,
    right: 50
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 18,
    color: "#60a5fa",
    fontWeight: "bold"
  },

  logo: {
    width: 90,
    height: 20,
    objectFit: "contain"
  },

  divider: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb"
  },

  infoBlock: {
    marginTop: 20
  },

  infoRow: {
    flexDirection: "row",
    marginBottom: 6
  },

  infoLabel: {
    width: 70,
    fontWeight: "bold"
  },

  infoValue: {
    backgroundColor: "#facc15",
    color: "#000000",
    paddingHorizontal: 4
  },

  sectionTitle: {
    color: "#22c55e",
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 18,
    marginBottom: 6
  },

  paragraph: {
    lineHeight: 1.5,
    color: "#e5e7eb",
    marginBottom: 8
  },

  link: {
    color: "#93c5fd"
  },

  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    fontSize: 9,
    color: "#9ca3af"
  },

  footerLeft: {
    flexDirection: "column"
  }
});

const longText = `A formal business continuity, crisis management, threat & vulnerability
risk analysis, and emergency response program is in place and is considered
well-controlled and generally compliant with the core expectations reflected
in ISO 22301 and the DRI 10 Professional Practices. A complete analysis of
critical processes has been completed, with documented business impacts and
Recovery Time Objectives (RTOs) for each critical process, enabling disciplined
recovery triage and an understanding of impact escalation across varying outage
durations. The development of governance, risk assessment, and recovery
strategies indicate a program that is positioned to reduce disruption severity,
shorten recovery time, and improve operational reliability for customers and
other stakeholders.`;

export default function PdfDocument({ companyName }) {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>

        {/* HEADER */}
        <View style={styles.header} fixed>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Client Program Statement</Text>

            <Image
              style={styles.logo}
              src="https://dummyimage.com/200x60/000/ffffff&text=plan+%26+recover"
            />
          </View>
          <View style={styles.divider} />
        </View>

        {/* BODY */}
        <View style={styles.infoBlock}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Company:</Text>
            <Text style={styles.infoValue}>
              {companyName || "Display name of company"}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date:</Text>
            <Text style={styles.infoValue}>
              {new Date().toLocaleDateString()}
            </Text>
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

        {[...Array(6)].map((_, i) => (
          <Text key={i} style={styles.paragraph}>
            {longText}
          </Text>
        ))}

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <View style={styles.footerLeft}>
            <Text>© Plan & Recover. All rights reserved.</Text>
            <Text>www.planandrecover.com</Text>
          </View>

          <Text
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
          />
        </View>

      </Page>
    </Document>
  );
}
