import { Box, Container, TextField, Button, Typography } from "@mui/material";

export default function NewsletterBar() {
  return (
    <Box sx={{ bgcolor: "grey.300", py: 2, mt: 4, borderTop: 1, borderBottom: 1, borderColor: "grey.400" }}>
      <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="subtitle1" fontWeight={700}>
          SIGN UP FOR OUR DAILY INSIDER
        </Typography>
        <TextField size="small" placeholder="Enter your email" sx={{ bgcolor: "white", flex: 1 }} />
        <Button variant="contained">Subscribe</Button>
      </Container>
    </Box>
  );
}
