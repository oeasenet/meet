import { videoCodecs } from 'livekit-client';
import { VideoConferenceClientImpl } from './VideoConferenceClientImpl';
import { isVideoCodec } from '@/lib/types';
import Link from 'next/link';

export default function CustomRoomConnection(props: {
  searchParams: {
    token?: string;
    codec?: string;
  };
}) {
  const { token, codec } = props.searchParams;
  if (typeof token !== 'string') {
    return (
      <main className="error-page" data-lk-theme="default">
        <div className="error-block">
          <img src="/images/LogoHFitted.svg" alt="OEASE Meet" width="780" height="75" />
          <h1>You are not allowed to visit this page.</h1>
          <Link href="https://oease.net" className="home-link">Visit Home Page</Link>
        </div>
      </main>
    );
  }
  if (codec !== undefined && !isVideoCodec(codec)) {
    return <h2>Invalid codec, if defined it has to be [{videoCodecs.join(', ')}].</h2>;
  }

  return (
    <main data-lk-theme="default" style={{ height: '100%' }}>
      <VideoConferenceClientImpl
        liveKitUrl={'https://server.oemeet.com'}
        token={token}
        codec={codec}
      />
    </main>
  );
}
