import * as React from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Card, Typography, Box } from "@mui/material";


// Komponen custom MDX
const components = {
  Link,
};

export default async function Blog({
  content,
  title,
}: {
  content: any;
  title: string;
}) {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      {/* Konten MDX */}
      <MDXRemote components={components} source={content} />
    </div>
  );
}
