import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div css={styles}>{children}</div>;
};

export default Layout;

const styles = css`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  max-width: 600px;
`;
