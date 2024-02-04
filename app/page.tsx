import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Bridget',
    },
    {
      label: 'Ecosystem',
      action: 'post_redirect',
    },
  ],
  image: `${NEXT_PUBLIC_URL}/Coinbase-Logo-2012.png`,
  input: {
    text: 'what do you know about crypto',
  },
  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'bridgeharris.com',
  description: 'LFG',
  openGraph: {
    title: 'bridgeharris.com',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/Coinbase-Logo-2012.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>bridgeharris.com</h1>
    </>
  );
}
