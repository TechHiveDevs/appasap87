import React from "react";
import { useTranslate } from "react-admin";

// =================================================================

export default function NoRecords({ children }: any) {
  const translate = useTranslate();
  return (
    <div style={styles.container}>
      {/* {`${translate("no")} ${translate(title)}`} */}
      {children}
    </div>
  );
}

// =================================================================
const styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "50px",
    fontSize: 35,
    color: "#c7c7c7",
    fontFamily: "monospace",
    fontWeight: "300",
  },
};
