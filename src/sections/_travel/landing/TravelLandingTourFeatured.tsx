// next
import NextLink from 'next/link';
// @mui
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// types
import { ITourProps } from 'src/types/tour';
//
import TravelTourItem from '../tour/item/TravelTourItem';

// ----------------------------------------------------------------------

type Props = {
  tours: ITourProps[];
};

export default function TravelLandingTourFeatured({ tours }: Props) {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ textAlign: 'center' }}>
        <Typography variant="h3">Tour nổi bật</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Các tour nổi bật của chúng tôi có thể giúp bạn tìm thấy chuyến đi hoàn hảo cho mình!
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          my: { xs: 8, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {tours.map((tour) => (
          <TravelTourItem key={tour.id} tour={tour} />
        ))}
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          component={NextLink}
          href={paths.tours}
          size="large"
          variant="outlined"
          color="inherit"
        >
          Xem thêm
        </Button>
      </Box>
    </Container>
  );
}
