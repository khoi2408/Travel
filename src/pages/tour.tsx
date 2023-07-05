// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelTourView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelTourPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelTourPage() {
  return (
    <>
      <Head>
        <title>Gành Đá Đĩa - Hành trình khám phá đất Phú | WinG</title>
      </Head>

      <TravelTourView />
    </>
  );
}
