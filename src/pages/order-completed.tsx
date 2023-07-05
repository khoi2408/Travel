// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { TravelOrderCompletedView } from 'src/sections/_travel/view';

// ----------------------------------------------------------------------

TravelOrderCompletedPage.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function TravelOrderCompletedPage() {
  return (
    <>
      <Head>
        <title>Đặt thành công | WinG</title>
      </Head>

      <TravelOrderCompletedView />
    </>
  );
}
