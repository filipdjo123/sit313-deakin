import { AppBar, Toolbar, Typography, Container, Button, Box, TextField } from "@mui/material";
import { useState } from "react";

export default function HeaderBar({ onSearch }) {
  const [q, setQ] = useState("");

  return (
    <AppBar position="sticky" sx={{bgcolor: "grey"}}>
      <Container maxWidth="lg" >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Typography variant="h6" noWrap>
            DEV@Deakin
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "center" }}>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search..."
              value={q}
              onChange={(e) => {
                const val = e.target.value;
                setQ(val);
                onSearch?.(val);
              }}
              sx={{ bgcolor: "white", borderRadius: 1, width: 500 }}
            />
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Articles</Button>
            <Button color="inherit">Tutorials</Button>
            <Button color="inherit">About</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
