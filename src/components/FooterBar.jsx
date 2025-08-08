import { Box, Container, Grid, Typography, Link, Stack, Divider } from "@mui/material";
import { Facebook, X, Instagram } from "@mui/icons-material";

export default function FooterBar() {
  return (
    <Box component="footer" sx={{ mt: 6, bgcolor: "teal", color: "white", pt: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={700}>Explore</Typography>
            <Stack spacing={0.5}>
              <Link color="inherit" underline="hover">Home</Link>
              <Link color="inherit" underline="hover">Questions</Link>
              <Link color="inherit" underline="hover">Articles</Link>
              <Link color="inherit" underline="hover">Tutorials</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={700}>Support</Typography>
            <Stack spacing={0.5}>
              <Link color="inherit" underline="hover">FAQs</Link>
              <Link color="inherit" underline="hover">Help</Link>
              <Link color="inherit" underline="hover">Contact Us</Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" fontWeight={700}>Stay connected</Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Facebook />
              <X />
              <Instagram />
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.3)" }} />

        <Typography align="center" sx={{ mb: 1 }}>DEV@Deakin 2022</Typography>

        <Stack direction="row" spacing={3} justifyContent="center" sx={{ pb: 2 }}>
          <Link color="inherit" underline="hover">Privacy Policy</Link>
          <Link color="inherit" underline="hover">Terms</Link>
          <Link color="inherit" underline="hover">Code of Conduct</Link>
        </Stack>
      </Container>
    </Box>
  );
}
