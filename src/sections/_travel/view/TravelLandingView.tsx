// @mui
import { Box, Container } from '@mui/material';
import { alpha } from '@mui/material/styles';
// _mock
import { _testimonials, _tours } from 'src/_mock';
//
import NewsletterTravel from '../../newsletter/travel';
import TestimonialTravel from '../../testimonial/travel';
import {
  TravelLandingFavoriteDestinations, TravelLandingHero, TravelLandingIntroduce, TravelLandingSummary, TravelLandingTourFeatured, TravelLandingToursByCity
} from '../landing';
import TravelFilters from '../tour/filters';

// ----------------------------------------------------------------------

export default function TravelLandingView() {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <TravelLandingHero tours={_tours.slice(0, 5)} />

        <Container
          sx={{
            mb: { md: 10 },
            left: { md: 0 },
            right: { md: 0 },
            bottom: { md: 0 },
            mx: { md: 'auto' },
            pt: { xs: 3, md: 0 },
            position: { md: 'absolute' },
          }}
        >
          <TravelFilters
            sx={{
              color: { md: 'common.white' },
              bgcolor: (theme) => ({
                xs: 'background.neutral',
                md: alpha(theme.palette.common.white, 0.08),
              }),
            }}
          />
        </Container>
      </Box>

      <TravelLandingIntroduce />

      <TravelLandingSummary />

      <TravelLandingFavoriteDestinations tours={_tours.slice(0, 4)} />

      <TravelLandingTourFeatured tours={_tours.slice(0, 4)} />

      <TravelLandingToursByCity tours={_tours.slice(0, 8)} />

      <TestimonialTravel testimonials={_testimonials} />

      <NewsletterTravel />
    </>
  );
}
