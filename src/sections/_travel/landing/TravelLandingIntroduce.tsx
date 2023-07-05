import { useRef } from 'react';
// @mui
import { Typography, Container, Stack, Box, Card } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
import useBoundingClientRect from 'src/hooks/useBoundingClientRect';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    title: 'Hướng dẫn viên du lịch chuyên nghiệp',
    description: 'Đội ngũ nhân viên chuyên nghiệp.',
    icon: '/assets/icons/ic_popularity.svg',
  },
  {
    title: 'Sự hài lòng của khách hàng',
    description: 'Đảm bảo chất lượng dịch vụ tốt nhất.',
    icon: '/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Thanh toán an toàn',
    description: 'Cam kết giá tốt nhất & thanh toán an toàn.',
    icon: '/assets/icons/ic_secure_payment.svg',
  },
];

// ----------------------------------------------------------------------

export default function TravelLandingIntroduce() {
  const isMdUp = useResponsive('up', 'md');

  const containerRef = useRef<HTMLDivElement>(null);

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container && container.left + 20;

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Container ref={containerRef}>
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            mx: { xs: 'auto', md: 'unset' },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Typography variant="h2">Khám phá là một cách khác để du lịch</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Đích đến của chúng ta không phải là một vùng đất, mà là một cách nhìn mới.
          </Typography>
        </Stack>
      </Container>

      <Box
        sx={{
          position: 'relative',
          my: { xs: 8, md: 10 },
          ml: { md: `${offsetLeft}px` },
        }}
      >
        <Card
          sx={{
            p: 5,
            top: 0,
            left: 0,
            zIndex: 9,
            m: { xs: 2, md: 5 },
            position: 'absolute',
            maxWidth: { sm: 360 },
            right: { xs: 0, sm: 'unset' },
            bottom: { xs: 0, sm: 'unset' },
            textAlign: { xs: 'center', sm: 'unset' },
            display: 'flex',
            alignItems: { xs: 'center', sm: 'unset' },
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Pierre Bernardo
          </Typography>

          <Typography variant="h4" sx={{ my: 3 }}>
            Đi chính là để tiến hóa
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', sm: 'unset' }}
            sx={{
              cursor: 'pointer',
              color: 'primary.main',
              typography: 'subtitle1',
              '&:hover': { opacity: 0.72 },
            }}
          >
            <Iconify icon="carbon:play" width={24} sx={{ mr: 1 }} /> Xem Video
          </Stack>
        </Card>

        <Image
          alt="cover"
          src="/assets/images/travel/travel_post_hero.jpg"
          width={1600}
          height={isMdUp ? 900 : 1600}
          ratio={isMdUp ? '16/9' : '1/1'}
        />
      </Box>

      <Container sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack key={value.title} spacing={2}>
              <SvgColor
                src={value.icon}
                sx={{ mb: 3, width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              />

              <Typography variant="h5">{value.title}</Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
