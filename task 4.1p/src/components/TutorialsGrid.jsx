import { useMemo } from "react";
import {
  Grid, Card, CardContent, CardMedia, Typography,
  Box, Rating, Stack, Button
} from "@mui/material";
import { faker } from "@faker-js/faker";

function makeItems(count, seedPrefix = "tutorial") {
  return Array.from({ length: count }, (_, i) => {
    const id = `${seedPrefix}-${i}`;
    return {
      id,
      title: faker.helpers.arrayElement(["React", "NodeJS", "Express", "Router", "JS6"]) + " Guide",
      summary: faker.lorem.sentence(),
      image: `https://picsum.photos/seed/${encodeURIComponent(id)}/600/400`,
      rating: Number((Math.random() * 1 + 4).toFixed(1)),
      user: faker.internet.userName(),
    };
  });
}

export default function TutorialsGrid({ query }) {
  const items = useMemo(() => makeItems(6, "tutorial"), []);
  const q = (query ?? "").trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return items;
    return items.filter(t => {
      const hay = `${t.title} ${t.summary} ${t.user}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, q]);



  return (
    <Box>
      <Grid container spacing={3}>
        {filtered.slice(0, 3).map((t) => (
          <Grid key={t.id} item xs={12} md={4}>
            <Card>
              <CardMedia component="img" height="160" image={t.image} alt={t.title} sx={{ objectFit: "cover" }} />
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700}>{t.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {t.summary}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Rating size="small" precision={0.1} value={t.rating} readOnly />
                  <Typography variant="body2" color="text.secondary">{t.rating}</Typography>
                  <Typography variant="body2" sx={{ ml: "auto" }}>
                    <b>username</b>: {t.user}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained">See all tutorials</Button>
      </Box>
    </Box>
  );
}
