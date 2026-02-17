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
    color: "#ffffff",
    fontFamily: "Helvetica" // Ensure a standard font is used
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
    fontWeight: "bold",
    textAlign: "left" // Explicitly left align header title
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
    flexDirection: "column",
    alignItems: "flex-start" // Align footer text to left
  },
  footerPage: {
    textAlign: "right" // Align page number to right
  },
  footerUrl: {
    marginTop: 2,
    textDecoration: "underline"
  }
});

export default function BaseDocument({ 
  title, 
  children, 
  companyName = "Plan & Recover",
  logoUrl = "https://dummyimage.com/200x60/000/ffffff&text=plan+%26+recover",
  footerText = "© Plan & Recover. All rights reserved.",
  footerUrl = "www.planandrecover.com"
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* HEADER */}
        <View style={styles.header} fixed>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <Image style={styles.logo} src={logoUrl} />
          </View>
          <View style={styles.divider} />
        </View>

        {/* CONTENT */}
        <View style={{ marginTop: 20 }}>
          {children}
        </View>

        {/* FOOTER */}
        <View style={styles.footer} fixed>
          <View style={styles.footerLeft}>
            <Text>{footerText}</Text>
            <Text style={styles.footerUrl}>{footerUrl}</Text>
          </View>
          <View style={styles.footerPage}>
            <Text
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} / ${totalPages}`
              }
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}