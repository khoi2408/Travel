// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { ComingSoonView } from 'src/sections/status/view';

// ----------------------------------------------------------------------

ComingSoonPage.getLayout = (page: React.ReactElement) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon | WinG</title>
      </Head>

      <ComingSoonView />
    </>
  );
}
