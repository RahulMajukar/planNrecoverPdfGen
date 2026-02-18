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
    backgroundColor: "#ffffff",
    paddingTop: 80,
    paddingBottom: 70,
    paddingHorizontal: 50,
    fontSize: 11,
    color: "#111111",
    fontFamily: "Helvetica"
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
    color: "#111111",
    fontWeight: "bold",
    textAlign: "left"
  },
  logo: {
    width: 90,
    height: 20,
    objectFit: "contain"
  },
  divider: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
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
    color: "#555555"
  },
  footerLeft: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  footerPage: {
    textAlign: "right"
  },
  footerUrl: {
    marginTop: 2,
    textDecoration: "underline"
  }
});

/**
 * PageWrapper — use this in multi-page documents (like BusinessContinuityPlan)
 * where each section manages its own <Page>. Wrap your content with this
 * instead of a bare <Page> to get the standard header and footer.
 */
export function PageWrapper({
  children,
  title = "Business Continuity Plan",
  logoUrl = "https://dummyimage.com/200x60/000/ffffff&text=plan+%26+recover",
  footerText = "© Plan & Recover. All rights reserved.",
  footerUrl = "www.planandrecover.com",
  style = {}
}) {
  return (
    <Page size="A4" style={[styles.page, style]} wrap>
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
  );
}

/**
 * BaseDocument — default single-page document wrapper.
 * Used by simpler documents that don't manage their own pages.
 */
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
      <PageWrapper
        title={title}
        logoUrl={logoUrl}
        footerText={footerText}
        footerUrl={footerUrl}
      >
        {children}
      </PageWrapper>
    </Document>
  );
}