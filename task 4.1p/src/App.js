import { useState } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import HeaderBar from "./components/HeaderBar";
import ArticlesGrid from "./components/ArticlesGrid";
import TutorialsGrid from "./components/TutorialsGrid";
import NewsletterBar from "./components/NewsletterBar";
import FooterBar from "./components/FooterBar";

export default function App() {
  const [query, setQuery] = useState("");
  <HeaderBar onSearch={setQuery} />;
  <ArticlesGrid query={query} />;
  <TutorialsGrid query={query} />;

  return (
    <>
      <HeaderBar onSearch={setQuery} />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box
          sx={{
            height: 260,
            border: "3px solid grey",
            overflow: "hidden",
          }}
        >
          <img
            src="/everest.jpg"
            alt="Banner"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box sx={{ py: 3 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>Featured Articles</Typography>
          <ArticlesGrid query={query} />
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ pb: 6 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>Featured Tutorials</Typography>
          <TutorialsGrid query={query} />
        </Box>
      </Container>

      <NewsletterBar />
      <FooterBar />
    </>
  );
}
