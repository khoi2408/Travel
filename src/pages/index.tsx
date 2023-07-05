// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import TravelLandingView from 'src/sections/_travel/view/TravelLandingView';

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Địa điểm du lịch ở Phú Yên | WinG</title>
      </Head>

      <TravelLandingView />

    </>
  );
}
