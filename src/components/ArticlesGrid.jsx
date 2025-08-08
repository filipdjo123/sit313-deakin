import { useMemo } from "react";
import {
  Grid, Card, CardContent, CardMedia, Typography,
  CardActionArea, Box, Rating, Stack, Button
} from "@mui/material";
import { faker } from "@faker-js/faker";

function makeItems(count, seedPrefix = "article") {
  return Array.from({ length: count }, (_, i) => {
    const id = `${seedPrefix}-${i}`;
    return {
      id,
      title: faker.lorem.words(3),
      excerpt: faker.lorem.sentence(),
      image: `https://picsum.photos/seed/${encodeURIComponent(id)}/600/400`,
      rating: Number((Math.random() * 1 + 4).toFixed(1)), // 4.0–5.0
      author: faker.person.firstName() + " " + faker.person.lastName(),
    };
  });
}

export default function ArticlesGrid({ query }) {
  const items = useMemo(() => makeItems(6, "article"), []);
  const q = (query ?? "").trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!q) return items;
    return items.filter(it => {
      const hay = `${it.title} ${it.excerpt} ${it.author}`.toLowerCase();
      return hay.includes(q);
    });
  }, [items, q]);

  return (
    <Box>
      <Grid container spacing={3}>
        {filtered.slice(0, 3).map((item) => (
          <Grid key={item.id} item xs={12} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="140" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={700}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.excerpt}
                  </Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Rating size="small" precision={0.1} value={item.rating} readOnly />
                    <Typography variant="body2" color="text.secondary">{item.rating}</Typography>
                    <Typography variant="body2" sx={{ ml: "auto" }}>
                      <b>Author’s name</b>: {item.author}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button variant="contained">See all articles</Button>
      </Box>
    </Box>
  );
}
